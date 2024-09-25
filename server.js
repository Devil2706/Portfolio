import express from "express";
import bodyParser from "body-parser";
import path from "path";


const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log('server is on'));
