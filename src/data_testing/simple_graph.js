import * as d3 from 'd3';

// from tutorial: http://duspviz.mit.edu/d3-workshop/intro-to-d3/
function createSimpleGraph() {
    let rawData = [10, 20, 30, 40, 50, 60];
    // var rawData = { time: 40, money: 90, food: 30, sleep: 60 };	// rawData MUST BE ARRAY NOT OBJ
    // var rawData = [{ AAPL: { 2018: { price: 100 } } }, { MSFT: { 2018: { price: 50 } } } ];

    let width = 150;			// width of svg ele
    let height = 175;

    let arrLength = rawData.length;
    let maxVal = d3.max(rawData, (d) => {		// 60
        return +d;				// ? why +? get max val of data set
    });
    let x_axisLength = 100;
    let y_axisLength = 100;


    // Select the <body> ele and append an svg ele to it with height and width
    // Create SVG element
    let svg = d3.select("body")	// .append creates a new ele of type 'svg'
        .append('svg')			// ? creates a new ele as a child of each ele in the current selection?
        .attr('width', width)
        .attr('height', height)

    // d3.selectAll("rect")		// select all <rect/> eles on page
    // 	.data(rawData)			// bind rawData array numbers to d3 elements
    // 	.attr("height", function (d) {
    // 		// debugger
    // 		return d; 			// d referes to data nums in array (40 on first iteration)
    // 	});

    let yScale = d3.scaleLinear()	//=> ? returns a function?
        .domain([0, maxVal])
        .range([0, y_axisLength]);
    // debugger


    // create custom tooltip 
    let tooltip = d3.select('body')
        .append('div')
        .style('position', 'absolute')
        .style('z-index', '10')
        .style('visibility', 'hidden')


    // Create rectangle eles
    svg.selectAll('rect')		// select what doesn't exist (what you want to operate on even if it doesn't exist)
        .data(rawData)			// bind data to rect eles
        .enter()				// used to create 'placeholder' elements bec. no rects exist
        .append('rect')			// append the rect ele to each of these placeholder elements 
        // .attr('x', 30)		// iteratively set each top left x of rect to 30px away from origin (origin is top left!!)
        // .attr('x', (_d, i)=> {	// d == data point in enumerable array, i == index
        // 	return i*25 + 30;	// space each rect 25px apart, offset all rects by + 30 (margin)
        // })						// i == 0 on first iteration, 1, 2...
        // .attr('y', 0)		// upside down bars!!
        // .attr('y', 30)		// set y 30px below origin (top left)
        // .attr('y', (d)=> {		// flip bars!!
        // 	return height - d;	// set y coordinate for each bar to height - data value
        // })
        // .attr('width', 20)
        // // .attr('height', 100)
        // .attr('height', (d)=> {
        // 	return d;				// iteratively set height of rect to data val
        // })
        .attr('x', (_d, i) => {
            return i * (x_axisLength / arrLength) + 30;	// set x coordinate of rect ele 
        })
        .attr('y', (d) => {
            return height - yScale(d);					// set y coordinate of rect ele
        })
        .attr('width', (x_axisLength / arrLength) - 1)	// set bar width
        .attr('height', (d) => {
            return yScale(d);							// set height
        })
        .attr('fill', 'steelblue')	// can use hex codes for color also
        .on('mouseover', (d)=> {
            return tooltip.style('visibility', 'visible').text('price: ' + d);
        })
        .on('mousemove', (d)=> {
            return tooltip.style('top', 
                (d3.event.pageY - 10) + 'px').style('left', (d3.event.pageX + 10) + 'px').text('price: ' + d);
        })
        .on('mouseout', (d)=> {
            return tooltip.style('visibility', 'hidden');
        })


    // create y-axis
    svg.append('line')				// create new line
        .attr('x1', 30)				// start x coordinate
        .attr('y1', 75)				// start y coordinate
        .attr('x2', 30)				// end x coordinate
        .attr('y2', 175)			// end y coordinate
        .attr('stroke-width', 2)
        .attr('stroke', 'black');


    // x-axis
    svg.append('line')
        .attr('x1', 30)
        .attr('y1', 175)
        .attr('x2', 130)
        .attr('y2', 175)
        .attr('stroke-width', 2)
        .attr('stroke', 'black');

    svg.append('text')
        .attr('class', 'y label')
        .attr('text-anchor', 'end')
        .text('title here')
        .attr('transform', 'translate(20, 20) rotate(-90)');

}

export default createSimpleGraph;