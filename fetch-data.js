const path = require('path');
const axios = require('axios');
const SYMBOLS = ["AAPL", "AXP", "BA", "CAT", "CSCO", "CVX", "DD", "DIS", "GE", "GS", "HD", "IBM", "INTC", "JNJ", "JPM", "KO", "MCD", "MMM", "MRK", "MSFT", "NKE", "PFE", "PG", "TRV", "UNH", "UTX", "V", "VZ", "WMT", "XOM"];

const DESTINATION_FILE = path.join(__dirname, 'dist', 'stock_data.json');
const QUANDL_API_ENDPOINT = 'https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json';
const QUANDL_API_KEY = '-JuketAYn-cNXiDioYKb';

const STOCK_DATA = {};

var TaskQueue = require('task-queue-async');
var taskQueue = new TaskQueue({ 'sleepBetweenTasks': 2000, 'concurrency': 3 });

function getStockData(symbol) {
    const url = `${QUANDL_API_ENDPOINT}?ticker=${symbol}&api_key=${QUANDL_API_KEY}`;
    return axios.get(url)
    .then((quandl_res) => {
        resolve(quandl_res.data);
    }).catch((err) => {
        reject(err);
    });
}

function getStockDataTask(symbol) {
    let then = Promise.prototype.then.bind(getStockData(symbol));
    this.wrapCallback(then);
}

function writeFile() {
    return fs.writeFile(DESTINATION_FILE, JSON.stringify(STOCK_DATA), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

SYMBOLS.forEach(sym => {
    taskQueue.addTask(getStockDataTask.bind(this, sym));
});
taskQueue.addTask(writeFile);

//function fetchAll() {
    // let promises = SYMBOLS.map(sym => getStockData(sym));
    // return Promise.allSettled(promises)
    // .then((...stockData) => {
    //     let allData = {};
    //     stockData.forEach((result, idx) => {
    //         let symbol = SYMBOLS[idx];
    //         if (result.status == 'rejected') {
    //             console.warn(`Request for Stock Data for ${symbol} failed with reason ${result.reason}.`);
    //             return;
    //         }
    //         allData[symbol] = data;
    //     });
    //     return data;
    // }) 
//}



// fetchAll()
// .then(finalData => {
//     return JSON.stringify(finalData);
// })
// .then(finalDataStr => {

// });



