const express = require("express");
const app = express();                               // sets up new Express server
const path = require('path');                        // ? node API, loads a module, what module is path?/what does it do?         
const fetch = require('node-fetch');
const port = process.env.PORT || 5000;

const assetRouter = require('./assets');

app.use('/dist', assetRouter);                   // ?

// app.get("/", (req, res) => res.send("Hello"));    // setup basic route

app.get('/', (request, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});

// create route to get fundamental data of company by ticker symbol
// app.get('/books/:isbn', (request, response) => {
app.get('/stocks/:ticker', (request, response) => {
    // debugger
    
    // make api call using fetch
    // fetch(`http://openlibrary.org/api/books?bibkeys=ISBN:${request.params.isbn}&format=json&jscmd=data`)
    // fetch(`https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=${ticker}&api_key=-JuketAYn-cNXiDioYKb`)
    fetch(`https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=${request.params.ticker}&api_key=-JuketAYn-cNXiDioYKb`)
        .then((response) => {
            return response.text();
        }).then((body) => {
            let results = JSON.parse(body)
            console.log(results)   // logs to server
            response.send(results) // sends to frontend
        });
});



app.listen(port, () => console.log(`Server is running on port ${port}`));

