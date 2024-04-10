const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const nocache = require('nocache');
const userRoutes = require('./routes/userRoute');
const adminRoutes = require('./routes/adminRoute');

const app = express();

// Setting default port
const port = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(nocache());

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serving static files
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));


const oneDay = 1000 * 60 * 60 * 24; //one day in seconds
app.use(session({
    secret: uuidv4(),
    resave: false,
    cookie: { maxAge: oneDay },
    saveUninitialized: true,
  })
); //creating session

// First route
app.get('/', (req, res) => {
    if(req.session.username){
        res.redirect('/user/home')
    }else{
        res.render('login', { title: 'Login Page' ,status:false});
    }
});

// Routes
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);



// Port listening
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
