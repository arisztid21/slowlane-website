require('dotenv').config();
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const express = require('express');
const bcrypt = require('bcrypt');
const c = require('./controller');
const app = express();
const path = require('path')
const numOfSaltRounds = 12;

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*60*24*30
    }
}));
app.use(express.static(`${__dirname}/../build`));

// app.get(`/feed`, c.readuser);

// app.post('/post_feed', c.createPost);

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db)
    console.log("database is live")
})

app.get('/user_info', (req, res) => {
    res.json(req.session.user)
})

app.post('/register', (req, res) => {
    const db = app.get('db');
    const { email, username, password } = req.body;
    
    bcrypt.hash(password, numOfSaltRounds).then(hashedPassword => {
    db.create_profile([email, username, hashedPassword]).then((response) => {
        db.login(response[0].username).then(loggedUser => {
            req.session.user = loggedUser[0];
            res.json({ user: req.session.user });
        })
    }).catch(error => {
      console.log('error', error);
      res.status(500).json({ message: 'Something bad happened! '})
    });
  })
  });
  
  app.post('/login', (req, res) => {
    const db = app.get('db');
    const { username, password } = req.body;
    db.find_profile(username).then(users => {
        console.log('============= 1st', users)
      if (users.length) {
          console.log('============= 2nd', password, users[0].password)
        bcrypt.compare(password, users[0].password).then(passwordsMatched =>{
            
          if (passwordsMatched) {
            db.login(users[0].username).then(loggedUser => {
                req.session.user = loggedUser[0];
                res.json({ user: req.session.user });
            })
            
          } else {
            res.status(403).json({ message: 'Wrong password' })
          }
        })
          } else {
            res.status(403).json({ message: "That user is not registered" })
          }
    });
  });
  
  app.post('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).send();
  });
  
  function ensureLoggedIn(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.status(403).json({ message: 'You are not authorized' });
    }
  }
  
  app.get('/secure-data', ensureLoggedIn, (req, res) => {
    res.json({ someSecureData: 123 });
  });


app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const port = 2021;
app.listen(port, ()=>console.log(`server listening on port ${port}`))
