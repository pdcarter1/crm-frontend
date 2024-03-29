import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Container, Row, Col, Button, Spinner, Alert} from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.component';

import { MessageHistory } from '../../components/message-history/MessageHistory.component';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.component';
import { useParams } from 'react-router-dom';
import { fetchSingleTicket, closeTicket } from '../ticket-list/ticketsAction';

// const ticket = tickets[0];

export const Ticket = () => {
  //const { replyMsg } = useSelector(state => state.tickets);
  const {tId} = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, selectedTicket, replyMsg, replyTicketError} = useSelector(state => state.tickets);
  
 
  useEffect(() => {
    dispatch(fetchSingleTicket(tId));
  }, [ tId, dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>     
      <Row>
        <Col>
          {isLoading && <Spinner variant='primary' animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          {replyTicketError && <Alert variant="danger">{replyTicketError}</Alert>}          
          {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
        </Col>
      </Row>
      <Row>        
        <Col className="text-weight-bolder text-secondary">
          <div className="Subject">Subject: {selectedTicket.subject}</div>
          <div className="date">Ticket Opened: {selectedTicket.openAt && new Date(selectedTicket.openAt).toLocaleString()}</div>
          <div className="status">Status: {selectedTicket.status}</div>
        </Col>
        <Col className="text-right">
          <Button 
          variant="outline-info" 
          onClick={ () => dispatch(closeTicket(tId))}
          disabled = {selectedTicket.status === "Closed"}
          >Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {selectedTicket.conversation && <MessageHistory msg={selectedTicket.conversation}/>}
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket _id = {tId}             
          />
        </Col>
      </Row>
    </Container>

  );
};