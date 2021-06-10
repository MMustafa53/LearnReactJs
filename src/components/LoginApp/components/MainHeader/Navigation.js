import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContext from "../../../../store/auth-context";

const Navigation = (props) => {
        const contextData = useContext(AuthContext)
        return (
            <nav className={classes.nav}>
                <ul>
                    {contextData.isLoggedIn && (
                        <li>
                            <a href="/">Users</a>
                        </li>
                    )}
                    {contextData.isLoggedIn && (
                        <li>
                            <a href="/">Admin</a>
                        </li>
                    )}
                    {contextData.isLoggedIn && (
                        <li>
                            <button onClick={contextData.onLogout}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>

            // <AuthContext.Consumer>
            //     {(conetextData) => {
            //         return (<nav className={classes.nav}>
            //             <ul>
            //                 {conetextData.isLoggedIn && (
            //                     <li>
            //                         <a href="/">Users</a>
            //                     </li>
            //                 )}
            //                 {conetextData.isLoggedIn && (
            //                     <li>
            //                         <a href="/">Admin</a>
            //                     </li>
            //                 )}
            //                 {conetextData.isLoggedIn && (
            //                     <li>
            //                         <button onClick={props.onLogout}>Logout</button>
            //                     </li>
            //                 )}
            //             </ul>
            //         </nav>)
            //     }}
            // </AuthContext.Consumer>
        );
    }
;

export default Navigation;
