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
        await mongoose.connect('mongodb+srv://kondrashov:12091992ua@cluster0-qjuoj.azure.mongodb.net/coquus-liber?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false} );
        app.listen(PORT, ()=>console.log(`App has been started on port  ${PORT}...`));
    }
    catch(e){
        console.log('SERVER ERROR:  ' + e.message);
        process.exit(1);
    }
}
start();