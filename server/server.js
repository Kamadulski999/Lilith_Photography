const fs = require('fs');
const path = require('path');
const express = require('express');
const cors= require('cors');
const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()




const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


app.get('/photos/main/:id', (req, res) => {
  let id = req.params.id
  res.sendFile(path.join(__dirname, `./images/main/${id}.jpg`))
});

app.get('/photos/about/:id', (req, res) => {
  let id = req.params.id
  res.sendFile(path.join(__dirname, `./images/about/${id}.jpg`))
});

app.get('/Gallery/:gallery/:id', (req, res) => {
  let id = req.params.id
  let gallery = req.params.gallery
  res.sendFile(path.join(__dirname, `./images/galleries/${gallery}/${id}.jpg`))
});

app.post('/send_mail', (req,res) => { 
  
  
  const { email, option, name, phone, message } = req.body;
    const transporter = nodemailer.createTransport({
        service:"goDaddy",
        host: "smtp.office365.com",
        port: "587",
        secure: false,
        requireTLS: true,
        auth: {
           user: process.env.REACT_APP_EMAIL_USER,
           pass: process.env.REACT_APP_EMAIL_PASS 
       },
       tls: {
           ciphers:'SSLv3',
           rejectUnauthorized: false 
       }
    });
  
    let sendMessage = {
        from: `${email}`,
        to: "shellyk@lilithphotography.com, lilithphotography34@gmail.com, andrew.kamadulski@gmail.com",
        subject: "New Message Request from LilithPhotography.com",
        html: `
        <hr />        
        <span>Name: ${name}</span><br/>
        <span>Email: ${email}</span><br/>
        <span>Phone: ${phone || "No phone"}</span><br/><br/>
        <span>Type of Session: ${option || "No selection"}</span><br/>
        <span>Message:</span><br/>
        <p>${message || "No message"}</p>
    <hr />
        `
    }
 
    transporter.sendMail(sendMessage, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('sent', info);
        }
    });
 
    res.sendStatus(200);
});




app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
