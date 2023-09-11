const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World... The news Dragon is running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedNews = news.find(f => f._id === id);
    res.send(selectedNews);
})


app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    if (id === 0) {
        res.send(news);
    } else {
        const selectedCategory = news.filter(n => parseInt(n.category_id) === id);
        res.send(selectedCategory);
    }

})

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
})