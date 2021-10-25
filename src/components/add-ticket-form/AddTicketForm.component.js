import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron, Form, Row, Col, Button, Spinner, Alert } from 'react-bootstrap';
// import propTypes from 'prop-types';

import { openNewTicket } from './addTicketAction';
import { shortText } from '../../utils/validation';

import './add-ticket-form.style.css';


const initialFormData = {
  subject: "",
  issueDate: "",
  message: "",
};
const initialFormDataError = {
  subject: false,
  issueDate: false,
  message: false,
};

export const AddTicketForm = () => {
  const dispatch = useDispatch();
  const {user: {name}} = useSelector(state => state.user);
  const { isLoading, error, successMsg } = useSelector(state => state.openTicket);

  const [frmData, setfrmData] = useState(initialFormData);
  const [frmDataError, setfrmDataError] = useState(initialFormDataError);
  useEffect(() => { }, [frmData, frmDataError]);

  const handleOnChange = e => {
    const { name, value } = e.target;
    setfrmData({
      ...frmData,
      [name]: value,

    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setfrmDataError(initialFormDataError);

    const isSubjectValid = await shortText(frmData.subject);

    setfrmDataError({
      ...initialFormDataError,
      subject: !isSubjectValid
    });
    dispatch(openNewTicket({...frmData,sender: name}));
  };


  return (
    <Jumbotron className="mt=3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr/>
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="primary">{successMsg}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border"/>}
      </div>
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
            name="message"
            rows="5"
            value={frmData.message}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="info" block>Open Ticket</Button>
      </Form>
    </Jumbotron>
  );
};
// AddTicketForm.prototype = {
//   handleOnSubmit: propTypes.func.isRequired,
//   handleOnChange: propTypes.func.isRequired,
//   frmDataError: propTypes.func.isRequired,
//   frmData: propTypes.object.isRequired,    
// };