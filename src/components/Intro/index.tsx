import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import MeImage from '../../images/me.png';

import LinkedIn from '../../assets/icons/linkedIn.svg';
import Github from '../../assets/icons/github.svg';
import Mail from '../../assets/icons/mail-24px.svg';
import DownloadSvg from '../../assets/icons/description-24px.svg';
import ResumePdf from '../../assets/resume.pdf';

function Intro() {
  return (
    <Container>
      <ProfileImage src={MeImage} />
      <Name>Jack Ng , Singapore</Name>
      <Description>
        Software Engineer <br />
        Specialized in React
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
      <Contacts>
        <Icon link src={Github} text="https://github.com/jackngweiming" />
        <Icon src={Mail} text="jackngweiming@gmail.com" />
        <Icon link src={LinkedIn} text="https://www.linkedin.com/in/jack-ng-b2593b151/" />
      </Contacts>
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

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 0.8em;
  /* align-items: center; */
  /* justify-content: space-around; */
  /* flex-wrap: wrap; */
`;

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  width: auto;
  padding: 5px 10px;
  background-color: #1a1a1a;
  margin-top: 20px;
  border-radius: 5px;
  text-decoration: none !important;
`;

function Icon(props: IconProps) {
  const { text, src, link } = props;
  return (
    <IconContainer>
      <IconImg src={src} />
      {link ? (
        <a target="_blank" rel="noreferrer" href={text}>
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </IconContainer>
  );
}

const IconContainer = styled.span`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  font-size: 0.9em;
`;

const IconImg = styled.img`
  width: 20px;
  padding-right: 5px;
`;

export default Intro;
