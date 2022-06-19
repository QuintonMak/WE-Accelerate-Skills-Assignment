import express from "express"; //importing a module
const app = express(); //creating an express app

// use .env file to store the port
import dotenv from "dotenv";
dotenv.config();
const { PORT = 3000 } = process.env;

const host = `localhost:${PORT}`;
const basePath = "/";

import bodyParser from "body-parser";
import cors from "cors";
app.use(bodyParser.json()).use(cors());

import data from './data.js';
app.get('/movies', (req, res) => {
    res.json(data);
});

app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    const movie = data.find(movie => movie.id == id);
    if (!movie) {
        res.status(404).json({error: "id does not exist"});
    }
    res.json(movie);
});

app.listen(PORT, () =>
    console.log(`Hello World, I'm listening http://localhost:${PORT}`)
);
