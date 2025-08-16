import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      A focused, modern toolkit across backend, frontend, cloud, DevOps, and testing to deliver reliable, scalable systems.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Backend Development</ListTitle>
          <ListParagraph>
            <strong>Languages & Runtimes:</strong> NodeJS, NestJS, Express
          </ListParagraph>
          <ListParagraph>
            <strong>Architecture:</strong> Microservices Architecture, GraphQL, Sockets
          </ListParagraph>
          <ListParagraph>
            <strong>Database & Caching:</strong> MongoDB, Redis
          </ListParagraph>
          <ListParagraph>
            <strong>Event Streaming:</strong> Kafka, Redpanda
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Frontend Development</ListTitle>
          <ListParagraph>
            <strong>Languages & Libraries:</strong> JavaScript/TypeScript, React JS, Next JS, Redux, Redux Toolkit, Context API, HTML5/CSS3
          </ListParagraph>
          <ListParagraph>
            <strong>UI Frameworks & Styling:</strong> Material UI, Bootstrap, Tailwind, Framer Motion, Ant Design
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Cloud Platforms</ListTitle>
          <ListParagraph>AWS, Heroku, OpenShift</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>DevOps & CI/CD</ListTitle>
          <ListParagraph>
            <strong>CI/CD Platforms:</strong> Jenkins, Buddy
          </ListParagraph>
          <ListParagraph>
            <strong>Monitoring & Logging:</strong> Elastic Stack (ELK)
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            <strong>Frameworks:</strong> Jest, Playwright, Puppeteer, Cucumber
          </ListParagraph>
          <ListParagraph>
            <strong>Methodologies:</strong> Unit Testing, End-to-End Automation Testing
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
