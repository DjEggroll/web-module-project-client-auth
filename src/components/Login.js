import React from 'react';
import axios from 'axios';



class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = (evt) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [evt.target.name]: evt.target.value
            }
        });
    }

    handleLogin = (evt) => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/login', this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                this.props.history.push("/friends");
            })
            .catch(err => {
                console.log(err);
            })
    };



    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin}>

                    <input 
                        type="text" 
                        name="username" 
                        value={this.state.credentials.username} 
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text" 
                        name="password" 
                        value={this.state.credentials.password} 
                        onChange={this.handleChange}
                    />

                    <button>Log in</button>

                </form>
            </div>
        )
    }




}

export default Login;