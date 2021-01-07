import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContentContext } from '../../content/ContentContext';
import { DataType } from '../../content/DataType';

type ReadingProps = any;
export const ReadingSection: React.FunctionComponent<ReadingProps> = function ReadingSection() {
  const { reading: data } = useContext(ContentContext);
  return (
    <div>
      <h1 id="reading">My reading</h1>
      <Blockquote>
        <p>For to know a man‘s library is, in some measure, to know his mind. </p>
      </Blockquote>
      <div>
        {data.edges.map((edge, index) => (
          <Book index={index} data={edge.node} />
        ))}
      </div>
    </div>
  );
};

type BookProps = {
  index: number;
  data: DataType['reading']['edges'][0]['node'];
};

const Book: React.FunctionComponent<BookProps> = function Book(props) {
  const { index, data } = props;
  return (
    <div>
      <p>
        <BookTitle>
          {index + 1}. {data.frontmatter.title}
        </BookTitle>
        <Author>{data.frontmatter.author}</Author>
      </p>
    </div>
  );
};

const BookTitle = styled.span`
  font-size: 0.9em;
`;

const Author = styled.span`
  padding-left: 5px;
  font-size: 0.7em;
`;

const Blockquote = styled.blockquote`
  background-color: #1a1a1a;
  border-left: 10px solid #4d4d4d;
  margin: 1.5em 10px;
  padding: 2.5em 10px;
  font-weight: bold;
  text-align: right;

  &::before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  p {
    display: inline;
  }
`;
