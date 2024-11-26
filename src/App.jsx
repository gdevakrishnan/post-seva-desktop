import React, { Fragment, useEffect, useState } from 'react';
import './static/index.css';
import Router from './routers/Router';
import { userVerify } from './services/serviceWorker';
import appContext from './context/appContext';

const App = () => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("post-seva-token");
        console.log("Token:", token);

        if (token) {
            userVerify({ token })
                .then((response) => {
                    if (response.message === "Verified User") {
                        console.log("User Data:", response.data);
                        setUserDetails(response.data);
                    } else {
                        setUserDetails(null);
                    }
                })
                .catch((e) => {
                    console.error("Error verifying token:", e.message);
                    setUserDetails(null);
                });
        } else {
            setUserDetails(null);
        }
    }, []);

    const context = {
        userDetails,
        setUserDetails
    }

    return (
        <Fragment>
            <appContext.Provider value={context}>
                <Router />
            </appContext.Provider>
        </Fragment>
    );
};

export default App;
