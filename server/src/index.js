const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoURI = 'mongodb+srv://thisismemukul:0VYPbULMpfMr1fb6@cluster0.myrvduq.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongo', err);
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});