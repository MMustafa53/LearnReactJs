import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const UsersLists = props => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.key}>
                        {user.name} ({user.age} yaşında!)
                    </li>
                ))}
            </ul>
        </Card>

    )
}

export default UsersLists;