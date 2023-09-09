const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World... The news Dragon is running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})
app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
})