import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContentContext } from '../../content/ContentContext';
import { DataType } from '../../content/DataType';
import { SectionContainer } from './SectionContainer';

export const SkillSection: React.FunctionComponent = function SkillSection(props) {
  const { skill: data } = useContext(ContentContext);
  return (
    <SectionContainer>
      <h1 id="skill">Other Relavent Skills</h1>
      {data.edges.map((edge) => {
        return <Skill data={edge.node} />;
      })}
    </SectionContainer>
  );
};

type SkillProps = {
  data: DataType['skill']['edges'][0]['node'];
};

const Skill: React.FunctionComponent<SkillProps> = function Skill(props) {
  return <Paragraph dangerouslySetInnerHTML={{ __html: props.data.html }} />;
};

const Paragraph = styled.p`
  font-size: 0.9em;
`;
