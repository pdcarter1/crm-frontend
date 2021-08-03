import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { PrivateRoute } from './components/private-route/PrivateRoute.component';
// import { DefaultLayout } from './loayout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { Login } from './pages/login/login.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-list/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
            <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute>
            <PrivateRoute path="/add-ticket"><AddTicket /></PrivateRoute>
            <PrivateRoute path="/tickets"><TicketLists /></PrivateRoute>
            <PrivateRoute path="/ticket/:tId"><Ticket /></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
