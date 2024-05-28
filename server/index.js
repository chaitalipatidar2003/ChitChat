import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import Routes from './routes/Routes.js';
import path from 'path';


dotenv.config();
const app = express();

app.use(cors({
  origin: 'https://chitchat-bjfe.onrender.com'
}));

const PORT = 8000;

const _dirname= path.resolve();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(process.env.PORT || PORT , () => console.log(`Server is running successfully on PORT ${PORT}`));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', Routes);


app.use(express.static(path.join(_dirname,"/client/build")));

app.get("*", (req,res)=>{
    res.sendFile(path.join(_dirname,"client","build","index.html"));
})
