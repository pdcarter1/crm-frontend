import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { TicketTable } from '../../components/ticket-table/TicketTable.component';
//import tickets from '../../assets/data/dummy-tickets.json';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.component';
import {Link} from 'react-router-dom';
import { fetchAllTickets } from '../ticket-list/ticketsAction';

export const Dashboard = () => {
  const dispatch = useDispatch();

  const {tickets} = useSelector(state => state.tickets);

  useEffect(() => {
    if (!tickets.length) {
      dispatch(fetchAllTickets());
    }
  }, [tickets, dispatch]);

  const pendingTickets = tickets.filter(row => row.status !== "Closed");
  const totalTickets = tickets.length;

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket" >
            <Button variant="info" style={{'fontSize':'2rem', 'padding': '10px 30px'}}>Add New Ticket</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total Tickets: {totalTickets}</div>
          <div>Pending Tickets: {pendingTickets.length}</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
                    Recently Added Tickets
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets}/>
        </Col>
      </Row>
    </Container>
  );
};