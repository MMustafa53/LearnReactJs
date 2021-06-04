import React, {useState, useRef} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const pwdInputRef = useRef();

    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const resetFields = (field) => {
        let i = field.target.elements.length - 1
        console.log(i)
        while (i >= 0) {
            field.target[i].value = ''
            i--;
            console.log(i)
        }
    }

    const userNameChangeHandler = event => {
        setUserName(event.target.value)
    }

    const userAgeHandler = event => {
        let n = +event.target.value
        if (n !== 0 && (Number(n) === n && n % 1 === 0))
            setAge(n)
        else {
            setAge('')
        }
    }

    const userPasswordHandler = event => {
        setPassword(event.target.value)
    }

    const setErrorHandler = () => {
        // setError(undefined);
        setError(null);
    }

    const addUserHandler = (event) => {
        event.preventDefault()
        console.log(nameInputRef.current.value)  //state kullanmadan inputan veri alınıp değiştirilebilir güvenlik için stateler daha iyidir
        // console.log(event.target[0].value)
        // console.log(event.target["username"].value)
        if (userName.trim().length === 0 || password.trim().length === 0 || +age < 1) {
            setError({
                error: 'Geçersiz Giriş!!',
                message: "Lütfen girilen değerleri kontrol ediniz!"
            })
            return;
        }
        console.log(userName, age, password)
        props.getUser([{key: Math.random(), name: userName, age: age, password: password}])
        // resetFields(event) alanalrı resetlemek için 1. yöntem
        // 2. yöntem
        nameInputRef.current.value = '' // setUserName('') ile aynı işi yapmakta
        setAge('')
        setUserName('')
        setPassword('')

    }

    return (
        <div>
            {error && <ErrorModal error={error?.error} message={error?.message} setShow={setErrorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">
                        Username
                    </label>
                    <input id="username" type="text" value={userName} onChange={userNameChangeHandler} ref={nameInputRef}/>

                    <label htmlFor="age">
                        Age
                    </label>
                    <input id="age" type="number" value={age} onChange={userAgeHandler} ref={ageInputRef}/>

                    <label htmlFor="pwd">
                        Password
                    </label>
                    <input id="pwd" type="password" value={password} onChange={userPasswordHandler} ref={pwdInputRef}/>

                    <Button type="submit">
                        Add User
                    </Button>
                </form>
            </Card>
            {/*(show ?*/}
            {/*        <Card className={classes.input}>*/}
            {/*            <form onSubmit={addUserHandler}>*/}
            {/*                <label htmlFor="username">*/}
            {/*                    Username*/}
            {/*                </label>*/}
            {/*                <input id="username" type="text" value={userName} onChange={userNameChangeHandler}/>*/}

            {/*                <label htmlFor="age">*/}
            {/*                    Age*/}
            {/*                </label>*/}
            {/*                <input id="age" type="number" value={age} onChange={userAgeHandler}/>*/}

            {/*                <label htmlFor="pwd">*/}
            {/*                    Password*/}
            {/*                </label>*/}
            {/*                <input id="pwd" type="password" value={password} onChange={userPasswordHandler}/>*/}

            {/*                <Button type="submit">*/}
            {/*                    Add User*/}
            {/*                </Button>*/}
            {/*            </form>*/}
            {/*        </Card> :*/}
            {/*        <ErrorModal error="hata" message="Message" setShow={showHandler}/>*/}
            {/*)*/}
        </div>
    )

};

export default AddUser;