import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap";
const ResetPassword = ({ handleOnChange, email, handleOnResetSubmit,formSwitcher }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-infor text-center">Reset Password</h1>
          <hr />
          <Form onSubmit={handleOnResetSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={handleOnChange}
                required
              />
            </Form.Group>

            <Button type="submit">Login</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={()=>formSwitcher("login")}>Login Now</a>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ResetPassword;
