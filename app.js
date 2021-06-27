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