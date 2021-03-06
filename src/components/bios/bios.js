import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Familia from './all_bios';
import "./bios.css";
import slowlane from './slowlane.png';


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
            <div className="bios">
            <header>
            <img className="logo" src={slowlane} alt="logo" width="170" />
            <div className="moto">"We're not a car club, We're Familia"</div>
                {user}
            </header>
                <Familia/>
            </div>
        )
    }
}

export default Bios;