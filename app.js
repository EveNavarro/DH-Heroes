const express = require('express');
const app = express();
let port = 3030; 
const path = require('path');

app.use(express.static('public'));

app.listen(port, () =>
    console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`));

app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/babbage.html'))
});

app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/berners-lee.html'))
});

app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/clarke.html'))
});

app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hamilton.html'))
})

app.get('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hopper.html'))
})

app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/lovelace.html'))
})