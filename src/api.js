// import axios from 'axios';
// import "babel-polyfill";
// require("babel-core/register");
// require("babel-polyfill");
// import "@babel/polyfill";

// query example	== https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=AAPL&api_key=-JuketAYn-cNXiDioYKb
// query syntax 	== https://www.quandl.com/api/v3/datatables/${tableName}.${dataFormat}?ticker=AAPL&api_key=-JuketAYn-cNXiDioYKb
// doc: https://www.quandl.com/databases/SF1/documentation?anchor=getting-started
// https://jsonformatter.curiousconcept.com/

// "use strict";
// async function getData(ticker) {
//     const proxyurl = "https://cors-anywhere.herokuapp.com/";
//     const API_KEY = '-JuketAYn-cNXiDioYKb';
//     const stockUrl = `https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=${ticker}&api_key=${API_KEY}`;
//     const response = await fetch(proxyurl + stockUrl);
//     return response.json()
// }
// export async function getStock(ticker) {
//     const data = await getData(ticker);
//     return data;
// }



export function getStock(ticker) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const API_KEY = '-JuketAYn-cNXiDioYKb';
    const stockUrl = `https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=${ticker}&api_key=${API_KEY}`;
    return fetch(proxyurl + stockUrl).then(response => {
            return response.json();
        })
        .catch(error => {
            console.log(error);
        })        
}

// let data = await getStock('AAPL');  //=> {data: Array(8), columns: Array(111)}  
// data refers to columns, array 111 represents columns

// const StockUrl = `https://max.herokuapp.com/stocks/${API_KEY}/${ticker}`;
// return axios.get(`https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=${ticker}&api_key=-JuketAYn-cNXiDioYKb`,
// { 
//     mode: 'no-cors',
//     headers: { 'Access-Control-Allow-Origin': '*' } 
// })
// .catch(function (error) {
//     console.log(error);
// });


