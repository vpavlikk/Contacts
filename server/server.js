const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json({ extended: true }))
app.use('/api/contacts', require('./routes/contact-routes'));
app.use('/api/auth', require('./routes/auth-routes'));

const PORT = 8000;

async function start(){
    try{
        await mongoose.connect(
          "mongodb+srv://mydatabase:vladpavlik123098@cluster0.hvadz.mongodb.net/mydatabase?retryWrites=true&w=majority",
         {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}
       );
        app.listen(PORT, ()=>console.log(`App has been started on port  ${PORT}...`));
    }
    catch(e){
        console.log('SERVER ERROR:  ' + e.message);
        process.exit(1);
    }
}
start();
// https://downloads.mongodb.org/linux/mongodb-shell-linux-x86_64-ubuntu1804-4.4.0.tgz
