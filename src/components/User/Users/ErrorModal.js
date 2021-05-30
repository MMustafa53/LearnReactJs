import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';

const ErrorModal = props => {
  return(
      <div className={classes.backdrop}>
          <Card className={classes.modal}>
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
          </Card>
      </div>
  )
};

export default ErrorModal;