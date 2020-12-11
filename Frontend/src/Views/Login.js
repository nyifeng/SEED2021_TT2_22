import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.changeHandler = this.changeHandler.bind(this);
    };

    changeHandler = e => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    };

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <label for="username">
                    Username:
                    <input name="username" type="text" value={this.state.username} onChange={this.changeHandler} />
                </label>
                <label for="password">
                    Password:
                    <input name="password" type="password" value={this.state.password} onChange={this.changeHandler} />
                </label>
            </div>
        )
    }
} 

export default withRouter(Login);