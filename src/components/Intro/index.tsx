import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import MeImage from '../../images/me.png';
import FileSvg from '../../assets/icons/description-24px.svg';
import ResumePdf from '../../assets/resume.pdf';

function Intro() {
  return (
    <Container>
      <ProfileImage src={MeImage} />
      <Name>Jack Ng , Singapore</Name>
      <Email>jackng9995@gmail.com</Email>
      <Description>
        Software Engineer <br />
        (react, javascript, .net)
      </Description>
      <Navigations>
        <li>
          <Link to="#experience">Work Experience</Link> <br />
        </li>
        <li>
          <Link to="#skill">Skill</Link>
        </li>

        <li>
          <Link to="#reading">My reading</Link>
        </li>
        {/* <li>
          <Link to="#story">My Story</Link>
        </li> */}
        <li>
          <Resume>
            <a href={ResumePdf} target="_blank" download="resume-software-engineer-jack">
              <span>
                <Icon src={FileSvg} />
              </span>
              Resume 2018-2020.pdf
            </a>
          </Resume>
        </li>
      </Navigations>
    </Container>
  );
}

const ProfileImage = styled.img`
  background-color: #585656;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: contain;
`;

const Name = styled.p`
  color: white;
  font-weight: bold;
  margin-top: 15px;
`;

const Description = styled.p`
  line-height: 1.8em;
`;

const Navigations = styled.ul`
  list-style-type: none;
  padding-left: 0;
  li {
    line-height: 1.5em;
  }
  a {
    font-size: 1em;
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Email = styled.a``;
const Container = styled.div``;
const ShortBio = styled.p`
  font-size: 0.9em;
  line-height: 1.5em;
`;

const Resume = styled.div`
  margin-top: 20px;
`;
const Icon = styled.img`
  /* background-color: white; */
  width: 1em;
`;

export default Intro;
