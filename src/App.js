import React from 'react';
import './App.css';
import { DefaultLayout } from './loayout/DefaultLayout';
import { Dashboard } from './pages/login/dashboard/Dashboard.page';
//import { Login } from './pages/login/login.page';

function App() {
  return (
    <div className="App">
      {/*<Login />*/}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout> />    
    </div>
  );
}

export default App;
