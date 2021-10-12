import React,{useState} from 'react';

import {Jumbotron} from 'react-bootstrap';
import { LoginForm} from '../../components/login/Login.component';
import { ResetPassword } from '../../components/login/password-reset/PasswordReset.component';

import './login.style.css';

export const Login = () => {
  const [formLoad, setFormLoad] = useState('login');

 
    
  const handleOnResetSubmit = e => {
    e.preventDefault();
   
  };

  const formSwitcher  = frmType => {
    setFormLoad(frmType);
  };

  return (
    <div className="login-page bg-info">
      <Jumbotron className="form-box">
        {formLoad === 'login' &&
                    <LoginForm                     
                      formSwitcher={formSwitcher}                      
                    />
        }
        {formLoad === 'reset' && <ResetPassword 
          //handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher={formSwitcher}
          //email={email}                    
        />
        }
      </Jumbotron>
    </div>
  );
};