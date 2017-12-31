import React, { Component, img } from 'react';
import axios from 'axios';
import { Button, Icon, Grid, Image, Header, List, Card, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      exp: "My experience goes here",
    };
  }

  render() {
    return (
      <div id="experience">
        <Card fluid id="expCard">
          <Card.Content>
            <Card.Header>Front End Developer</Card.Header>
            <Card.Meta>@Freelance 2016-Present</Card.Meta>
            <Card.Description>
              <List bulleted>
                <List.Item>
                  <List.Content>
                    Design new landing pages, micro-site’s, product detail pages, homepage updates, new website features, and website redesign, including mobile, desktop, and tablet view-ports
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Build landing pages, campaign micro-site’s, homepage updates, newsletters for email marketing campaigns, marketing forms, and redesign existing pages using HTML, CSS, JavaScript, React, jQuery, Bootstrap, Semantic-Ui/Semantic-Ui-React
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Able to build and configure different versions of React using Node.js and Webpack to ensure npm package compatibility and custom configuration efficiency
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Test front-end code in multiple browsers to ensure cross-browser compatibility
Implement and refine SEO strategies and improve conversion rate
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Develop and execute ongoing site enhancement/optimization strategies
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    CMS(Wordpress) Management, content updates, and design
                  </List.Content>
                </List.Item>
              </List>
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Card.Header>Logistics Specialist</Card.Header>
            <Card.Meta>@United States Marine Corps 2004-2016</Card.Meta>
            <Card.Description>
              Being a Marine was some of the best and worst times of my life most Marines feel that way, it is a love hate relationship. Some of the positions I executed during my time were Logistics Management Specialist, Licensing Director/Examiner, Recruiting, Operator/Dispatcher. I served from one side of the country to the other as well as two succesful combat tours to Iraq/Afghanistan and three other non-combat tours in Jordan/Korea. It has given me great experience and prespective to serve my country and the global insight I received from traveling and experiencing other cultures has enlightened me in ways I never would have had I decided not to I would can't think of spending my young adult life any other way!
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Card.Header>Education</Card.Header>
            <Card.Meta>@Self-Learning Present-Unitl Death</Card.Meta>
            <Card.Description>
              So let me explain myself a little bit here. I have attended a vocational IT school for a year now and will be switching to Western Goveners University for an awesome degree in software development but as of right now and in the future all my education comes from every keystroke I write code with and I firmly believe thats how it should be. Learning the theoretical and high level CS stuff is great and I believe further down the road it will do a lot of good having that foundation but builders must build if they want to hone their craft right?
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Experience