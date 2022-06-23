import React from 'react';
import axios from 'axios';

import { Route, Redirect } from "react-router-dom";

class Friends extends React.Component {
    state = {
        friends: []
    }


    getFriends = () => {
        axios.get("http://localhost:9000/api/friends", {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        .then(res => {
            console.log(res);
            console.log(this.state);
            this.setState({
                friends: res.data
            });
            
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentDidMount(){
        this.getFriends()
    }

    render() {
        console.log("after", this.state)
        return(
            <div>
                {this.state.friends.map(friend => {
                    return <div>{friend.name}</div> 
                })}
            </div>
        )
    }
};

export default Friends;