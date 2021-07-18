import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.component';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.component';
import { shortText } from '../../utils/validation';

const initialFormData = {
    subject: "",
    issueDate: "",
    detail: "",
};
const initialFormDataError = {
    subject: false,
    issueDate: false,
    detail: false,
};
export const AddTicket = () => {
    const [frmData, setfrmData] = useState(initialFormData);
    const [frmDataError, setfrmDataError] = useState(initialFormDataError);

    useEffect(() => { }, [frmData, frmDataError]);

    const handleOnChange = e => {
        const {name, value} = e.target;
        setfrmData({
            ...frmData,
            [name]: value,

        });
    };

    const handleOnSubmit = async e => {
        e.preventDefault();

        setfrmDataError(initialFormDataError);

        const isSubjectValid = await shortText(frmData.subject);
        
        setfrmDataError({
            ...initialFormDataError,
            subject: !isSubjectValid
        });

        console.log('Form submit request received', frmData);
    }; 

    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="New Ticket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                        frmDataError={frmDataError}
                        frmData={frmData}
                    />
                </Col>
            </Row>
        </Container>
    )
}