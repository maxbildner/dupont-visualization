import axios from 'axios';

export function getStock(ticker) {
    const StockUrl = `https://max.herokuapp.com/stocks/${API_KEY}/${ticker}`;
    //const StockUrl = `https://www.quandl.com/api/v3/datasets/YAHOO/MSFT-MSFT-Microsoft-Corporation.json?api_key=-JuketAYn-cNXiDioYKb`; //`https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=${ticker}&api_key=-JuketAYn-cNXiDioYKb`;
    const req = new Request(StockUrl, {
        method: 'GET',
        mode: 'no-cors',
    });
    return fetch(req)
    // return axios.get(`https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=${ticker}&api_key=-JuketAYn-cNXiDioYKb`,
    // { 
    //     mode: 'no-cors',
    //     headers: { 'Access-Control-Allow-Origin': '*' } 
    // })
    .catch(function (error) {
        console.log(error);
    });
}