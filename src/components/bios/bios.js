import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Familia from './all_bios';


class Bios extends Component{
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
            <Link to="/login/register">Login/Register</Link>
        </div>
        : 
        this.state.user ? 
        <div>
            <Link to="/">Home</Link>
            <Link to="/bios">Bios</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/about">About Us</Link>
            <Link to="/login/register">Login/Register</Link>
        </div>
         : 
        <div>
            <Link to="/">Home</Link>
            <Link to="/bios">Bios</Link>
            <Link to="/about">About Us</Link>
            <Link to="/login/register">Login/Register</Link>
        </div>

        return(
            <div>
                {user}
                <Familia/>
                bios
            </div>
        )
    }
}

export default Bios;