const keys = require('./keys');

// Express app setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup
const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    port: keys.pgPort,
    password: keys.pgPassword,
    database: keys.pgDatabase
});

pgClient.on('error', () => {
    console.log('Lost PG connection');
});

pgClient
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch(error => {
        console.log(error);
    });