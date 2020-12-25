import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContentContext } from '../../content/ContentContext';
import { DataType } from '../../content/DataType';
import { SectionContainer } from './SectionContainer';

export const ExperienceSection: React.FunctionComponent = function ExperienceSection(props) {
  const { experience: data } = useContext(ContentContext);
  return (
    <SectionContainer>
      <h1 id="experience">My Work Experience</h1>
      {data.edges.map((edge) => {
        return <EachExperience data={edge.node} />;
      })}
    </SectionContainer>
  );
};

type EachExperienceProps = {
  data: DataType['experience']['edges'][0]['node'];
};
const EachExperience: React.FunctionComponent<EachExperienceProps> = function EachExperience(
  props
) {
  const { data } = props;
  return (
    <EachExperienceContainer>
      <Frontmatter>
        <StartDate>{data.frontmatter.start.toUpperCase()}</StartDate>
        <Company>{data.frontmatter.company}</Company>
      </Frontmatter>
      <h2>
        {data.frontmatter.title} , {data.frontmatter.duration}
      </h2>
      <Paragraph dangerouslySetInnerHTML={{ __html: data.html }} />
    </EachExperienceContainer>
  );
};

const EachExperienceContainer = styled.div`
  padding: 20px 0;

  ul.job-desc {
    padding-left: 0;
    li {
      padding-top: 10px;
      list-style-type: none;
    }
  }

  ul.tags {
    display: inline-block;
    padding-left: 0;
    li {
      border-radius: 5px;
      background-color: #1a1a1a;
      padding: 5px 10px;
      display: inline-block;
      list-style: circle;
    }
  }
`;

const Frontmatter = styled.p``;

const Paragraph = styled.p`
  font-size: 0.9em;
`;

const StartDate = styled.span`
  font-weight: bolder;
  font-size: 0.9em;
`;

const Company = styled.span`
  font-size: 0.9em;
  font-weight: bolder;
  padding-left: 20px;
  color: #f5ab62;
`;
