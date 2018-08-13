'use strict'
const email = require('./moduls/email.js');
const path = require('path');
const express = require('express');
var bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const app = express();

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.use(express.static(__dirname + '/public'));
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'));

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) {
    } else {
        email(request.body.userName, request.body.userPhoneNumber);
        response.render('home', {})
    }

});

app.get('/', (request, response) => {
    response.render('home', {})
});

app.listen(3000);


email('Kira', 'Phone');