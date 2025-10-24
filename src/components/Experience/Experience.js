import React from "react";
import { Section, SectionTitle, SectionText } from "../../styles/GlobalComponents";
import { ExperienceSection, Timeline, TimelineItem, TimelineDot, Role, Company, Period, Bullets, Bullet, Tech } from "./ExperienceStyles";

const Experience = () => {
	return (
		<ExperienceSection id="experience">
			<SectionTitle>Experience</SectionTitle>
			<SectionText>Selected roles that showcase leadership in backend engineering, real-time systems, and full‑stack product delivery.</SectionText>
			<Timeline>
				<TimelineItem>
					<TimelineDot />
					<Role>SENIOR BACKEND NODEJS ENGINEER</Role>
					<Company>Emirates NBD, UAE (via Speridian Technologies)</Company>
					<Period>May 2024 – Present</Period>
					<Bullets>
						<Bullet>Architected and developed highly scalable, fault-tolerant microservices-based event processors using Node.js and Kafka, enabling real-time, high-volume transaction processing (exceeding 10,000 transactions per second) for critical banking functions.</Bullet>
						<Bullet>Led the migration of mission-critical backend systems from legacy SpringBoot to a modern Node.js event-driven architecture, improving system performance by up to 40%.</Bullet>
						<Bullet>Engineered and optimized robust authentication and authorization functionalities for diverse financial transactions using Node.js, integrating advanced security protocols.</Bullet>
					</Bullets>
					<Tech>Technologies: Node.js, Kafka, Redis, Microservices Architecture, Elastic Stack (ELK), Unit Testing (Jest), End-to-End Automation Testing (Playwright), GraphQL.</Tech>
				</TimelineItem>

				<TimelineItem>
					<TimelineDot />
					<Role>FULL STACK ENGINEER</Role>
					<Company>Matrix Aviation (Dubai, UAE — On‑site)</Company>
					<Period>January 2023 – May 2024</Period>
					<Bullets>
						<Bullet>Built "Aircrew Connect Jobseekers" with Next.js and "Aircrew Connect Recruiters" with React.js.</Bullet>
						<Bullet>Developed an admin panel for internal use, including monitoring, analytics, and content management.</Bullet>
						<Bullet>Implemented real-time chat features and an interviews platform with video and screen sharing using Agora API.</Bullet>
					</Bullets>
					<Tech>Technologies: React, MERN, Nodejs, Next.js, Sockets, Material-UI (MUI), CSS3, Google Cloud, Heroku, Vercel, Mongoose.</Tech>
				</TimelineItem>

				<TimelineItem>
					<TimelineDot />
					<Role>JAVASCRIPT ENGINEER</Role>
					<Company>Karigar Web Solutions (Pakistan — On‑site)</Company>
					<Period>March 2022 – October 2022</Period>
					<Bullets>
						<Bullet>Developed React, Vanilla JS, and Admin panel apps for businesses, and efficient Node.js backends.</Bullet>
						<Bullet>Created complex browser extensions to automate tasks, scrape data, and connect with RESTful APIs.</Bullet>
					</Bullets>
					<Tech>Technologies: React, MERN, Nodejs, JavaScript, Tailwindcss, CSS3, Bootstrap, JQuery, Buddy, Mongoose, Webpack 5, Three.js, AR.</Tech>
				</TimelineItem>

				<TimelineItem>
					<TimelineDot />
					<Role>FRONTEND ENGINEER</Role>
					<Company>Exam105 (Pakistan — Remote)</Company>
					<Period>March 2021 – December 2022</Period>
					<Bullets>
						<Bullet>Developed and maintained a React app for employees and a Next.js app for public users.</Bullet>
					</Bullets>
					<Tech>Skills & Technologies: React, Next.js, Redux, Redux Toolkit, Material-UI, Bootstrap, Git, CICD, Jenkins, JWT strategy, documentation writing.</Tech>
				</TimelineItem>

				<TimelineItem>
					<TimelineDot />
					<Role>FULL STACK DEVELOPER</Role>
					<Company>Fleek Soft (Pakistan — On‑site)</Company>
					<Period>January 2019 – March 2021</Period>
					<Bullets>
						<Bullet>Contributed to rapid application development (RAD) of multiple web projects using the MERN stack, focusing on speed, scalability, and code quality.</Bullet>
						<Bullet>Developed and deployed full-stack web applications from concept to delivery, integrating RESTful APIs and ensuring high responsiveness and performance.</Bullet>
						<Bullet>Designed and implemented dynamic React.js interfaces with reusable components and efficient state management using Redux.</Bullet>
						<Bullet>Built and optimized Node.js backend services connected with MongoDB, ensuring secure and reliable data handling.</Bullet>
						<Bullet>Collaborated with cross-functional teams in an Agile workflow, participating in daily standups, sprint reviews, and version control via Git.</Bullet>
					</Bullets>
					<Tech>Technologies: React, MERN, Nodejs, JavaScript, Tailwindcss, CSS3, Bootstrap, MongoDB.</Tech>
				</TimelineItem>
			</Timeline>
		</ExperienceSection>
	);
};

export default Experience;
