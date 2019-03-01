import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

export default class SignupView extends React.Component<{}, {}> {
  public render() {
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
              <Form.Control type="email" placeholder="Email" />
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
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
        </Row>
        <Button>Sign Up</Button>
      </Form>
    )
  }
}
