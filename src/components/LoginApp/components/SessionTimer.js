import React, {useState, useEffect} from "react";

let sessionTimer;

const SessionTimer = (props) => {
    const [timerIsActive, setTimerIsActive] = useState(false);

    const { timerDuration } = props; // using destructuring to pull out specific props values

    useEffect(() => {
        if (!timerIsActive) {
            setTimerIsActive(true);
            sessionTimer = setTimeout(() => {
                setTimerIsActive(false);
            }, timerDuration);
        }
    }, [timerIsActive, timerDuration]);
};
 export default SessionTimer;