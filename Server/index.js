const express = require('express');
const connectDB = require('./config/db')

const app=express();

//Init Middleware
app.use(express.json({extended: false}))
//Check server Running
app.get('/', (req,res) =>res.send('API Runnig'))

//Define routes
app.use('/api/users', require('./routes/api/users'))

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => console.log(`Sever started on port ${PORT}`));