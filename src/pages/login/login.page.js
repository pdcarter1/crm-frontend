import React,{useState} from 'react';

import {Jumbotron} from 'react-bootstrap';
import { LoginForm} from '../../components/login/Login.component';
import { ResetPassword } from '../../components/login/password-reset/PasswordReset.component';

import './login.style.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formLoad, setFormLoad] = useState('login');

    const handleOnChange = e => {
        const {name, value} = e.target;
        switch (name){
            case 'email':
                setEmail(value);
            break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();

        if(!email || !password){
            return alert("Fill in form correctly");
        }
        //TODO call a function to submit the form
        console.log(email, password);
    };
    
    const handleOnResetSubmit = e => {
        e.preventDefault();

        if (!email) {
            return alert("Please enter the correct Email");
        }
        //TODO call a function to submit the form
        console.log(email);
    };

    const formSwitcher  = frmType => {
        setFormLoad(frmType);
    };

    return (
        <div className="login-page bg-info">
            <Jumbotron className="form-box">
                {formLoad === 'login' &&
                    <LoginForm handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    formSwitcher={formSwitcher}
                    email={email}
                    pass={password}
                    />
                }
                {formLoad === 'reset' && <ResetPassword handleOnChange={handleOnChange}
                    handleOnResetSubmit={handleOnResetSubmit}
                        formSwitcher={formSwitcher}
                        email={email}                    
                    />
                }
            </Jumbotron>
        </div>
    )
}