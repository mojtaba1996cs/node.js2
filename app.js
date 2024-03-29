const express = require('express');
const app = express();
const path = require('path');
const urlShortener = require('node-url-shortener');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/url', function(req, res) {
    const url = req.body.url;
     urlShortener.short(url, function(err, shortUrl){
        res.send(shortUrl);
    });
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
