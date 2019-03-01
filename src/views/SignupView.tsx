import React from 'react';
import Auth from '@aws-amplify/auth';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

interface ViewState {
  username: string,
  password: string
};

export default class SignupView extends React.Component<{}, ViewState> {
  constructor(props: any) {
    super(props);
    this.state ={
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <Form>
        <Row>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Col sm={3}>
              <Form.Label>
                Email
              </Form.Label>
            </Col>
            <Col sm={9}>
              <Form.Control type="email" placeholder="Email" onChange={this.updateUsername}/>
            </Col>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Col sm={4}>
              <Form.Label>
                Password
              </Form.Label>
            </Col>
            <Col sm={8}>
              <Form.Control type="password" placeholder="Password" onChange={this.updatePassword}/>
            </Col>
          </Form.Group>
        </Row>
        <Button onClick={this.signUp}>Sign Up</Button>
      </Form>
    )
  }

  private updateUsername = (e: any) => {
    this.setState({username: e.target.value})
  }

  private updatePassword = (e: any) => {
    this.setState({password: e.target.value})
  }

  private signUp = () => {
    Auth.signUp({
      username: this.state.username,
      password: this.state.password
    })
  }
}
