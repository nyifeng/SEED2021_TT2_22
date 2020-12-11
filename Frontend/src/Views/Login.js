import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function Login(props) {

    const [state, setState] = useState({
        username: '',
        password: ''
    });

    const [request, setRequest] = useState({
        data: null,
    });

    const changeHandler = e => {
        const {name, value} = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const LoginHandler = async () => {
        const data = {
            username: state.username,
            password: state.password
        };
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        const config = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'x-api-key': 'IrZsuQz9Ns1h2yaHZwhmC2hjGq3xJXpG2KyqIJjG'
            }
        };
        const url = "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login";
            axios.post(proxyurl + url, data, config)
                .then(response => {
                    setRequest({
                        data: response.data,
                    })
                    if (response.status !== 200) {
                        throw new Error("Error logging in!");
                    };
                    localStorage.setItem('token', 'Dummy DBS token');
                    redirectToHome();
                })
                .catch((err) => {
                    console.log("AXIOS ERROR: ", err)
                });
    };

    const redirectToHome = () => {
        props.history.push('/dashboard');
    };

    return (
        <div>
            <h1>Login Page</h1>
            <label for="username">
                Username:
                    <input className="border py-2 px-3 text-grey-darkest" name="username" type="text" value={state.username} onChange={changeHandler} />
            </label>
            <label for="password">
                Password:
                    <input className="border py-2 px-3 text-grey-darkest" name="password" type="password" value={state.password} onChange={changeHandler} />
            </label>
            <button onClick={LoginHandler}>Submit</button>
        </div>
    )
}

export default withRouter(Login);
