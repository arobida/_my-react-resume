import React, { Component, img } from 'react';
import axios from 'axios';
import { Button, Icon, Form, Message, Checkbox, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

//Use conditional rendering based on and error or success state to display a message and either send or do not send the email

class Contact extends Component {
  constructor() {
    super();
    this.state = { succes: false, error: false, name: '', email: '', message: '', submittedName: '', submittedEmail: '', submittedMessage: '' }
  }

  handleSubmit = () => {
    const { name, email } = this.state
    this.setState({ submittedName: name, submittedEmail: email })
  }

  render() {
    return (
      <div id="contact">
        <div>
          <Form method='POST'>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Name' placeholder='Name' />
            </Form.Group>
            <Form.Field control={TextArea} label='About' placeholder='Tell me more about you...' />
            <Form.Input label='Email' placeholder='joe@schmoe.com' />
            <Message
              success
              header='Message Sent'
              content="Thank you for contacting me I will get in touch as soon as I can..."
            />
            <Message
              error
              header='Invalid Email'
              content='You know better try a real email...'
            />
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