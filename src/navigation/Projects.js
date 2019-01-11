import React, { Component } from 'react';
import { FlipInX } from 'animate-components';
import { Loader, Card, Responsive } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			repos: [],
			loader: true
		};
	}
	componentDidMount() {
		this.getRepos();
	}
	async getRepos() {
		const username = 'arobida';
		const token = 'a89e04fe88cd6831769abfec27ee815627964204';
		const url = `https://api.github.com/users/arobida/repos`;
		const res = await fetch(url, {
			Authorization:`${username}:${token}`
		});
		const data = await res.json();
		this.setState({ repos: [...data] });
	}

	render() {
		const repos = this.state.repos.map(repo => {
			return (
				<FlipInX
					duration="2s"
					as={Card}
					key={repo.id}
					style={{ boxShadow: 'var(--shadow)' }}
				>
					<Card.Content>
						<h4 style={{ color: '#e91e63', fontSize: '1em' }}>
							{repo.name.toUpperCase()}
						</h4>
						<Card.Meta>Last Update: {repo.pushed_at.slice(0, 10)}</Card.Meta>
						<Card.Description>{repo.description}</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<a
							id="projectLinks"
							href={repo.html_url}
							target="_blank"
							rel="noopener noreferrer"
						>
							View Code
						</a>
						<hr />
						{repo.homepage === null ? (
							'No Preview'
						) : (
							<a
								id="projectLinks"
								target="_blank"
								rel="noopener noreferrer"
								href={repo.homepage}
							>
								Preview
							</a>
						)}
					</Card.Content>
				</FlipInX>
			);
		});

		return (
			<div id="projects">
				<div id="cards">
					<Responsive as={Card.Group} itemsPerRow={1} maxWidth={650}>
						{repos}
					</Responsive>
					<Responsive
						as={Card.Group}
						itemsPerRow={3}
						minWidth={650}
						maxWidth={2559}
					>
						{repos}
					</Responsive>
				</div>
			</div>
		);
	}
}

export default Projects;
