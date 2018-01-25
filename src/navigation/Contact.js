import React, { Component, img } from 'react';
import axios from 'axios';
import { Button, Icon, Form, Message, Checkbox, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

//Use conditional rendering based on and error or success state to display a message and either send or do not send the email
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { sentOrNot: null,name: '', email: '', message: '', submittedName: '', submittedEmail: '', submittedMessage: '' }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    axios("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.setState({message: 
            <Message
              success
              header='Message Sent'
              content="Thank you for contacting me I will get in touch as soon as I can..."
            />}))
      .catch(error => this.setState({message: 
            <Message
              error
              header='Invalid Email'
              content='You know better try a real email...'
            />}));

    e.preventDefault();
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div id="contactMe">
        <div>
          <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
            <Form.Field control={Input} type='text' name='name' value={this.name} onChange={this.handleChange} label='Name' placeholder='Name' autoFocus required/>
            </Form.Group>
            <Form.Field control={TextArea} type='text' name='message' value={this.message} onChange={this.handleChange} label='About' placeholder='Tell me more about you...' required/>
            <Form.Input name='email' value={this.email} onChange={this.handleChange} type='email' label='Email' placeholder='joe@schmoe.com' required/>
              <p>{this.state.sentOrNot}</p>
            <Button animated color="orange">
              <Button.Content visible>Submit{" "}<Icon name='send outline' /></Button.Content>
              <Button.Content hidden>
                Send?{" "}<Icon name='send outline' />
              </Button.Content>
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact