'use strict'
const email = require('./moduls/email.js');
const express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));
app.listen(8080);

email('Kira', 'Phone');