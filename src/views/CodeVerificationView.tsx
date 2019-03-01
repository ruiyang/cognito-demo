import React from 'react';
import Auth from '@aws-amplify/auth';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

interface ViewState {
  username: string,
  code: string
};

export default class CodeVerificationView extends React.Component<{}, ViewState> {
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
          <Form.Group as={Row}>
            <Col sm={3}>
              <Form.Label>
                Code
              </Form.Label>
            </Col>
            <Col sm={9}>
              <Form.Control type="input" placeholder="Code" onChange={this.updateCode}/>
            </Col>
          </Form.Group>
        </Row>
        <Button onClick={this.confirm}>Confirm</Button>
      </Form>
    )
  }

  private updateUsername = (e: any) => {
    this.setState({username: e.target.value})
  }

  private updateCode = (e: any) => {
    this.setState({code: e.target.value})
  }

  private confirm = () => {
    Auth.confirmSignUp(
      this.state.username,
      this.state.code
    )
  }
}
