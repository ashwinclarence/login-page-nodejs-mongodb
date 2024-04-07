const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const nocache = require('nocache');
const { v4: uuidv4 } = require('uuid');
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

// Session configuration
app.use(session({
    secret: uuidv4(),
    resave: true,
    saveUninitialized: true
}));

// Routes
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

// First route
app.get('/', (req, res) => {
    if(req.session.user){
        res.redirect('/user/dashboard')
    }else{
        res.render('login', { title: 'Login Page' });
    }
});

// Port listening
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
