import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContentContext } from '../../content/ContentContext';
import { DataType } from '../../content/DataType';
import { SectionContainer } from './SectionContainer';

export const ExperienceSection: React.FunctionComponent = function ExperienceSection() {
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
      <h2>{data.frontmatter.title}</h2>
      <Paragraph
        dangerouslySetInnerHTML={{
          // why wrap additional using <div></div>
          // https://github.com/gatsbyjs/gatsby/issues/11108#issuecomment-455472204
          __html: `<div>${data.html}</div>`,
        }}
      />
      {/* <Paragraph>{data.html}</Paragraph> */}
    </EachExperienceContainer>
  );
};

const EachExperienceContainer = styled.div`
  padding-top: 20px;

  ul.job-desc {
    margin-top: 0;
    padding-left: 0;

    li {
      padding-bottom: 15px;
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
      margin-top: 5px;
    }
  }
`;

const Frontmatter = styled.p`
  margin-bottom: 0;
`;

const Paragraph = styled.div`
  font-size: 0.9em;
  line-height: 1.5em;
`;

const StartDate = styled.span`
  font-weight: bolder;
  font-size: 0.9em;
  padding-right: 20px;
`;

const Company = styled.p`
  font-size: 0.9em;
  font-weight: bolder;
  color: #f5ab62;
  display: block;

  @media only screen and (min-width: 768px) {
    display: inline-block;
  }
`;
