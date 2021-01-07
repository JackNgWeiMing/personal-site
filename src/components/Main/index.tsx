import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContentContext } from '../../content/ContentContext';
import { ExperienceSection } from './Experience';
import { ReadingSection } from './Reading';
import { SkillSection } from './Skill';

function Main() {
  const { introduction } = useContext(ContentContext);
  return (
    <Container>
      <Introduction dangerouslySetInnerHTML={{ __html: introduction.html }} />
      <ExperienceSection />
      <SkillSection />
      <ReadingSection />
    </Container>
  );
}

const Container = styled.div``;

const Introduction = styled.code`
  background-color: #1a1a1a;
  padding: 30px 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px #110f0c inset;
  border: 1px solid #736a5e;
  display: block;
  width: 90%;
`;

export default Main;
