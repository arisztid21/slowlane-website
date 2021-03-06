import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import slowlane from './slowlane.png';

class Feed extends Component{
    constructor(){
        super()
        this.state = {
            user: ''
        }
    }

    componentDidMount(){
        axios.get('/user_info').then(response => {
            console.log(response)
            this.setState({
                user: response.data
            })
        })
    }
    render(){
        
        let user = 
        this.state.user.admin ? 
        <div>
            <Link to="/">Home</Link>
            <Link to="/bios">Bios</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/about">About Us</Link>
            {/* <Link to="/login/register">Login/Register</Link> */}
        </div>
        : 
        this.state.user ? 
        <div>
            <Link to="/">Home</Link>
            <Link to="/bios">Bios</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/about">About Us</Link>
            {/* <Link to="/login/register">Login/Register</Link> */}
        </div>
         : 
        <div>
            <Link to="/">Home</Link>
            <Link to="/bios">Bios</Link>
            <Link to="/about">About Us</Link>
            <Link to="/login/register">Login/Register</Link>
        </div>

        return(
            <div className="feed">
            <header className="feed">
            <img className="logo" src={slowlane} alt="logo" width="170" />
            <div className="moto">"We're not a car club, We're Familia"</div>
                {user}
            </header>
                feed
            </div>
        )
    }
}

export default Feed;