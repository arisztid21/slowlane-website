import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/home';
import Feed from './components/feed/feed'
import Bios from './components/bios/bios';
import About from './components/about-us/about-us';
import Login from './components/auth/login';

export default function routes(){
     return <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/bios' component={Bios}/>
            <Route path='/feed' component={Feed}/>
            <Route path='/login/register' component={Login}/>
            <Route path='/' render={()=> {
                return <div> you are not authorized to be here </div>
            }}/>
        </Switch>
};