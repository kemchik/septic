'use strict'
const sgMail = require('@sendgrid/mail');

module.exports = (name, phone)=>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'kerminsk@gmail.com',
        from: 'KiraEmRmiss2@gmail.com',
        subject: 'ЗАКАЗ ЗВОНКА',
        text: 'Ура',
        html: `<h1 style="text-align: center; text-weight: bold; color: black;">ЗАКАЗ</h1><ul style="color: black; font-size: 1.4em; text-align: center;  list-style-type: none; padding: 0; margine: 10px 0 5px 0;"><li style="margin-left: 0;">Имя: ${name}</li><li style="margin-left: 0;">Телефон: ${phone}</li></ul>`,
    };

    sgMail.send(msg);
};