import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        HASEEB UDEEN
      </SectionTitle>
      <SectionText>
        Highly accomplished Full Stack Engineer with a comprehensive background in architecting, designing, developing, and deploying high-performance web applications and scalable microservices, including regulated LLM and LangChain integrations.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:haseebudeen@outlook.com")}
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
