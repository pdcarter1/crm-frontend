import React from 'react';
import './App.css';
import { DefaultLayout } from './loayout/DefaultLayout';
//import { Dashboard } from './pages/dashboard/Dashboard.page';
//import { Login } from './pages/login/login.page';
//import {AddTicket} from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-list/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page';

function App() {
  return (
    <div className="App">
      {/*<Login />*/}
      <DefaultLayout>
        {/*<Dashboard />*/}
        {/*<AddTicket />*/}
        {/*<TicketLists />*/}
        <Ticket />
      </DefaultLayout>    
    </div>
  );
};

export default App;
