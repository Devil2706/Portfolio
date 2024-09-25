const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

client.connect()
    .then(() => {
        app.use(express.static(path.join(__dirname)));

        app.get('/', (req, res) => {
            res.sendFile(path.join(__direname, 'index.html'));
        });

        app.use(express.json());

        app.listen(port, () => console.log('server is on'));
    })
