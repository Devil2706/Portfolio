const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(port, () => console.log('server is on'));