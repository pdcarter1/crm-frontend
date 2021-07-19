import React from 'react';
import {Jumbotron, Form,Row, Col, Button} from 'react-bootstrap';
import propTypes from 'prop-types';
import './add-ticket-form.style.css';

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDataError, frmData}) => {
  console.log(frmData);
  return (
    <Jumbotron className="mt=3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr/>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>Subject</Form.Label>
          <Col sm={9}>
            <Form.Control                        
              name="subject"
              value={frmData.subject}
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmDataError.subject && 'Subject is required'}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>Issue Found</Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}                    
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            value={frmData.detail}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="info" block>Login</Button>
      </Form>
    </Jumbotron>
  );
};
AddTicketForm.prototype = {
  handleOnSubmit: propTypes.func.isRequired,
  handleOnChange: propTypes.func.isRequired,
  frmDataError: propTypes.func.isRequired,
  frmData: propTypes.object.isRequired,    
};