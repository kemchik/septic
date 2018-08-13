import ReactDOM from 'react-dom';
import React from 'react';
const sendMessage = require('./sendmessage')

console.log('hello');
const k = document.getElementById('itsme');
console.log(k);

class Hello extends React.Component{
    render(){
        return <h5>Hello222</h5>
    }

    componentWillMount(){
        console.log('itsme')
    }
}

ReactDOM.render(
    <Hello/>,
    document.getElementById('itsme')
    )

// message
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

const mailOptions = {
    from: 'youremail@gmail.com',
    to: 'kerminsk@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
// end message

