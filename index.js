import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/raw.js';

// get the absolute file path
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const filename = fileURLToPath(import.meta.url);
const _dirname = dirname(filename);

// make the web app and define the port
const app = express();
const PORT = 5000;

// make a router for the other pages
const router = express.Router();

// get router for the index html
router.get('/',function(req,res){
    res.sendFile(_dirname + '/index.html');
    //_dirname : It will find the absolute location of the file directory where all files are stored
  });

router.get('/stylecss',function(req,res){
    res.sendFile(_dirname + '/style.css');
});

router.get('/javascript',function(req,res){
    res.sendFile(_dirname + '/script.js');
});

router.get('/bg',function(req,res){
    res.sendFile(_dirname + '/Websites.png');
  
});

app.use(bodyParser.json());

app.use('/raw', usersRoutes);

app.use("/", router);

// app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server running on port : http://localhost:${PORT}`));