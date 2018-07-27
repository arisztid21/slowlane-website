import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Login extends Component {
    state = {
      user: null,
      showRegister: false,
      admin: false,
    };
  
    getMessage = error => error.response
      ? error.response.data
        ? error.response.data.message
        : JSON.stringify(error.response.data, null, 2)
      : error.message;
  
    register = () => {
      this.setState({ message: null });
      const username = this.refs.username.value;
      const password = this.refs.password.value;
      const email = this.refs.email.value;
      axios.post('/register', {
        email,
        username,
        password
      }).then(response => {
        this.setState({ user: response.data });
      }).catch(error => {
        this.setState({ message: 'Something went wrong: ' + this.getMessage(error) });
      });
    };
    
    login = () => {
      this.setState({ message: null });
      const username = this.refs.username.value;
      const password = this.refs.password.value;
      const admin = this.state.value;
      axios.post('/login', {
        username,
        password,
        admin
      }).then(response => {
        this.setState({ user: response.data });
      }).catch(error => {
        this.setState({ message: 'Something went wrong: ' + this.getMessage(error) });
      });
    };
  
    logout = () => {
      axios.post('/logout').then(response => {
        this.setState({ user: null });
      }).catch(error => {
        this.setState({ message: 'Something went wrong: ' + this.getMessage(error) });
      });
    };
  
    render() {
      const { user, showRegister, message} = this.state;
      const userData = JSON.stringify(user, null, 2);
      const signUp = <div>
        email: <input type="email" ref="email" />
        {' '}
        Username: <input ref="username" />
        {' '}
        Password: <input type="password" ref="password" />
        {' '}
      </div>
      const login =<div>
      Username: <input ref="username" />
      {' '}
      Password: <input type="password" ref="password" />
      {' '}
    </div>
  
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Login/Register</h1>
          </header>
          <div className="App-intro">
            {!user && <div>
              <a href="javascript:void(0)" onClick={() => this.setState({ showRegister: false })}>Login</a>
              {' '}
              <a href="javascript:void(0)" onClick={() => this.setState({ showRegister: true })}>Register</a>
              <div className="login-or-register">
                {showRegister && <div>
                  <h2>Register</h2>
                  {signUp}
                  <button onClick={this.register}>Register</button>
                </div>}
                {!showRegister && <div>
                  <h2>Log in</h2>
                  {login}
                  <button onClick={this.login}>Log in</button>
                </div>}
                {message}
              </div>
            </div>}
            {user && <div className="user-info">
              <h2>User data:</h2>
              <div>{ userData }</div>
              <Link to='/'>Back To HomePage</Link>
              <button onClick={this.logout}>Log out</button>
            </div>}
          </div>
        </div>
      );
    }
  }

  export default Login;