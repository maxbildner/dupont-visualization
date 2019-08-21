import {       
    rectangularAreaChartDefaultSettings,
    loadRectangularAreaChart,
    renderAlbers
} from './rectangularAreaChart';
import allStockData from './stock_data.json';
import { parseStockData } from './process';
import { getStock } from './api';
// import "./styles/app.scss";


function handleStockGet(e) {
    const stockSymbolEl = document.getElementById('stock-symbol');
    const stockSymbol = stockSymbolEl.value;            // ex. 'AAPL'

    // DOESN'T WORK
    // 1
    // let data = await getStock('AAPL');  //=> {data: Array(8), columns: Array(111)}  
    // 2
    // let data = null;
    // getStock('AAPL').then( result => {
    //     debugger
    //     // result.datatable.data[0][7];             //=> assets for 2018
    //     // data = result;
    // });
    // 3
    // let data = getStock('AAPL');
    // console.log(data)


    getStock(stockSymbol).then(
        response => {                                     // response.datatable == {data: Array(8), columns: Array(111)}  
        // ex. response.datatable.data[0][7] => assets for apple for 2018   
        let data = parseStockData(response);     
        renderAlbers(data);
        // move all code below into function and call function here
    })

    // response.datatable.columns[0]
        


    


    // // GET STOCK DATA (FOR TESTING- DATA IS HARD CODED)
    // // const stockData = allStockData[stockSymbol];
    // // if (!stockData) {											// if user types in stock not in free api
    // //     console.log(`Stock ${stockSymbol} not found.`);
    // //     return;
    // // }
    // // const data = parseStockData(stockData);						// not being used yet
    // // ex. if AAPL, duPontData == { 
    // // leverage: 3.4133013523477094, 
    // // assetTurnover: 0.7262150522933899, 
    // // operatingMargin: 0.26694026619477024, 
    // // interestBurden: 1.0282800643177523, 
    // // taxBurden: 0.8165781929413056 }
    // // Tax Burden = 19.16       Interest Burden = % -2.12       
    // // EBIT Margin = % -2.13    Asset Turnover = % 40.37 
    // // Leverage = % 44.71 
    // // each element represents the extent to which (out of all 5 ratios) that ratio contributed to the change in ROE
    // let rawData = [19.16, 2.12, 2.13, 40.37, 44.71];              	// for now make postiive
    // // var rawData = { time: 40, money: 90, food: 30, sleep: 60 };	// rawData MUST BE ARRAY NOT OBJ

    // // let data1 = [ 
    // // 	{ value: "42", label: "Tax Burden", valueSuffix: " %" }, 
    // // 	{ value: "69", label: "Asset Turnover", valueSuffix: " %" }, 
    // // 	{ value: "29", label: "EBIT Margin", valueSuffix: " %" }, 
    // // 	{ value: "52", label: "Leverage", valueSuffix: " %" }
    // // ];
    // // let data1 = [ 
    // // 	{ value: `${100*data.taxBurden}`, label: "Tax Burden", valueSuffix: " %" }, 
    // // 	{ value: `${100*data.assetTurnover}`, label: "Asset Turnover", valueSuffix: " %" }, 
    // // 	{ value: `${100*data.operatingMargin}`, label: "EBIT Margin", valueSuffix: " %" }, 
    // // 	{ value: `${100*data.leverage}`, label: "Leverage", valueSuffix: " %" }
    // // ];
    // let data1 = [
    //     { value: `${rawData[0]}`, label: "Tax Burden", valueSuffix: " %" },
    //     { value: `${rawData[3]}`, label: "Asset Turnover", valueSuffix: " %" },
    //     { value: `${rawData[2]}`, label: "EBIT Margin", valueSuffix: " %" },
    //     { value: `${rawData[4]}`, label: "Leverage", valueSuffix: " %" },
    //     // { value: `10`, label: "Interest Burden", valueSuffix: " %" }
    // ];
    // let config1 = rectangularAreaChartDefaultSettings();
    // config1.expandFromLeft = false;
    // config1.colorsScale = d3.scale.category20b();
    // // // create custom colorScale function  DOESN"T WORK YET
    // // config1.colorScale = d3.scale.ordinal()
    // //     .range(["#9e0142", "#a00343", "#a20643", "#a40844", "#a70b44"])
    // // doesn't work below (colorSCale)
    // // config1.colorsScale = ["#9e0142", "#a00343", "#a20643", "#a40844", "#a70b44", "#a90d45", "#ab0f45", "#ad1245", "#af1446", "#b11646", "#b31947", "#b51b47", "#b71d48", "#ba2048", "#bc2248", "#be2449", "#c02749", "#c12949", "#c32b4a", "#c52d4a", "#c7304a", "#c9324a", "#cb344b", "#cd364b", "#ce384b", "#d03b4b", "#d23d4b", "#d33f4b", "#d5414b", "#d7434b", "#d8454b", "#da474a", "#db494a", "#dd4b4a", "#de4d4a", "#df4f4a", "#e1514a", "#e2534a", "#e35549", "#e45749", "#e65949", "#e75b49", "#e85d49", "#e95f49", "#ea6149", "#eb6349", "#ec6549", "#ed6749", "#ee6a49", "#ef6c49", "#f06e4a", "#f0704a", "#f1724a", "#f2744b", "#f3774b", "#f3794c", "#f47b4d", "#f47e4d", "#f5804e", "#f6824f", "#f68550", "#f78750", "#f78951", "#f88c52", "#f88e53", "#f89154", "#f99356", "#f99557", "#f99858", "#fa9a59", "#fa9c5a", "#fa9f5c", "#fba15d", "#fba35e", "#fba660", "#fba861", "#fcaa62", "#fcad64", "#fcaf65", "#fcb167", "#fcb368", "#fcb56a", "#fdb86b", "#fdba6d", "#fdbc6e", "#fdbe70", "#fdc071", "#fdc273", "#fdc474", "#fdc676", "#fdc878", "#fdca79", "#fecc7b", "#fecd7d", "#fecf7e", "#fed180", "#fed382", "#fed584", "#fed685", "#fed887", "#feda89", "#fedb8b", "#fedd8d", "#fede8f", "#fee090", "#fee192", "#fee394", "#fee496", "#fee698", "#fee79a", "#fee89b", "#feea9d", "#feeb9f", "#feeca1", "#feeda2", "#feefa4", "#fef0a5", "#fef1a7", "#fef2a8", "#fdf3a9", "#fdf3aa", "#fdf4ab", "#fdf5ac", "#fcf6ad", "#fcf6ae", "#fcf7af", "#fbf7af", "#fbf8b0", "#faf8b0", "#faf9b0", "#f9f9b0", "#f9f9b0", "#f8f9b0", "#f7faaf", "#f7faaf", "#f6faae", "#f5faae", "#f4f9ad", "#f3f9ac", "#f2f9ac", "#f2f9ab", "#f0f9aa", "#eff8a9", "#eef8a8", "#edf8a7", "#ecf7a7", "#ebf7a6", "#e9f6a5", "#e8f6a4", "#e7f5a3", "#e5f5a2", "#e4f4a2", "#e2f3a1", "#e0f3a1", "#dff2a0", "#ddf1a0", "#dbf19f", "#d9f09f", "#d7ef9f", "#d6ee9f", "#d4ee9f", "#d2ed9e", "#d0ec9e", "#cdeb9f", "#cbea9f", "#c9e99f", "#c7e89f", "#c5e89f", "#c3e79f", "#c0e6a0", "#bee5a0", "#bce4a0", "#b9e3a0", "#b7e2a1", "#b4e1a1", "#b2e0a1", "#b0dfa1", "#addea2", "#abdda2", "#a8dca2", "#a6dba3", "#a3daa3", "#a0d9a3", "#9ed8a3", "#9bd7a3", "#99d6a4", "#96d5a4", "#94d4a4", "#91d3a4", "#8ed1a4", "#8cd0a4", "#89cfa5", "#87cea5", "#84cda5", "#82cba5", "#7fcaa6", "#7dc9a6", "#7ac7a6", "#77c6a6", "#75c5a7", "#73c3a7", "#70c2a8", "#6ec0a8", "#6bbea8", "#69bda9", "#66bba9", "#64b9aa", "#62b8aa", "#60b6ab", "#5db4ac", "#5bb2ac", "#59b0ad", "#57aeae", "#55acae", "#53aaaf", "#51a8af", "#50a6b0", "#4ea4b1", "#4ca2b1", "#4ba0b2", "#499db2", "#489bb3", "#4799b3", "#4697b3", "#4595b4", "#4492b4", "#4390b4", "#438eb4", "#428cb5", "#4289b5", "#4287b4", "#4285b4", "#4283b4", "#4280b4", "#437eb3", "#437cb3", "#447ab3", "#4577b2", "#4575b1", "#4673b1", "#4771b0", "#486eaf", "#4a6caf", "#4b6aae", "#4c68ad", "#4e65ac", "#4f63ab", "#5161aa", "#525fa9", "#545ca8", "#555aa7", "#5758a6", "#5956a5", "#5b53a4", "#5c51a3", "#5e4fa2"];
    // config1.maxValue = 100;
    // loadRectangularAreaChart("rectangularareachart1", data1, config1);



    // // let data2 = [
    // //     { value: "78", label: "label2", valuePrefix: "Area of " }, 
    // //     { value: "37", label: "Cras", valuePrefix: "Area of " }, 
    // //     { value: "55", label: "elit sed consequat", valuePrefix: "Area of " }
    // // ];
    // let data2 = [
    //     { value: `${rawData[0]}`, label: "Tax Burden" }, 
    //     { value: `${rawData[3]}`, label: "Asset Turnover" }, 
    //     { value: `${rawData[2]}`, label: "EBIT Margin" },
    //     { value: `${rawData[4]}`, label: "Leverage" }
    // ];
    // let config2 = rectangularAreaChartDefaultSettings();
    // // config2.colorsScale = d3.scale.ordinal().range(["#fc8d59", "#ffffbf", "#91bfdb"]); //palette from colorbrewer https://github.com/mbostock/d3/tree/master/lib/colorbrewer
    // config2.colorsScale = d3.scale.ordinal().range(["#00441b", "#1b7837", "#5aae61", "#a6dba0"]); //palette from colorbrewer https://github.com/mbostock/d3/tree/master/lib/colorbrewer
    // config2.textColorScale = d3.scale.ordinal().range(["#444", "#333", "#222"]);
    // config2.labelAlignDiagonal = true;
    // config2.valueTextAlignDiagonal = true;
    // config2.valueTextPadding.right = 18;
    // config2.maxValue = 100;
    // // config2.animateDelay = 1000;
    // config2.animateDelayBetweenBoxes = 0;
    // config2.valueTextCountUp = false;
    // loadRectangularAreaChart("rectangularareachart2", data2, config2);
    // // ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"]



    // let data3 = [
    //     { value: `${rawData[0]}`, label: "Tax Burden" }, 
    //     { value: `${rawData[3]}`, label: "Asset Turnover" }, 
    //     { value: `${rawData[2]}`, label: "EBIT Margin" }, 
    //     { value: `${rawData[4]}`, label: "Leverage" } 
    // ];
    // let config3 = rectangularAreaChartDefaultSettings();
    // config3.expandFromLeft = false;
    // config3.expandFromTop = true;
    // config3.maxValue = 100;
    // config3.colorsScale = d3.scale.ordinal().range(["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"]);  //palette from colorbrewer https://github.com/mbostock/d3/tree/master/lib/colorbrewer
    // config3.textColorScale = d3.scale.ordinal().range(["#555", "#777", "#999", "#aaa", "#ddd", "#fff", "#fff"]);
    // // config3.animateDelay = 2000;
    // loadRectangularAreaChart("rectangularareachart3", data3, config3);



    // // let data4 = [
    // //     { value: "32", label: "consectetuer adipiscing" }, 
    // //     { value: "62", label: "ipsum" }
    // // ];
    // let data4 = [
    //     { value: `${rawData[0]}`, label: "Tax Burden" },
    //     { value: `${rawData[3]}`, label: "Asset Turnover" },
    //     { value: `${rawData[2]}`, label: "EBIT Margin" },
    //     { value: `${rawData[4]}`, label: "Leverage" }
    // ];
    // let config4 = rectangularAreaChartDefaultSettings();
    // config4.expandFromLeft = true;
    // config4.expandFromTop = true;
    // config4.maxValue = 100;
    // config4.labelAlignDiagonal = true;
    // // config4.animateDelay = 3500;
    // config4.displayValueText = false;
    // config4.animateDelayBetweenBoxes = 0;
    // // config4.colorsScale = d3.scale.ordinal().range(["#7570b3", "#e7298a", "#66a61e"]);  //palette from colorbrewer https://github.com/mbostock/d3/tree/master/lib/colorbrewer
    // config4.colorsScale = d3.scale.ordinal().range(["#053061", "#2166ac", "#4393c3", "#92c5de"]);  //palette from https://observablehq.com/@d3/color-schemes
    // config4.textColorScale = d3.scale.ordinal().range(["#e7298a", "#7570b3", "#66a61e"]);
    // loadRectangularAreaChart("rectangularareachart4", data4, config4);
}

document.addEventListener('DOMContentLoaded', () => {
    const getStockbtnEl = document.getElementById('get-stock');
    getStockbtnEl.addEventListener('click', handleStockGet);
})










// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// const fetchFundamentalData = (ticker) => {
// 	return fetch(`https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=${ticker}&api_key=-JuketAYn-cNXiDioYKb`)
// 		.then( (response) => {
// 			return response.json();
// 		});
// }	// ERROR blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.



// const fetchFundamentalData = (ticker) => {
// 	return fetch(`https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=${ticker}&api_key=-JuketAYn-cNXiDioYKb`,
// 		{ cors}
// 	)
// 		.then( (response) => {
// 			return response.json();
// 		});
// }	



// postData(`https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=${ticker}&api_key=-JuketAYn-cNXiDioYKb`)
// 	.then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
// 	.catch(error => console.error(error));














// payload = {
// 	"datatable": {
// 		"data": [
// 			[
// 				"AAPL",
// 				"MRY",
// 				"2018-12-31",
// 				"2018-09-29",
// 				"2018-09-29",
// 				"2019-07-31",
// 				-3454000000,
// 				365725000000,
// 				372304500000,
// 				131339000000,
// 				234386000000,
// 				0.713,
// 				22.315,
// 				-13313000000,
// 				25913000000,
// 				25913000000,
// 				163756000000,
// 				59531000000,
// 				1.133,
// 				2.413,
// 				114483000000,
// 				20748000000,
// 				93735000000,
// 				114483000000,
// 				5966000000,
// 				10903000000,
// 				0,
// 				0.012,
// 				2.72,
// 				72903000000,
// 				83806000000,
// 				0.316,
// 				83806000000,
// 				72903000000,
// 				72903000000,
// 				12.01,
// 				11.91,
// 				12.01,
// 				107147000000,
// 				122293250000,
// 				107147000000,
// 				1172936495240,
// 				16,
// 				13.996,
// 				64121000000,
// 				12.94,
// 				1.0,
// 				101839000000,
// 				0.383,
// 				0,
// 				0,
// 				338366000000,
// 				353621000000,
// 				3956000000,
// 				211187000000,
// 				40388000000,
// 				170799000000,
// 				258578000000,
// 				115929000000,
// 				142649000000,
// 				1090307495240,
// 				5624000000,
// 				-721000000,
// 				-72069000000,
// 				432000000,
// 				-13712000000,
// 				-87876000000,
// 				16066000000,
// 				30845000000,
// 				77434000000,
// 				0,
// 				59531000000,
// 				59531000000,
// 				59531000000,
// 				0,
// 				0,
// 				0.224,
// 				30941000000,
// 				70898000000,
// 				55888000000,
// 				0.226,
// 				10.176,
// 				18.315,
// 				18.796,
// 				41304000000,
// 				0,
// 				225.74,
// 				4.105,
// 				4.212,
// 				48995000000,
// 				70400000000,
// 				265595000000,
// 				265595000000,
// 				14236000000,
// 				0.16,
// 				0.487,
// 				0.206,
// 				0.274,
// 				5340000000,
// 				16705000000,
// 				1.0,
// 				4829926000,
// 				4955377000,
// 				5000109000,
// 				53.597,
// 				365725000000,
// 				0,
// 				13372000000,
// 				0,
// 				76.168,
// 				15410000000
// 			],
// 			[
// 				"AAPL",
// 				"MRY",
// 				"2017-12-31",
// 				"2017-09-30",
// 				"2017-09-30",
// 				"2019-07-31",
// 				-150000000,
// 				375319000000,
// 				346541250000,
// 				128645000000,
// 				246674000000,
// 				0.661,
// 				26.031,
// 				-12451000000,
// 				20289000000,
// 				20289000000,
// 				141048000000,
// 				48351000000,
// 				1.276,
// 				1.8,
// 				115680000000,
// 				18473000000,
// 				97207000000,
// 				115680000000,
// 				10384000000,
// 				10157000000,
// 				0,
// 				0.016,
// 				2.4,
// 				64089000000,
// 				74246000000,
// 				0.324,
// 				74246000000,
// 				64089000000,
// 				64089000000,
// 				9.27,
// 				9.21,
// 				9.27,
// 				134047000000,
// 				133236000000,
// 				134047000000,
// 				885832939360,
// 				14,
// 				11.931,
// 				51774000000,
// 				9.924,
// 				1.0,
// 				88186000000,
// 				0.385,
// 				0,
// 				0,
// 				369896000000,
// 				340453250000,
// 				4855000000,
// 				248606000000,
// 				53892000000,
// 				194714000000,
// 				241272000000,
// 				100814000000,
// 				140458000000,
// 				796064939360,
// 				-195000000,
// 				-329000000,
// 				-32345000000,
// 				29014000000,
// 				-12769000000,
// 				-17974000000,
// 				-46446000000,
// 				-33542000000,
// 				64225000000,
// 				0,
// 				48351000000,
// 				48351000000,
// 				48351000000,
// 				0,
// 				0,
// 				0.211,
// 				26842000000,
// 				61344000000,
// 				44242000000,
// 				0.259,
// 				5.939,
// 				16.464,
// 				16.626,
// 				33783000000,
// 				0,
// 				154.12,
// 				3.473,
// 				3.508,
// 				35673000000,
// 				98330000000,
// 				229234000000,
// 				229234000000,
// 				11581000000,
// 				0.14,
// 				0.363,
// 				0.188,
// 				0.28,
// 				4840000000,
// 				15261000000,
// 				1.0,
// 				5165228000,
// 				5217242000,
// 				5251692000,
// 				43.938,
// 				375319000000,
// 				0,
// 				15738000000,
// 				0,
// 				72.886,
// 				27831000000
// 			],
// 			[
// 				"AAPL",
// 				"MRY",
// 				"2016-12-31",
// 				"2016-09-24",
// 				"2016-09-24",
// 				"2019-07-31",
// 				634000000,
// 				321686000000,
// 				306462250000,
// 				106869000000,
// 				214817000000,
// 				0.704,
// 				23.896,
// 				-12734000000,
// 				20484000000,
// 				20484000000,
// 				131376000000,
// 				45687000000,
// 				1.353,
// 				1.508,
// 				87032000000,
// 				11605000000,
// 				75427000000,
// 				87032000000,
// 				11010000000,
// 				10505000000,
// 				0,
// 				0.019,
// 				2.18,
// 				61372000000,
// 				71877000000,
// 				0.333,
// 				71877000000,
// 				61372000000,
// 				61372000000,
// 				8.35,
// 				8.31,
// 				8.35,
// 				128249000000,
// 				128378500000,
// 				128249000000,
// 				674029410530,
// 				11,
// 				9.378,
// 				53497000000,
// 				9.779,
// 				1.0,
// 				84263000000,
// 				0.391,
// 				8620000000,
// 				0,
// 				300608000000,
// 				283318250000,
// 				2132000000,
// 				217101000000,
// 				46671000000,
// 				170430000000,
// 				193437000000,
// 				79006000000,
// 				114431000000,
// 				607331410530,
// 				-636000000,
// 				-297000000,
// 				-29227000000,
// 				22057000000,
// 				-12150000000,
// 				-20890000000,
// 				-45977000000,
// 				-32022000000,
// 				66231000000,
// 				0,
// 				45687000000,
// 				45687000000,
// 				45687000000,
// 				0,
// 				0,
// 				0.212,
// 				24239000000,
// 				60024000000,
// 				37294000000,
// 				0.261,
// 				4.736,
// 				13.293,
// 				13.498,
// 				27010000000,
// 				0,
// 				112.71,
// 				2.816,
// 				2.859,
// 				29299000000,
// 				96364000000,
// 				215639000000,
// 				215639000000,
// 				10045000000,
// 				0.149,
// 				0.356,
// 				0.217,
// 				0.285,
// 				4210000000,
// 				14194000000,
// 				1.0,
// 				5388443000,
// 				5470820000,
// 				5500281000,
// 				39.416,
// 				313066000000,
// 				0,
// 				15685000000,
// 				0,
// 				58.333,
// 				27863000000
// 			],
// 			[
// 				"AAPL",
// 				"MRY",
// 				"2015-12-31",
// 				"2015-09-26",
// 				"2015-09-26",
// 				"2019-07-31",
// 				-345000000,
// 				290345000000,
// 				271646000000,
// 				89378000000,
// 				200967000000,
// 				0.86,
// 				21.136,
// 				-11488000000,
// 				21120000000,
// 				21120000000,
// 				140089000000,
// 				53394000000,
// 				1.109,
// 				1.433,
// 				64328000000,
// 				10999000000,
// 				53329000000,
// 				64328000000,
// 				12564000000,
// 				11257000000,
// 				0,
// 				0.017,
// 				1.98,
// 				72515000000,
// 				83772000000,
// 				0.358,
// 				83772000000,
// 				72515000000,
// 				72515000000,
// 				9.28,
// 				9.22,
// 				9.28,
// 				119355000000,
// 				124341500000,
// 				119355000000,
// 				693258240620,
// 				10,
// 				8.276,
// 				69778000000,
// 				12.128,
// 				1.0,
// 				93626000000,
// 				0.401,
// 				9009000000,
// 				0,
// 				243934000000,
// 				225340000000,
// 				2349000000,
// 				184546000000,
// 				20481000000,
// 				164065000000,
// 				170990000000,
// 				80610000000,
// 				90380000000,
// 				654159240620,
// 				7276000000,
// 				-343000000,
// 				-34710000000,
// 				29305000000,
// 				-11561000000,
// 				-17716000000,
// 				-56274000000,
// 				-44417000000,
// 				81266000000,
// 				0,
// 				53394000000,
// 				53394000000,
// 				53394000000,
// 				0,
// 				0,
// 				0.228,
// 				22396000000,
// 				71230000000,
// 				35490000000,
// 				0.213,
// 				5.481,
// 				12.252,
// 				12.361,
// 				22471000000,
// 				0,
// 				114.71,
// 				2.799,
// 				2.824,
// 				30343000000,
// 				92284000000,
// 				233715000000,
// 				233715000000,
// 				8067000000,
// 				0.197,
// 				0.429,
// 				0.322,
// 				0.31,
// 				3586000000,
// 				14329000000,
// 				1.0,
// 				5702722000,
// 				5753421000,
// 				5793069000,
// 				40.622,
// 				281336000000,
// 				0,
// 				19121000000,
// 				0,
// 				49.821,
// 				8768000000
// 			],
// 			[
// 				"AAPL",
// 				"MRY",
// 				"2014-12-31",
// 				"2014-09-27",
// 				"2014-09-27",
// 				"2019-07-31",
// 				1082000000,
// 				231839000000,
// 				221383000000,
// 				68531000000,
// 				163308000000,
// 				0.826,
// 				18.798,
// 				-9813000000,
// 				13844000000,
// 				13844000000,
// 				112258000000,
// 				39510000000,
// 				1.08,
// 				1.078,
// 				35295000000,
// 				6308000000,
// 				28987000000,
// 				35295000000,
// 				11522000000,
// 				7946000000,
// 				0,
// 				0.018,
// 				1.811,
// 				53483000000,
// 				61429000000,
// 				0.336,
// 				61429000000,
// 				53483000000,
// 				53483000000,
// 				6.49,
// 				6.45,
// 				6.49,
// 				111547000000,
// 				120587500000,
// 				111547000000,
// 				621340600250,
// 				12,
// 				10.115,
// 				49900000000,
// 				8.2,
// 				1.0,
// 				70537000000,
// 				0.386,
// 				8758000000,
// 				0,
// 				181084000000,
// 				173076000000,
// 				2111000000,
// 				141395000000,
// 				11233000000,
// 				130162000000,
// 				120292000000,
// 				63448000000,
// 				56844000000,
// 				603277600250,
// 				-415000000,
// 				-3765000000,
// 				-44270000000,
// 				18266000000,
// 				-11126000000,
// 				-37549000000,
// 				-22579000000,
// 				-9027000000,
// 				59713000000,
// 				0,
// 				39510000000,
// 				39510000000,
// 				39510000000,
// 				0,
// 				0,
// 				0.216,
// 				18034000000,
// 				52503000000,
// 				30196000000,
// 				0.279,
// 				5.408,
// 				15.269,
// 				15.524,
// 				20624000000,
// 				0,
// 				100.75,
// 				3.3,
// 				3.354,
// 				27219000000,
// 				87152000000,
// 				182795000000,
// 				182795000000,
// 				6041000000,
// 				0.178,
// 				0.328,
// 				0.309,
// 				0.293,
// 				2863000000,
// 				11993000000,
// 				1.0,
// 				5987867000,
// 				6085572000,
// 				6122663000,
// 				30.037,
// 				223081000000,
// 				4318000000,
// 				13973000000,
// 				0,
// 				37.595,
// 				5083000000
// 			],
// 			[
// 				"AAPL",
// 				"MRY",
// 				"2013-12-31",
// 				"2013-09-28",
// 				"2013-09-28",
// 				"2019-07-31",
// 				-471000000,
// 				207000000000,
// 				199421750000,
// 				73286000000,
// 				133714000000,
// 				0.857,
// 				19.521,
// 				-9076000000,
// 				14259000000,
// 				14259000000,
// 				106606000000,
// 				37037000000,
// 				1.679,
// 				0.675,
// 				16960000000,
// 				0,
// 				16960000000,
// 				16960000000,
// 				10060000000,
// 				6757000000,
// 				0,
// 				0.024,
// 				1.629,
// 				50155000000,
// 				56912000000,
// 				0.333,
// 				56912000000,
// 				50155000000,
// 				50155000000,
// 				5.72,
// 				5.68,
// 				5.72,
// 				123549000000,
// 				127434750000,
// 				123549000000,
// 				444286926750,
// 				9,
// 				7.807,
// 				44590000000,
// 				6.884,
// 				1.0,
// 				64304000000,
// 				0.376,
// 				5756000000,
// 				0,
// 				160287000000,
// 				148129250000,
// 				1764000000,
// 				132502000000,
// 				26287000000,
// 				106215000000,
// 				83451000000,
// 				43658000000,
// 				39793000000,
// 				438576926750,
// 				3513000000,
// 				-496000000,
// 				-22330000000,
// 				16896000000,
// 				-10564000000,
// 				-16379000000,
// 				-33774000000,
// 				-24042000000,
// 				53666000000,
// 				0,
// 				37037000000,
// 				37037000000,
// 				37037000000,
// 				0,
// 				0,
// 				0.217,
// 				15305000000,
// 				48999000000,
// 				22367000000,
// 				0.285,
// 				3.55,
// 				11.842,
// 				12.057,
// 				16597000000,
// 				0,
// 				68.964,
// 				2.566,
// 				2.614,
// 				20641000000,
// 				104256000000,
// 				170910000000,
// 				170910000000,
// 				4475000000,
// 				0.186,
// 				0.291,
// 				0.339,
// 				0.293,
// 				2253000000,
// 				10830000000,
// 				1.0,
// 				6359479000,
// 				6477320000,
// 				6521634000,
// 				26.386,
// 				201244000000,
// 				3453000000,
// 				13118000000,
// 				0,
// 				31.796,
// 				29628000000
// 			],
// 			[
// 				"AAPL",
// 				"MRY",
// 				"2012-12-31",
// 				"2012-09-29",
// 				"2012-09-29",
// 				"2019-07-31",
// 				499000000,
// 				176064000000,
// 				157143750000,
// 				57653000000,
// 				118411000000,
// 				0.996,
// 				17.998,
// 				-9402000000,
// 				10746000000,
// 				10746000000,
// 				87846000000,
// 				41733000000,
// 				1.496,
// 				0.489,
// 				0,
// 				0,
// 				0,
// 				0,
// 				8601000000,
// 				3277000000,
// 				0,
// 				0.004,
// 				0.379,
// 				55763000000,
// 				59040000000,
// 				0.377,
// 				59040000000,
// 				55763000000,
// 				55763000000,
// 				6.38,
// 				6.31,
// 				6.38,
// 				118210000000,
// 				105627000000,
// 				118210000000,
// 				617403229630,
// 				11,
// 				10.457,
// 				41454000000,
// 				6.335,
// 				1.0,
// 				68662000000,
// 				0.439,
// 				5359000000,
// 				0,
// 				121417000000,
// 				107818750000,
// 				791000000,
// 				110505000000,
// 				18383000000,
// 				92122000000,
// 				57854000000,
// 				38542000000,
// 				19312000000,
// 				625348229630,
// 				931000000,
// 				-350000000,
// 				665000000,
// 				0,
// 				-2488000000,
// 				-1698000000,
// 				-48227000000,
// 				-38427000000,
// 				50856000000,
// 				0,
// 				41733000000,
// 				41733000000,
// 				41733000000,
// 				0,
// 				0,
// 				0.267,
// 				13421000000,
// 				55241000000,
// 				21175000000,
// 				0.059,
// 				5.29,
// 				14.985,
// 				14.937,
// 				15452000000,
// 				0,
// 				95.301,
// 				3.996,
// 				3.985,
// 				18692000000,
// 				101289000000,
// 				156508000000,
// 				156508000000,
// 				3381000000,
// 				0.266,
// 				0.395,
// 				0.517,
// 				0.356,
// 				1740000000,
// 				10040000000,
// 				1.0,
// 				6561842000,
// 				6543726000,
// 				6617483000,
// 				23.917,
// 				170705000000,
// 				2583000000,
// 				14030000000,
// 				0,
// 				25.991,
// 				19111000000
// 			],
// 			[
// 				"AAPL",
// 				"MRY",
// 				"2011-12-31",
// 				"2011-09-24",
// 				"2011-09-24",
// 				"2019-07-31",
// 				443000000,
// 				116371000000,
// 				101193750000,
// 				44988000000,
// 				71383000000,
// 				1.07,
// 				11.791,
// 				-7452000000,
// 				9815000000,
// 				9815000000,
// 				64431000000,
// 				25922000000,
// 				1.608,
// 				0.519,
// 				0,
// 				0,
// 				0,
// 				0,
// 				5777000000,
// 				1814000000,
// 				0,
// 				0.0,
// 				0.0,
// 				34205000000,
// 				36019000000,
// 				0.333,
// 				36019000000,
// 				34205000000,
// 				34205000000,
// 				4.007,
// 				3.954,
// 				4.007,
// 				76615000000,
// 				65525250000,
// 				76615000000,
// 				362731845210,
// 				11,
// 				10.071,
// 				30077000000,
// 				4.649,
// 				1.0,
// 				43818000000,
// 				0.405,
// 				4432000000,
// 				0,
// 				74154000000,
// 				61088250000,
// 				776000000,
// 				71755000000,
// 				16137000000,
// 				55618000000,
// 				39756000000,
// 				27970000000,
// 				11786000000,
// 				374822845210,
// 				-1446000000,
// 				-244000000,
// 				831000000,
// 				0,
// 				0,
// 				1444000000,
// 				-40419000000,
// 				-32464000000,
// 				37529000000,
// 				0,
// 				25922000000,
// 				25922000000,
// 				25922000000,
// 				0,
// 				0,
// 				0.239,
// 				10028000000,
// 				33790000000,
// 				14632000000,
// 				0.0,
// 				4.892,
// 				14.46,
// 				14.414,
// 				7777000000,
// 				0,
// 				57.757,
// 				3.463,
// 				3.452,
// 				11717000000,
// 				62841000000,
// 				108249000000,
// 				108249000000,
// 				2429000000,
// 				0.256,
// 				0.396,
// 				0.56,
// 				0.316,
// 				1168000000,
// 				7599000000,
// 				1.0,
// 				6489636202,
// 				6469806000,
// 				6556515000,
// 				16.731,
// 				111939000000,
// 				2014000000,
// 				8283000000,
// 				0,
// 				17.227,
// 				17018000000
// 			]
// 		],
// 			"columns": [
// 				{
// 					"name": "ticker",
// 					"type": "String"
// 				},
// 				{
// 					"name": "dimension",
// 					"type": "String"
// 				},
// 				{
// 					"name": "calendardate",
// 					"type": "Date"
// 				},
// 				{
// 					"name": "datekey",
// 					"type": "Date"
// 				},
// 				{
// 					"name": "reportperiod",
// 					"type": "Date"
// 				},
// 				{
// 					"name": "lastupdated",
// 					"type": "Date"
// 				},
// 				{
// 					"name": "accoci",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "assets",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "assetsavg",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "assetsc",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "assetsnc",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "assetturnover",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "bvps",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "capex",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "cashneq",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "cashnequsd",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "cor",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "consolinc",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "currentratio",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "de",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "debt",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "debtc",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "debtnc",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "debtusd",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "deferredrev",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "depamor",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "deposits",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "divyield",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "dps",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "ebit",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ebitda",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ebitdamargin",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "ebitdausd",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ebitusd",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ebt",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "eps",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "epsdil",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "epsusd",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "equity",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "equityavg",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "equityusd",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ev",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "evebit",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "evebitda",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "fcf",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "fcfps",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "fxusd",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "gp",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "grossmargin",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "intangibles",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "intexp",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "invcap",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "invcapavg",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "inventory",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "investments",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "investmentsc",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "investmentsnc",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "liabilities",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "liabilitiesc",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "liabilitiesnc",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "marketcap",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ncf",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ncfbus",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ncfcommon",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ncfdebt",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ncfdiv",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ncff",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ncfi",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ncfinv",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ncfo",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "ncfx",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "netinc",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "netinccmn",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "netinccmnusd",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "netincdis",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "netincnci",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "netmargin",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "opex",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "opinc",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "payables",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "payoutratio",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "pb",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "pe",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "pe1",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "ppnenet",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "prefdivis",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "price",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "ps",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "ps1",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "receivables",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "retearn",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "revenue",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "revenueusd",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "rnd",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "roa",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "roe",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "roic",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "ros",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "sbcomp",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "sgna",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "sharefactor",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "sharesbas",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "shareswa",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "shareswadil",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "sps",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "tangibles",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "taxassets",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "taxexp",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "taxliabilities",
// 					"type": "Integer"
// 				},
// 				{
// 					"name": "tbvps",
// 					"type": "BigDecimal(15,3)"
// 				},
// 				{
// 					"name": "workingcapital",
// 					"type": "Integer"
// 				}
// 			]
// 	},
// 	"meta": {
// 		"next_cursor_id": null
// 	}
// };
