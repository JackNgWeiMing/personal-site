import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import MeImage from '../../images/me.png';
import DownloadSvg from '../../assets/icons/get_app-24px.svg';
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
          <ResumeLink
            href={ResumePdf}
            rel="noopener noreferrer"
            target="_blank"
            download="resume-software-engineer-jack"
          >
            <Icon src={DownloadSvg} />
            Resume 2018-2020.pdf
          </ResumeLink>
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
  text-align: center;

  @media only screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Navigations = styled.ul`
  list-style-type: none;
  padding-left: 0;
  li {
    line-height: 1.5em;
    text-align: center;
    @media only screen and (min-width: 768px) {
      text-align: left;
    }
  }
  a {
    font-size: 1em;
    text-decoration: underline;
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Email = styled.a``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 30px;
  @media only screen and (min-width: 768px) {
    display: block;
    height: auto;
  }
`;
// const ShortBio = styled.p`
//   font-size: 0.9em;
//   line-height: 1.5em;
// `;

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  width: auto;
  padding: 5px 10px;
  background-color: #1a1a1a;
  margin-top: 20px;
  border-radius: 5px;
`;
const Icon = styled.img`
  width: 1em;
  padding-right: 5px;
`;

export default Intro;
