const express = require('express');
const app = express();
const config = require('./config.json');
const cors = require('cors');
//const config2 = require('./app/utils/config');
//son equivalentes
const port = process.env.PORT ? process.env.PORT : config.app.port ? config.app.port : 3003;
const bind = process.env.BIND ? process.env.BIND : config.app.bind ? config.app.bind : '127.0.0.1';
//const port = process.env.PORT || config.app.port || 3003;

//URL Encode support for POST, PUT methods
const bodyParser = require('body-parser');

//controlador user con auth
//let usersController = require('./app/controllers/users_firebase')();
let loginController = require('./app/controllers/login')();

let usersController = require('./app/utils/controller')('users');
let badge_controller = require('./app/utils/controller')('badge');
let challengesController = require('./app/utils/controller')('challenge');
let trainingsController = require('./app/utils/controller')('training');
let advancesController = require('./app/utils/controller')('advance');  

//Relación tablas
let badge_user_controller = require('./app/utils/controller')('badge_user');


let heroController = require('./app/controllers/heroes')('heroes');  // new
app.use('/heroes', heroController);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/advance', advancesController);  // New
// app.use('/users', usersController);
// app.use('/training', trainingsController);
// app.use('/challenge', challengesController);
// app.use('/badge', badge_controller);
// app.use('/login', loginController);
// app.use('/badge_user', badge_user_controller);

// app.use('/', (request, response) => {
//     response.send('Hi there, now in API ' + config.app.name);
// });

app.listen(port, function () {
    console.log('***********************');
    console.log("App: " + config.app.name);
    console.log('Running: ' + config.app.bind + ':' + config.app.port);
    console.log('***********************');
});

