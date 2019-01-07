const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send("See you There");
});

app.listen(8080, () => {
    console.log('Listening on port 8080!');
});