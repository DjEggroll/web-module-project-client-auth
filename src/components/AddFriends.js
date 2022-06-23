import React from 'react';
import axios from 'axios';


class AddFriends extends React.Component {
    state = {
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    }

    handleChange = (evt) => {
        this.setState({
            ...this.state,
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/friends', this.state, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='name' type='text' name='name' value={this.state.name} onChange={this.handleChange}/>

                    <input placeholder='age' type='text' name='age' value={this.state.age} onChange={this.handleChange}/>

                    <input placeholder='email' type='email' name='email' value={this.state.email} onChange={this.handleChange}/>

                    <button>Add Friend</button>
                </form>
            </div>
        )
    }

}

export default AddFriends;
