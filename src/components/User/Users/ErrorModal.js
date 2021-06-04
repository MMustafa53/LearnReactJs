import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop}/>

}

const Modal = props => {
    return (<Card className={classes.modal}>
        <header className={classes.header}>
            <h2>
                {props.error}
            </h2>
        </header>
        <div className={classes.content}>
            <p>
                {props.message}
            </p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.setShow}>Okay</Button>
        </footer>
    </Card>)
}

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>, document.getElementById('bd-root'))}
            {ReactDOM.createPortal(<Modal error={props.error} message={props.message} setShow={props.setShow}/>, document.getElementById('md-root'))}

        </React.Fragment>
    )
};

export default ErrorModal;