const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://Verman:verman@cluster0.lnlcjut.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: false });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'console error:'));
db.once('open', () => {
  console.log("db connected")
})

const app = express()

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter);

app.listen(9000, () => {
    console.log('Server started')
})