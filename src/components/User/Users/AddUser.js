import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
const AddUser = props => {

    const addUserHandler = (event) => {
        event.preventDefault()
        // console.log(event.target[0].value)
        console.log(event.target["username"].value)
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">
                    Username
                </label>
                <input id="username" type="text"/>

                <label htmlFor="age">
                    Age
                </label>
                <input id="age" type="number"/>

                <label htmlFor="pwd">
                    Password
                </label>
                <input id="pwd" type="password"/>

                <Button type="submit">
                    Add User
                </Button>
            </form>
        </Card>
    )

};

export default AddUser;