import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { loginSuccess } from "../login/loginSlice";
import { DefaultLayout } from '../../loayout/DefaultLayout';
import { fetchNewAccessJWT } from "../../api/userApi";
import { getUserProfile } from "../../pages/dashboard/userAction";

export const PrivateRoute = ({children, ...rest}) => {
    const dispatch = useDispatch();
    const {isAuth} = useSelector(state => state.login);
    const { user } = useSelector(state => state.user);
    
    useEffect(() => {
        const updateAccessJWT = async() => {
            const result = await fetchNewAccessJWT();
            result && dispatch(loginSuccess());
        }
        !user && dispatch(getUserProfile());
        !sessionStorage.getItem("accessJWT") && localStorage.getItem("crmSite") && updateAccessJWT();

        !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess())
    }, [dispatch, isAuth, user]);

    return (
        <Route
            {...rest}
            render={() =>
                isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
            }
        />
    );
};