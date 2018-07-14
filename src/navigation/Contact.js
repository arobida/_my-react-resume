import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Icon,
  Form,
  Message,
  Input,
  TextArea
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

//Use conditional rendering based on and error or success state to display a message and either send or do not send the email
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", notify: null };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    axios("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() =>
        this.setState({
          notify: (
            <Message
              success
              header="Message Sent"
              content="Thank you for contacting me I will get in touch as soon as I can..."
            />
          ),
          name: "",
          email: "",
          message: ""
        })
      )
      .catch(error =>
        this.setState({
          notify: (
            <Message
              error
              header="Oooops!"
              content="Something went wrong try again later..."
            />
          )
        })
      );

    e.preventDefault();
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div id="contactMe">
        <div>
          <Form
            name="contact"
            method="post"
            data-netlify="true"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Form.Input
              control={Input}
              name="name"
              type="name"
              value={name}
              onChange={this.handleChange}
              label="Name"
              placeholder="Name"
              required
            />
            <Form.Input
              control={TextArea}
              name="message"
              type="message"
              value={message}
              onChange={this.handleChange}
              label="About"
              placeholder="Tell me more about you..."
              required
            />
            <Form.Input
              control={Input}
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
              label="Email"
              placeholder="joe@schmoe.com"
              required
            />
            <Button animated color="orange" type="submit">
              <Button.Content visible>
                Submit <Icon name="send outline" />
              </Button.Content>
              <Button.Content hidden>
                Send? <Icon name="send outline" />
              </Button.Content>
            </Button>
          </Form>
          <div style={{ marginTop: "15px" }}>{this.state.notify}</div>
        </div>
      </div>
    );
  }
}

export default Contact;
