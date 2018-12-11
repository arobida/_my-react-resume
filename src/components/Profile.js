import React, { Component } from "react";
import {
	Icon,
	Grid,
	Image,
	List,
	Card,
	Divider,
	Responsive
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import resume from "../AndrewRobida-frontend.pdf";

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			exp: ""
		};
	}

	render() {
		return (
			<Responsive as={Grid.Column} width={4} minWidth={650} maxWidth={2559}>
				<Card fluid style={{ boxShadow: "var(--shadow)" }}>
					<h2 id="header">Andrew's React Resume</h2>
					<Card.Content>
						<Image
							src="https://pbs.twimg.com/profile_images/920689023206617090/9i3sb1Nt_400x400.jpg"
							size="medium"
							rounded
						/>
						<Divider horizontal>Info</Divider>
						<Card.Header>Andrew Robida</Card.Header>
						<Card.Meta>Front End Developer</Card.Meta>
						<Card.Description>
							I am a passionate front end dev that loves thinking in React! I
							build amazing, performative, and modern websites using the latest
							technology that gives your end user a great experience while
							saving you money! Would also love to join a great team to build
							awesome products and learn best practices.
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<List horizontal className="socialList">
							<List.Item>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.linkedin.com/in/andrew-robida/"
								>
									<List.Content>
										LinkedIn
										<Icon name="linkedin" color="orange" />
									</List.Content>
								</a>
							</List.Item>
							<List.Item>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://github.com/arobida"
								>
									<List.Content>
										Github
										<Icon name="github" color="orange" />
									</List.Content>
								</a>
							</List.Item>
							<List.Item>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://twitter.com/theafr86"
								>
									<List.Content>
										Twitter
										<Icon name="twitter" color="orange" />
									</List.Content>
								</a>
							</List.Item>
							<List.Item>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={resume}
								>
									<List.Content>
										Resume
										<Icon name="cloud download" color="orange" />
									</List.Content>
								</a>
							</List.Item>
						</List>
					</Card.Content>
				</Card>
			</Responsive>
		);
	}
}

export default Profile;
