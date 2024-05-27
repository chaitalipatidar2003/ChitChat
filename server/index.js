import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import Routes from './routes/Routes.js';
const path = requre("path") ;


dotenv.config();
const app = express();

const PORT = 8000;

const _dirname= path.resolve();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);


app.use(express.static(path.join(_dirname,"/client/build")));

app.get("*", (req,res)=>{
    res.sendFile(path.join(_dirname,"client","build","index.html"));
})
