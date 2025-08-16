import styled from "styled-components";

export const ExperienceSection = styled.section`
	width: 100%;
	margin: 0 auto;
	padding: 32px 48px 0;
	max-width: 1040px;
	box-sizing: content-box;

	@media ${(props) => props.theme.breakpoints.md} {
		padding: 24px 48px 0;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 16px 16px 0;
		width: calc(100vw - 32px);
	}
`;

export const Timeline = styled.div`
	position: relative;
	margin: 32px 0 0;
	padding-left: 28px;

	&::before {
		content: "";
		position: absolute;
		left: 8px;
		top: 0;
		bottom: 0;
		width: 2px;
		background: rgba(255, 255, 255, 0.15);
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		padding-left: 22px;
		&::before { left: 6px; }
	}
`;

export const TimelineItem = styled.div`
	position: relative;
	margin: 0 0 28px 0;
	padding-left: 16px;
`; 

export const TimelineDot = styled.span`
	position: absolute;
	left: -4px;
	top: 4px;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: ${(props) => props.theme.colors.accent1};
	box-shadow: 0 0 0 4px rgba(20, 184, 166, 0.15);
`; 

export const Role = styled.h3`
	font-size: 22px;
	font-weight: 700;
	margin: 0 0 6px 0;
	background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`; 

export const Company = styled.p`
	font-size: 16px;
	color: rgba(255,255,255,0.8);
	margin: 0 0 4px 0;
`; 

export const Period = styled.p`
	font-size: 14px;
	color: rgba(255,255,255,0.6);
	margin: 0 0 12px 0;
`; 

export const Bullets = styled.ul`
	margin: 0 0 10px 0;
	padding-left: 18px;
`; 

export const Bullet = styled.li`
	font-size: 16px;
	line-height: 26px;
	color: rgba(255,255,255,0.8);
	margin-bottom: 6px;
`; 

export const Tech = styled.p`
	font-size: 14px;
	color: rgba(255,255,255,0.65);
	margin-top: 6px;
`;