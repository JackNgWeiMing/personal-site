import React from 'react';
import styled from 'styled-components';
import LinkedIn from '../../assets/icons/linkedIn.svg';
import Github from '../../assets/icons/github.svg';
import Mail from '../../assets/icons/mail-24px.svg';
import Download from '../../assets/icons/description-24px.svg';

import ResumePdf from '../../assets/resume.pdf';

function Footer() {
  return (
    <Container>
      <FooterMain>
        <Contacts>
          <Icon link src={Github} text="https://github.com/jackngweiming" />
          <Icon src={Mail} text="jackng9995@gmail.com" />
          <Icon link src={LinkedIn} text="https://www.linkedin.com/in/jack-ng-b2593b151/" />
        </Contacts>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ResumeLink href={ResumePdf} rel="noopener noreferrer" target="_blank">
            <Icon src={Download} />
            Resume 2018-2021.pdf
          </ResumeLink>
        </div>
        <PoweredBy>Powered by Gatsby.js</PoweredBy>
      </FooterMain>
    </Container>
  );
}

export default Footer;
const Container = styled.footer`
  width: 100vw;
  min-height: 200px;
`;

const PoweredBy = styled.p`
  text-align: center;
  margin: 20px 0;
  font-style: italic;
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
  link: boolean;
};

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

  a {
    width: 250px;
  }
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
  text-decoration: none;
  &:link,
  &:hover,
  &:visited {
    color: white;
  }
`;
