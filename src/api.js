import 'axios';

export function getStock(ticker) {
    return axios.get(`https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=${ticker}&api_key=-JuketAYn-cNXiDioYKb`)
    .catch(function (error) {
        console.log(error);
    });
}