import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Button,
  Icon,
  Grid,
  Image,
  Header,
  List,
  Segment,
  Responsive,
  Modal,
  Card,
  Divider
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Projects from "./navigation/Projects";
import Experience from "./navigation/Experience";
import Contact from "./navigation/Contact";
import Profile from "./components/Profile";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React Resume",
      modalOpen: false
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <div id="app">
        <Responsive
          as="h2"
          maxWidth={650}
          id="headerMobile"
          style={{ textShadow: "3px 3px #3333" }}
        >
          Andrew's React Resume
        </Responsive>
        <Responsive as="div" id="mobileMenu" maxWidth={650}>
          <Button
            id="scrollTopBtn"
            circular
            inverted
            basic
            color="orange"
            icon="up arrow"
            onClick={() => window.scrollTo(0, 0)}
          />
          <Button
            id="contactBtn"
            size="small"
            inverted
            basic
            color="orange"
            onClick={this.handleOpen}
          >
            <Button.Content>
              <Icon name="address card" size="big" color="orange" />
            </Button.Content>
          </Button>
          <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size="small"
            closeIcon
          >
            <Header icon="address card" content="Feel free to contact me!" />
            <Modal.Content>
              <Card fluid>
                <Card.Content>
                  <Image
                    id="mobileImg"
                    src="https://pbs.twimg.com/profile_images/920689023206617090/9i3sb1Nt_200x200.jpg"
                    circular
                  />
                  <Divider horizontal>Info</Divider>
                  <Card.Header>Andrew Robida</Card.Header>
                  <Card.Meta>Front End Developer</Card.Meta>
                  <Card.Description>
                    I am a passionate front end dev that loves thinking in
                    React! I build amazing, performative, and modern websites
                    using the latest technology that gives your end user a great
                    experience while saving you money! Would also love to join a
                    great team to build awesome products and learn best
                    practices.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <List animated verticalAlign="middle">
                    <List.Item>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/andrew-robida/"
                      >
                        <List.Content>
                          LinkedIn
                          <Icon name="linkedin" color="orange" />
                        </List.Content>
                      </a>
                    </List.Item>
                    <List.Item>
                      <a target="_blank" href="https://github.com/arobida">
                        <List.Content>
                          Github
                          <Icon name="github" color="orange" />
                        </List.Content>
                      </a>
                    </List.Item>
                    <List.Item>
                      <a
                        target="_blank"
                        href="https://twitter.com/sweetnezzz86"
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
                        href="https://docs.google.com/document/d/1o39dLOSHDddG35UzGhXUGovsOAFtau5hAoEYI9Y_gUM/edit?usp=sharing"
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
            </Modal.Content>
            <Modal.Actions>
              <Button color="green" href="tel:7605861709">
                Call Me Now!{" "}
              </Button>
            </Modal.Actions>
          </Modal>
        </Responsive>
        <Grid columns={2} divided centered>
          <Profile />
          <Grid.Column width={12}>
            <Router>
              <div style={{ marginRight: "10px" }}>
                <Segment style={{ boxShadow: "var(--shadow)" }}>
                  <Navi activeOnlyWhenExact={true} to="/" label="Experience" />
                  <Navi to="/projects" label="Projects" />
                  <Navi to="/contact" label="Contact" />
                </Segment>
                <Route exact path="/" component={Experience} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
              </div>
            </Router>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const Navi = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div id="menu" className={match ? "active" : ""}>
        <h2>
          {match ? "👉 " : ""}
          <Link id="menuItems" to={to}>
            {label}
          </Link>
        </h2>
      </div>
    )}
  />
);

render(<App />, document.getElementById("root"));
