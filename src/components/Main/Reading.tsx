import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContentContext } from '../../content/ContentContext';
import { DataType } from '../../content/DataType';

type ReadingProps = {};
export const ReadingSection: React.FunctionComponent<ReadingProps> = function ReadingSection() {
  const { reading: data } = useContext(ContentContext);
  return (
    <div>
      <h1 id="reading">My reading</h1>
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
  return (
    <div>
      <p>
        <BookTitle>
          {props.index + 1}. {props.data.frontmatter.title}
        </BookTitle>
        <Author>{props.data.frontmatter.author}</Author>
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
