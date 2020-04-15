const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

const userRouter = require('./routes/users');
const dateRouter = require('./routes/dates');
const appointRouter = require('./routes/appointments');

app.use(morgan('dev'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/users',userRouter);
app.use('/dates',dateRouter);
app.use('/appoint',appointRouter);



app.listen(PORT,()=> console.log('server running on '+PORT));