import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.component';
import { SearchForm } from '../../components/search-form/SearchForm.component';
import { TicketTable } from '../../components/ticket-table/TicketTable.component';
import tickets from '../../assets/data/dummy-tickets.json';

export const TicketLists = () => {
    const [str, setStr] = useState("");
    const [displayTickets, setDispTicket] = useState([tickets]);

    useEffect(() => {}, [str, displayTickets]);

    const handleOnChange = e => {
        const {value} = e.target;
        setStr(value);
        searchTicket(value);        
    };

    const searchTicket = sttr => {
        const displayTickets = tickets.filter(row => row.subject.toLocaleLowerCase().includes(sttr.toLocaleLowerCase()));
        setDispTicket(displayTickets);
    };

    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Ticket Lists" />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Button variant="info">Add New Ticket</Button>
                </Col>
                <Col className="text-right">
                    <SearchForm handleOnChange={handleOnChange} str={str} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable tickets={displayTickets} />
                </Col>
            </Row>
        </Container>
    );
};