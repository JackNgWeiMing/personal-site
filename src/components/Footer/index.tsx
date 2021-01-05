import React from 'react';
import styled from 'styled-components';
import LinkedIn from '../../assets/icons/linkedIn.svg';
import Github from '../../assets/icons/github.svg';
import Mail from '../../assets/icons/mail-24px.svg';
import Download from '../../assets/icons/get_app-24px.svg';

import ResumePdf from '../../assets/resume.pdf';

function Footer() {
  return (
    <Container>
      <FooterMain>
        <Contacts>
          <Icon src={Github} text="https://github.com/jackngweiming" />
          <Icon src={Mail} text="jackngweiming@gmail.com" />
          <Icon src={LinkedIn} text="https://linkedIn.com/jackngweiming" />
        </Contacts>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ResumeLink
            href={ResumePdf}
            rel="noopener noreferrer"
            target="_blank"
            download="resume-software-engineer-jack"
          >
            <Icon src={Download} />
            Resume 2018-2020.pdf
          </ResumeLink>
        </div>
      </FooterMain>
    </Container>
  );
}

export default Footer;
const Container = styled.footer`
  /* background-color: #1a1a1a; */
  width: 100vw;
  min-height: 200px;
`;

const Contacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FooterMain = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  @media only screen and (min-width: 320px) {
    width: 90vw;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    width: 70%;
    max-width: 1024px;
  }
`;

const IconImg = styled.img`
  width: 1em;
  padding-right: 10px;
`;

type IconProps = {
  src: string;
  text: string;
};

function Icon(props: IconProps) {
  const { text, src } = props;
  return (
    <IconContainer>
      <IconImg src={src} />
      <span>{text}</span>
    </IconContainer>
  );
}

const IconContainer = styled.span`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;

  font-size: 0.9em;
`;

const ResumeLink = styled.a`
  display: inline-flex;
  align-items: center;
  width: auto;
  padding: 5px 10px;
  background-color: #1a1a1a;
  margin-top: 20px;
  border-radius: 5px;
  color: white;
  &:link,
  &:hover,
  &:visited {
    color: white;
  }
`;
