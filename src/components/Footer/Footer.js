import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+97-154-390-6213">+97-154-390-6213</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:haseebudeen@outlook.com">
            haseebudeen@outlook.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Contact Form</LinkTitle>
          <form action="mailto:haseebudeen@outlook.com" method="post" encType="text/plain">
            <input type="text" name="name" placeholder="Your Name" style={{padding: '8px', marginBottom: '8px', width: '100%', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#fff'}} />
            <input type="email" name="email" placeholder="Your Email" style={{padding: '8px', marginBottom: '8px', width: '100%', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#fff'}} />
            <textarea name="message" placeholder="How can I help?" rows={3} style={{padding: '8px', marginBottom: '8px', width: '100%', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: '#fff'}} />
            <button type="submit" style={{padding: '10px 16px', borderRadius: '20px', border: 'none', color: '#fff', background: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', cursor: 'pointer'}}>Send</button>
          </form>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/RacketyWater7">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/haseebudeen">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/haseebudeen">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://medium.com/@haseebudeen">
            <AiFillMediumCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
