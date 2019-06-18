[@bs.val] external alert: string => unit = "alert";
module Style = {
  open Css;
  let rootHeight = 300;
  let rootWidth = 300;
  let cellHeight = rootHeight / 3;
  let cellWidth = rootWidth / 3;

  let root =
    style([
      backgroundColor(`rgb((100, 100, 100))),
      width(px(rootHeight)),
      height(px(rootWidth)),
      display(`flex),
      flexWrap(`wrap),
    ]);

  let cell =
    style([
      flexBasis(`percent(33.33)),
      width(px(cellHeight)),
      height(px(cellWidth)),
    ]);

  let mainboard = style([display(`flex), flexWrap(`wrap)]);

  let emptyCell =
    style([
      width(px(cellWidth)),
      height(px(cellHeight)),
      backgroundColor(`rgb((200, 200, 200))),
    ]);

  let cellImg =
    style([
      width(px(cellHeight)),
      height(px(cellWidth)),
      marginBottom(px(0)),
    ]);
};

let player1Char = 'O';
let player2Char = 'X';
let emptyChar = 'E';

type player = [ | `Player1 | `Player2];
type gameCellOwner = [ player | `Empty];

type gameStatusT =
  | Turn(player)
  | Win(player)
  | Draw;

let testWinning = (value: 'a) => {
  let winningCombo = [448, 56, 7, 292, 146, 73, 273, 84];
  List.exists(
    item => {
      let result = [%bs.raw "item === (parseInt(value,2) & item)"];
      result;
    },
    winningCombo,
  );
};

module Cell = {
  [@react.component]
  let make =
      (~handleClick=?, ~owner: option(gameCellOwner)=`Empty, ~disabled=false) => {
    <div
      className=Style.cell
      onClick={ev =>
        switch (disabled, handleClick) {
        | (false, Some(handler)) => handler(ev)
        | _ => ()
        }
      }>
      {switch (owner) {
       | `Empty => <div className=Style.emptyCell />
       | `Player1 =>
         <img
           className=Style.emptyCell
           src="/images/tick.png"
           width="42"
           height="42"
         />
       | `Player2 =>
         <img
           className=Style.emptyCell
           src="/images/cross.png"
           width="42"
           height="42"
         />
       }}
    </div>;
  };
};

module GameBoard = {
  type stateT = {
    gameBoard: array(gameCellOwner),
    gameStatus: gameStatusT,
  };

  let initState = {
    gameBoard: Array.make(9, `Empty),
    gameStatus: Turn(`Player1),
  };

  type actionT =
    | Choose(player, int);

  let calculateBoard = (currentState: stateT, index: int, plyer: player) => {
    let newboard = Array.copy(currentState.gameBoard);
    switch (plyer) {
    | `Player1 => newboard[index] = `Player1
    | `Player2 => newboard[index] = `Player2
    };
    newboard;
  };

  let convertBoardToBinary = (gameBoard: array(gameCellOwner), plyer): string => {
    let reducer = (acc, current) => {
      switch (plyer, current) {
      | (`Player1, `Player1) => acc ++ String.make(1, '1')
      | (`Player2, `Player2) => acc ++ String.make(1, '1')
      | _ => acc ++ String.make(1, '0')
      };
    };

    let result = Array.fold_left(reducer, "", gameBoard);
    result;
  };

  let calculateGameStatus = (gameBoard: array(gameCellOwner), currentPlayer) => {
    let isDraw =
      !List.exists(item => item == `Empty, Array.to_list(gameBoard));
    let isWinning =
      convertBoardToBinary(gameBoard, currentPlayer) |> testWinning;

    switch (isWinning, isDraw) {
    | (true, _) => Win(currentPlayer)
    | (false, true) => Draw
    | (false, false) =>
      switch (currentPlayer) {
      | `Player1 => Turn(`Player2)
      | `Player2 => Turn(`Player1)
      }
    };
  };

  let randomChoose = (items: list(gameCellOwner)) => {
    let convert =
      List.mapi((index, el) =>
        switch (el) {
        | `Empty => index
        | _ => (-1)
        }
      );

    let fliter =
      List.filter(el =>
        switch (el) {
        | (-1) => false
        | _ => true
        }
      );

    let choice = items |> convert |> fliter;
    let pick = Js.Math.random_int(0, List.length(choice));

    List.nth(choice, pick);
  };

  [@react.component]
  let make = () => {
    let (state, dispatch) =
      React.useReducer(
        (state, action) => {
          let newState =
            switch (action) {
            | Choose(plyer, index) =>
              let newBoard = calculateBoard(state, index, plyer);
              {
                gameBoard: newBoard,
                gameStatus: calculateGameStatus(newBoard, plyer),
              };
            };
          newState;
        },
        initState,
      );

    React.useEffect1(
      () => {
        if (state.gameStatus == Turn(`Player2)) {
          Array.to_list(state.gameBoard)
          |> randomChoose
          |> (index => Choose(`Player2, index))
          |> dispatch;
        };
        None;
      },
      [|state.gameStatus|],
    );

    let handleClick = (index, _) => {
      dispatch(Choose(`Player1, index));
    };

    <div>
      <h1>
        {switch (state.gameStatus) {
         | Turn(`Player1) => <h1> {React.string("Player 1 Turn")} </h1>
         | Turn(`Player2) => <h1> {React.string("Player 2 Turn")} </h1>
         | Win(`Player1) => <h1> {React.string("Player 1 Win")} </h1>
         | Win(`Player2) => <h1> {React.string("Player 2 Win")} </h1>
         | Draw => <h1> {React.string("Draw")} </h1>
         }}
      </h1>
      <div className=Style.mainboard>
        {state.gameBoard
         |> Array.mapi((i, el) =>
              <Cell
                key={string_of_int(i)}
                owner=el
                handleClick={handleClick(i)}
                disabled={
                  switch (state.gameBoard[i], state.gameStatus) {
                  | (_, Win(_)) => true
                  | (_, Draw) => true
                  | (`Empty, Turn(_)) => false
                  | _ => true
                  }
                }
              />
            )
         |> ReasonReact.array}
      </div>
    </div>;
  };
};
