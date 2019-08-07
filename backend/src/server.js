const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

mongoose.connect('mongodb+srv://jordao:estudo123@cluster0-xcb6h.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);

server.listen(3333);
