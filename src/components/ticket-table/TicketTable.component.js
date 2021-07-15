import React from 'react';
import {Table} from 'react-bootstrap';

export const TicketTable = ({tickets}) => {
    return  (<Table striped boardered="true" hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Subjects</th>
                <th>Status</th>
                <th>Opened Data</th>
            </tr>
        </thead>
        <tbody>
            {tickets.length ? ( 
                tickets.map(row=>
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.subject}</td>
                    <td>{row.status}</td>
                    <td>{row.addedAt}</td>                
                </tr>)) : (
                <tr colSpan="4" className="text-center">
                    <td>No tickets to show</td>
                </tr>
            )
            }            
        </tbody>
    </Table>);
    
};