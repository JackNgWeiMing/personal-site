// Generated by BUCKLESCRIPT VERSION 5.0.2, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Js_math = require("bs-platform/lib/js/js_math.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

var cellHeight = 100;

var cellWidth = 100;

var root = Css.style(/* :: */[
      Css.backgroundColor(/* `rgb */[
            5692173,
            /* tuple */[
              100,
              100,
              100
            ]
          ]),
      /* :: */[
        Css.width(Css.px(300)),
        /* :: */[
          Css.height(Css.px(300)),
          /* :: */[
            Css.display(/* flex */-1010954439),
            /* :: */[
              Css.flexWrap(/* wrap */-822134326),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var cell = Css.style(/* :: */[
      Css.flexBasis(/* `percent */[
            -119887163,
            33.33
          ]),
      /* :: */[
        Css.width(Css.px(cellHeight)),
        /* :: */[
          Css.height(Css.px(cellWidth)),
          /* [] */0
        ]
      ]
    ]);

var mainboard = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.flexWrap(/* wrap */-822134326),
        /* [] */0
      ]
    ]);

var emptyCell = Css.style(/* :: */[
      Css.width(Css.px(cellWidth)),
      /* :: */[
        Css.height(Css.px(cellHeight)),
        /* :: */[
          Css.backgroundColor(/* `rgb */[
                5692173,
                /* tuple */[
                  200,
                  200,
                  200
                ]
              ]),
          /* [] */0
        ]
      ]
    ]);

var cellImg = Css.style(/* :: */[
      Css.width(Css.px(cellHeight)),
      /* :: */[
        Css.height(Css.px(cellWidth)),
        /* :: */[
          Css.marginBottom(Css.px(0)),
          /* [] */0
        ]
      ]
    ]);

var Style = /* module */[
  /* rootHeight */300,
  /* rootWidth */300,
  /* cellHeight */cellHeight,
  /* cellWidth */cellWidth,
  /* root */root,
  /* cell */cell,
  /* mainboard */mainboard,
  /* emptyCell */emptyCell,
  /* cellImg */cellImg
];

function testWinning(value) {
  return List.exists((function (item) {
                return (item === (parseInt(value,2) & item));
              }), /* :: */[
              448,
              /* :: */[
                56,
                /* :: */[
                  7,
                  /* :: */[
                    292,
                    /* :: */[
                      146,
                      /* :: */[
                        73,
                        /* :: */[
                          273,
                          /* :: */[
                            84,
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

function TicTacToc$Cell(Props) {
  var handleClick = Props.handleClick;
  var match = Props.owner;
  var owner = match !== undefined ? match : /* Empty */50834029;
  var match$1 = Props.disabled;
  var disabled = match$1 !== undefined ? match$1 : false;
  return React.createElement("div", {
              className: cell,
              onClick: (function (ev) {
                  if (disabled || handleClick === undefined) {
                    return /* () */0;
                  } else {
                    return Curry._1(handleClick, ev);
                  }
                })
            }, owner !== -681168495 ? (
                owner >= 50834029 ? React.createElement("div", {
                        className: emptyCell
                      }) : React.createElement("img", {
                        className: emptyCell,
                        height: "42",
                        src: "/images/tick.png",
                        width: "42"
                      })
              ) : React.createElement("img", {
                    className: emptyCell,
                    height: "42",
                    src: "/images/cross.png",
                    width: "42"
                  }));
}

var Cell = /* module */[/* make */TicTacToc$Cell];

var initState_000 = /* gameBoard */Caml_array.caml_make_vect(9, /* Empty */50834029);

var initState_001 = /* gameStatus : Turn */Block.__(0, [/* Player1 */-681168496]);

var initState = /* record */[
  initState_000,
  initState_001
];

function calculateBoard(currentState, index, plyer) {
  var newboard = $$Array.copy(currentState[/* gameBoard */0]);
  if (plyer >= -681168495) {
    Caml_array.caml_array_set(newboard, index, /* Player2 */-681168495);
  } else {
    Caml_array.caml_array_set(newboard, index, /* Player1 */-681168496);
  }
  return newboard;
}

function convertBoardToBinary(gameBoard, plyer) {
  var reducer = function (acc, current) {
    var exit = 0;
    if (plyer !== -681168496) {
      if (plyer !== -681168495 || current !== -681168495) {
        exit = 1;
      } else {
        return acc + $$String.make(1, /* "1" */49);
      }
    } else if (current !== -681168496) {
      exit = 1;
    } else {
      return acc + $$String.make(1, /* "1" */49);
    }
    if (exit === 1) {
      return acc + $$String.make(1, /* "0" */48);
    }
    
  };
  return $$Array.fold_left(reducer, "", gameBoard);
}

function calculateGameStatus(gameBoard, currentPlayer) {
  var isDraw = !List.exists((function (item) {
          return item === /* Empty */50834029;
        }), $$Array.to_list(gameBoard));
  var isWinning = testWinning(convertBoardToBinary(gameBoard, currentPlayer));
  if (isWinning) {
    return /* Win */Block.__(1, [currentPlayer]);
  } else if (isDraw) {
    return /* Draw */0;
  } else if (currentPlayer >= -681168495) {
    return /* Turn */Block.__(0, [/* Player1 */-681168496]);
  } else {
    return /* Turn */Block.__(0, [/* Player2 */-681168495]);
  }
}

function randomChoose(items) {
  var convert = function (param) {
    return List.mapi((function (index, el) {
                  if (el !== 50834029) {
                    return -1;
                  } else {
                    return index;
                  }
                }), param);
  };
  var fliter = List.filter((function (el) {
          return el !== -1;
        }));
  var choice = Curry._1(fliter, convert(items));
  var pick = Js_math.random_int(0, List.length(choice));
  return List.nth(choice, pick);
}

function TicTacToc$GameBoard(Props) {
  var match = React.useReducer((function (state, action) {
          var plyer = action[0];
          var newBoard = calculateBoard(state, action[1], plyer);
          return /* record */[
                  /* gameBoard */newBoard,
                  /* gameStatus */calculateGameStatus(newBoard, plyer)
                ];
        }), initState);
  var dispatch = match[1];
  var state = match[0];
  React.useEffect((function () {
          if (Caml_obj.caml_equal(state[/* gameStatus */1], /* Turn */Block.__(0, [/* Player2 */-681168495]))) {
            Curry._1(dispatch, /* Choose */[
                  /* Player2 */-681168495,
                  randomChoose($$Array.to_list(state[/* gameBoard */0]))
                ]);
          }
          return undefined;
        }), /* array */[state[/* gameStatus */1]]);
  var match$1 = state[/* gameStatus */1];
  var tmp;
  tmp = typeof match$1 === "number" ? React.createElement("h1", undefined, "Draw") : (
      match$1.tag ? (
          match$1[0] >= -681168495 ? React.createElement("h1", undefined, "Player 2 Win") : React.createElement("h1", undefined, "Player 1 Win")
        ) : (
          match$1[0] >= -681168495 ? React.createElement("h1", undefined, "Player 2 Turn") : React.createElement("h1", undefined, "Player 1 Turn")
        )
    );
  return React.createElement("div", undefined, React.createElement("h1", undefined, tmp), React.createElement("div", {
                  className: mainboard
                }, $$Array.mapi((function (i, el) {
                        var match = Caml_array.caml_array_get(state[/* gameBoard */0], i);
                        var match$1 = state[/* gameStatus */1];
                        var tmp;
                        tmp = typeof match$1 === "number" || match$1.tag ? true : match !== 50834029;
                        return React.createElement(TicTacToc$Cell, {
                                    handleClick: (function (param) {
                                        return Curry._1(dispatch, /* Choose */[
                                                    /* Player1 */-681168496,
                                                    i
                                                  ]);
                                      }),
                                    owner: el,
                                    disabled: tmp,
                                    key: String(i)
                                  });
                      }), state[/* gameBoard */0])));
}

var GameBoard = /* module */[
  /* initState */initState,
  /* calculateBoard */calculateBoard,
  /* convertBoardToBinary */convertBoardToBinary,
  /* calculateGameStatus */calculateGameStatus,
  /* randomChoose */randomChoose,
  /* make */TicTacToc$GameBoard
];

var player1Char = /* "O" */79;

var player2Char = /* "X" */88;

var emptyChar = /* "E" */69;

exports.Style = Style;
exports.player1Char = player1Char;
exports.player2Char = player2Char;
exports.emptyChar = emptyChar;
exports.testWinning = testWinning;
exports.Cell = Cell;
exports.GameBoard = GameBoard;
/* root Not a pure module */
