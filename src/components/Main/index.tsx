import React from 'react';
import styled from 'styled-components';
import { ExperienceSection } from './Experience';
import { ReadingSection } from './Reading';
import { SkillSection } from './Skill';

function Main() {
  return (
    <Container>
      <ExperienceSection />
      <SkillSection />
      <ReadingSection />
    </Container>
  );
}

const Container = styled.div``;

export default Main;
