// from tutorial: http://bl.ocks.org/brattonc/b1abb535227b2f722b51
// https://gist.github.com/brattonc/b1abb535227b2f722b51




/*!
 * @license Open source under BSD 2-clause (http://choosealicense.com/licenses/bsd-2-clause/)
 * Copyright (c) 2015, Curtis Bratton
 * All rights reserved.
 */
export const rectangularAreaChartDefaultSettings = () => {
    // debugger
    return {
        expandFromLeft: true, // Areas expand from left to right.
        expandFromTop: false, // Areas expand from top to bottom.
        animate: true, // Controls animation when chart loads.
        animateDuration: 2000, // The duration of the animation when the chart loads.
        animateDelay: 0, // The delay between the chart loading and the actual load animation starting.
        animateDelayBetweenBoxes: 200, // Adds a delay between box expansions during the load animation.
        colorsScale: d3.scale.category20b(), // The color scale to use for the chart areas
        // colorsScale: ["#9e0142","#a00343","#a20643","#a40844","#a70b44","#a90d45","#ab0f45","#ad1245","#af1446","#b11646","#b31947","#b51b47","#b71d48","#ba2048","#bc2248","#be2449","#c02749","#c12949","#c32b4a","#c52d4a","#c7304a","#c9324a","#cb344b","#cd364b","#ce384b","#d03b4b","#d23d4b","#d33f4b","#d5414b","#d7434b","#d8454b","#da474a","#db494a","#dd4b4a","#de4d4a","#df4f4a","#e1514a","#e2534a","#e35549","#e45749","#e65949","#e75b49","#e85d49","#e95f49","#ea6149","#eb6349","#ec6549","#ed6749","#ee6a49","#ef6c49","#f06e4a","#f0704a","#f1724a","#f2744b","#f3774b","#f3794c","#f47b4d","#f47e4d","#f5804e","#f6824f","#f68550","#f78750","#f78951","#f88c52","#f88e53","#f89154","#f99356","#f99557","#f99858","#fa9a59","#fa9c5a","#fa9f5c","#fba15d","#fba35e","#fba660","#fba861","#fcaa62","#fcad64","#fcaf65","#fcb167","#fcb368","#fcb56a","#fdb86b","#fdba6d","#fdbc6e","#fdbe70","#fdc071","#fdc273","#fdc474","#fdc676","#fdc878","#fdca79","#fecc7b","#fecd7d","#fecf7e","#fed180","#fed382","#fed584","#fed685","#fed887","#feda89","#fedb8b","#fedd8d","#fede8f","#fee090","#fee192","#fee394","#fee496","#fee698","#fee79a","#fee89b","#feea9d","#feeb9f","#feeca1","#feeda2","#feefa4","#fef0a5","#fef1a7","#fef2a8","#fdf3a9","#fdf3aa","#fdf4ab","#fdf5ac","#fcf6ad","#fcf6ae","#fcf7af","#fbf7af","#fbf8b0","#faf8b0","#faf9b0","#f9f9b0","#f9f9b0","#f8f9b0","#f7faaf","#f7faaf","#f6faae","#f5faae","#f4f9ad","#f3f9ac","#f2f9ac","#f2f9ab","#f0f9aa","#eff8a9","#eef8a8","#edf8a7","#ecf7a7","#ebf7a6","#e9f6a5","#e8f6a4","#e7f5a3","#e5f5a2","#e4f4a2","#e2f3a1","#e0f3a1","#dff2a0","#ddf1a0","#dbf19f","#d9f09f","#d7ef9f","#d6ee9f","#d4ee9f","#d2ed9e","#d0ec9e","#cdeb9f","#cbea9f","#c9e99f","#c7e89f","#c5e89f","#c3e79f","#c0e6a0","#bee5a0","#bce4a0","#b9e3a0","#b7e2a1","#b4e1a1","#b2e0a1","#b0dfa1","#addea2","#abdda2","#a8dca2","#a6dba3","#a3daa3","#a0d9a3","#9ed8a3","#9bd7a3","#99d6a4","#96d5a4","#94d4a4","#91d3a4","#8ed1a4","#8cd0a4","#89cfa5","#87cea5","#84cda5","#82cba5","#7fcaa6","#7dc9a6","#7ac7a6","#77c6a6","#75c5a7","#73c3a7","#70c2a8","#6ec0a8","#6bbea8","#69bda9","#66bba9","#64b9aa","#62b8aa","#60b6ab","#5db4ac","#5bb2ac","#59b0ad","#57aeae","#55acae","#53aaaf","#51a8af","#50a6b0","#4ea4b1","#4ca2b1","#4ba0b2","#499db2","#489bb3","#4799b3","#4697b3","#4595b4","#4492b4","#4390b4","#438eb4","#428cb5","#4289b5","#4287b4","#4285b4","#4283b4","#4280b4","#437eb3","#437cb3","#447ab3","#4577b2","#4575b1","#4673b1","#4771b0","#486eaf","#4a6caf","#4b6aae","#4c68ad","#4e65ac","#4f63ab","#5161aa","#525fa9","#545ca8","#555aa7","#5758a6","#5956a5","#5b53a4","#5c51a3","#5e4fa2"], // The color scale to use for the chart areas.
        textColorScale: d3.scale.ordinal().range(["#fff"]), // The color scale to use for the chart text.
        textPadding: { top: 0, bottom: 0, left: 3, right: 3 }, // Category text padding.
        maxValue: -1, // The charts maximum value. If this value is greater than the largest value displayed on the chart, this will cause the largest chart value to take up less area than the maximum height and width of the chart.
        labelAlignDiagonal: false, // Aligns the category label text to the charts diagonal.
        valueTextAlignDiagonal: false, // Aligns the value text to the charts diagonal.
        displayValueText: false, // Display the value text.
        valueTextPadding: { top: 0, bottom: 0, left: 3, right: 3 }, // Value text padding.
        valueTextCountUp: true, // Causes the value text to count up from 0 during the chart load animation.
        displayLabelText: true,     // NEW ADDITION
    };
}

/*
 * Data must be a an array of json objects formatted:
 * [{value: 123, label: "Category 1", valuePrefix: "Some Prefix ", valueSuffix: " things"}, {value: 23, label: "Category 2", valuePrefix: "Some Prefix ", valueSuffix: " things"}]
 * value and label are required.
 * valuePrefix and valueSuffix are optional.
 */
export const loadRectangularAreaChart = (elementId, data, settings) => {
    // debugger
    // ex. if AAPL, duPontData == { leverage: 3.4133013523477094, assetTurnover: 0.7262150522933899, operatingMargin: 0.26694026619477024, interestBurden: 1.0282800643177523, taxBurden: 0.8165781929413056 }
    // Tax Burden = 19.16       Interest Burden = % -2.12       
    // EBIT Margin = % -2.13    Asset Turnover = % 40.37 
    // Leverage = % 44.71 


    // each element represents the extent to which (out of all 5 ratios) that ratio contributed to the change in ROE
    // let rawData = [ 19.16, -2.12, -2.13, 40.37, 44.71 ];         // negative rectangle value not valid??!
    let rawData = [19.16, 2.12, 2.13, 40.37, 44.71];              // for now make postiive
    // var rawData = { time: 40, money: 90, food: 30, sleep: 60 };	// rawData MUST BE ARRAY NOT OBJ



    // debugger
    var dataSorter = function (a, b) {
        return a.value - b.value;
    };

    var valueFormatter = function (d, overrideValue) {
        var valueText = d.valuePrefix ? d.valuePrefix : "";
        valueText += overrideValue != null ? overrideValue : d.value;
        valueText += d.valueSuffix ? d.valueSuffix : "";
        return valueText;
    };

    if (settings == null) settings = rectangularAreaChartDefaultSettings();
    // debugger
    var svg = d3.select("#" + elementId);

    // Some dummy text is needed so that we can get the text height before attaching text to any paths.
    var dummyText = svg.append("text")
        .attr("class", "rectangularAreaChartText")
        .text("N");
    // debugger
    // debugger
    var textHeight = dummyText.node().getBBox().height;

    // Sort the data so that boxes are drawn in the right order.
    data.sort(dataSorter);
    data.reverse();
    var dataMax = Math.max(data[0].value, settings.maxValue);

    var width = parseInt(svg.style("width"));
    var height = parseInt(svg.style("height"));

    // Scales for the height and width of the boxes.
    var sizeScaleWidth = d3.scale.sqrt().range([0, width]).domain([0, dataMax]);
    var sizeScaleHeight = d3.scale.sqrt().range([0, height]).domain([0, dataMax]);

    var line = d3.svg.line()
        .x(function (d) { return d.x; })
        .y(function (d) { return d.y; });

    // Each box is in it's own group and the animation is done by moving the group.
    var boxGroup = svg.selectAll("g")
        .data(data).enter()
        .append("g")
        .attr("transform", function (d) {
            if (settings.animate) {
                var x = settings.expandFromLeft ? sizeScaleWidth(d.value) * -1 : width;
                var y = settings.expandFromTop ? sizeScaleHeight(d.value) * -1 : height;
                return "translate(" + x + "," + y + ")";
            } else {
                var x = settings.expandFromLeft ? 0 : width - sizeScaleWidth(d.value);
                var y = settings.expandFromTop ? 0 : height - sizeScaleHeight(d.value);
                return "translate(" + x + "," + y + ")";
            }
        })
        // A clip path is necessary to cut off text so that it doesn't get drawn outside the box during the loading animation.
        .attr("clip-path", function (d, i) { return "url(#" + elementId + "ClipPath" + i + ")"; });

    // The box clip area.
    boxGroup.append("defs")
        .append("clipPath")
        .attr("id", function (d, i) { return elementId + "ClipPath" + i; })
        .append("rect")
        .attr("width", function (d) { return sizeScaleWidth(d.value); })
        .attr("height", function (d) { return sizeScaleHeight(d.value); });

    // The box.
    boxGroup.append("rect")
        .attr("width", function (d) { return sizeScaleWidth(d.value); })
        .attr("height", function (d) { return sizeScaleHeight(d.value); })
        .style("fill", function (d) { return settings.colorsScale(d.label); })
        .append("title")
        .text(function (d) { return d.label + " (" + valueFormatter(d) + ")"; });

    // Animate the box.
    if (settings.animate) {
        boxGroup.transition()
            .delay(function (d, i) { return settings.animateDelay + (settings.animateDelayBetweenBoxes * i); })
            .duration(settings.animateDuration)
            .attr("transform", function (d) {
                var x = settings.expandFromLeft ? 0 : width - sizeScaleWidth(d.value);
                var y = settings.expandFromTop ? 0 : height - sizeScaleHeight(d.value);
                return "translate(" + x + "," + y + ")"
            });
    }

    // Add a path to attach the category label text to.
    boxGroup.append("path")
        .attr("id", function (d, i) { return elementId + "HozPath" + i; })
        .attr("d", function (d, i) {
            var textX1, textX2, textY;
            if (settings.labelAlignDiagonal) {
                textX1 = settings.textPadding.left;
                textX2 = sizeScaleWidth(d.value) - settings.textPadding.right;
            } else {
                if (settings.expandFromLeft) {
                    textX1 = settings.textPadding.left;
                    textX2 = sizeScaleWidth(d.value) * 2 + settings.textPadding.left;
                } else {
                    textX1 = sizeScaleWidth(d.value) * -1 - settings.textPadding.right;
                    textX2 = sizeScaleWidth(d.value) - settings.textPadding.right;
                }
            }
            textY = settings.expandFromTop ? sizeScaleHeight(d.value) - settings.textPadding.bottom - textHeight / 4 : textHeight + settings.textPadding.top;
            return line([{ x: textX1, y: textY }, { x: textX2, y: textY }]);
        });

    // Set up the label text location.
    var labelStartOffset, labelEndOffset, labelTextAnchor;
    if (settings.labelAlignDiagonal) {
        if (settings.expandFromLeft) {
            labelStartOffset = "100%";
            labelTextAnchor = "end";
        } else {
            labelStartOffset = "0%";
            labelTextAnchor = "start";
        }
    } else {
        if (settings.expandFromLeft) {
            labelStartOffset = "50%";
            labelEndOffset = "0%";
            labelTextAnchor = "start";
        } else {
            labelStartOffset = "50%";
            labelEndOffset = "100%";
            labelTextAnchor = "end";
        }
    }
    if (settings.animate == false && settings.labelAlignDiagonal == false) {
        labelStartOffset = labelEndOffset;
    }

    
    if (settings.displayLabelText) {                                            // Turn ON for bottom right box
        // config4.displayLabelText = true;                                           
        // config4.displayValueText = true;       
    }

    // Add the category label text.
    var labelPath = boxGroup.append("text")
        .attr("class", "rectangularAreaChartText")
        .style("fill", function (d) {
            // debugger 
            // d        => {value: "40.37", label: "Asset Turnover", valueSuffix: " %"}
            // d.label  => "Leverage"                   //=> for 1st iteration
            // settings.textColorScale(d.label)         //=> 'fff'    hex color to fill square
            return settings.textColorScale(d.label);
        })
        .attr("id", function (d, i) { return elementId + "LabelText" + i; })
        .append("textPath")
        .attr("startOffset", labelStartOffset)
        .style("text-anchor", labelTextAnchor)
        .attr("xlink:href", function (d, i) { return "#" + elementId + "HozPath" + i; })
        .text(function (d) { 
            if (settings.displayValueText) {
                return d.label; 
            }
        });

    if (settings.animate && settings.labelAlignDiagonal == false) {
        labelPath.transition()
            .delay(function (d, i) { return settings.animateDelay + (settings.animateDelayBetweenBoxes * i); })
            .duration(settings.animateDuration)
            .attr("startOffset", labelEndOffset);
    }

    if (settings.displayValueText) {
        // Add a path to attach the value text to.
        boxGroup.append("path")
            .attr("d", function (d) {
                var textX, textY1, textY2;
                if (settings.valueTextAlignDiagonal) {
                    textY1 = settings.expandFromLeft ? sizeScaleHeight(d.value) - settings.valueTextPadding.left : settings.valueTextPadding.left;
                    textY2 = settings.expandFromLeft ? settings.valueTextPadding.right : sizeScaleHeight(d.value) - settings.valueTextPadding.right;
                } else {
                    if (settings.expandFromLeft) {
                        if (settings.expandFromTop) {
                            textY1 = sizeScaleHeight(d.value) * 2 + settings.valueTextPadding.right;
                            textY2 = settings.valueTextPadding.right;
                        } else {
                            textY1 = sizeScaleHeight(d.value) - settings.valueTextPadding.left;
                            textY2 = sizeScaleHeight(d.value) * -1 - settings.valueTextPadding.left;
                        }
                    } else {
                        if (settings.expandFromTop) {
                            textY1 = settings.valueTextPadding.left;
                            textY2 = sizeScaleHeight(d.value) * 2 + settings.valueTextPadding.left;
                        } else {
                            textY1 = sizeScaleHeight(d.value) * -1 - settings.valueTextPadding.right;
                            textY2 = sizeScaleHeight(d.value) - settings.valueTextPadding.right;
                        }
                    }
                }
                textX = settings.expandFromLeft ? sizeScaleWidth(d.value) - settings.valueTextPadding.bottom - textHeight / 4 : textHeight / 4 + settings.valueTextPadding.bottom;
                return line([{ x: textX, y: textY1 }, { x: textX, y: textY2 }]);
            })
            .attr("id", function (d, i) { return elementId + "VertPath" + i; });

        // Set up the value text location.
        var valueTextStartOffset, valueTextEndOffset, valueTextTextAnchor;
        if (settings.valueTextAlignDiagonal) {
            if ((settings.expandFromLeft && settings.expandFromTop) ||
                (settings.expandFromLeft == false && settings.expandFromTop == false)) {
                valueTextStartOffset = "0%";
                valueTextTextAnchor = "start";
            } else {
                valueTextStartOffset = "100%";
                valueTextTextAnchor = "end";
            }
        } else {
            if ((settings.expandFromLeft && settings.expandFromTop) ||
                (settings.expandFromLeft == false && settings.expandFromTop == false)) {
                valueTextStartOffset = "50%";
                valueTextEndOffset = "100%";
                valueTextTextAnchor = "end";
            } else {
                valueTextStartOffset = "50%";
                valueTextEndOffset = "0%";
                valueTextTextAnchor = "start";
            }
        }
        if (settings.animate == false && settings.valueTextAlignDiagonal == false) {
            valueTextStartOffset = valueTextEndOffset;
        }

        // Add the value text.
        var valuePath = boxGroup.append("text")
            .attr("class", "rectangularAreaChartText")
            .style("fill", function (d) { return settings.textColorScale(d.label); })
            .append("textPath")
            .attr("startOffset", valueTextStartOffset)
            .style("text-anchor", valueTextTextAnchor)
            .attr("xlink:href", function (d, i) { return "#" + elementId + "VertPath" + i; });
        var valueText = valuePath.append("tspan") // A tspan is necessary so that we can animate both the movement of the text and it's counting up from 0.
            .text(function (d) { return settings.animate && settings.valueTextCountUp ? valueFormatter(d, 0) : valueFormatter(d); });

        // Animate the text movement.
        if (settings.animate && settings.valueTextAlignDiagonal == false) {
            valuePath.transition()
                .delay(function (d, i) { return settings.animateDelay + (settings.animateDelayBetweenBoxes * i); })
                .duration(settings.animateDuration)
                .attr("startOffset", valueTextEndOffset);
        }

        // Animate the value counting up from 0.
        if (settings.animate && settings.valueTextCountUp) {
            valueText.transition()
                .delay(function (d, i) { return settings.animateDelay + (settings.animateDelayBetweenBoxes * i); })
                .duration(settings.animateDuration * 1.25)
                .tween("text", function (d) {
                    var i = d3.interpolate(this.textContent, d.value);
                    return function (t) { this.textContent = valueFormatter(d, Math.round(i(t))); }
                });
        }
    }
}



export const renderAlbers = (data) => {
    // data =={ leverage: 0.463933027478709, assetTurnover: 0.4002680756696468, operatingMargin: -0.00525464861268168, interestBurden: -0.03337927195044271, taxBurden: 0.17443281741476854, … }

    // GET STOCK DATA (FOR TESTING- DATA IS HARD CODED)
    // const stockData = allStockData[stockSymbol];
    // if (!stockData) {											// if user types in stock not in free api
    //     console.log(`Stock ${stockSymbol} not found.`);
    //     return;
    // }
    // const data = parseStockData(stockData);						// not being used yet
    // ex. if AAPL, duPontData == { 
    // leverage: 3.4133013523477094, 
    // assetTurnover: 0.7262150522933899, 
    // operatingMargin: 0.26694026619477024, 
    // interestBurden: 1.0282800643177523, 
    // taxBurden: 0.8165781929413056 }
    // Tax Burden = 19.16       Interest Burden = % -2.12       
    // EBIT Margin = % -2.13    Asset Turnover = % 40.37 
    // Leverage = % 44.71 
    // each element represents the extent to which (out of all 5 ratios) that ratio contributed to the change in ROE
    //****************************** FOR TESTING */
    // let rawData = [19.16, 2.12, 2.13, 40.37, 44.71];              	// for now make postiive
    //****************************** FOR TESTING */
    // var rawData = { time: 40, money: 90, food: 30, sleep: 60 };	// rawData MUST BE ARRAY NOT OBJ


    let data1, data2, data3, data4;
    data1 = data2 = data3 = data4 = [ 
        { value: `${100*data.taxBurden}`, label: "Tax Burden", valueSuffix: " %" }, 
    	{ value: `${100*data.interestBurden}`, label: "EBIT Margin", valueSuffix: " %" }, 
    	{ value: `${100*data.assetTurnover}`, label: "Asset Turnover", valueSuffix: " %" }, 
    	{ value: `${100*data.operatingMargin}`, label: "EBIT Margin", valueSuffix: " %" }, 
    	{ value: `${100*data.leverage}`, label: "Leverage", valueSuffix: " %" }
    ];
    let config1 = rectangularAreaChartDefaultSettings();
    config1.displayLabelText = true;                                           // Turn off for top left box
    config1.displayValueText = true,                                           // Turn off for top left box
    config1.expandFromLeft = false;
    // config1.colorsScale = d3.scale.category20b();        // OLD
    config1.colorsScale = d3.scale.ordinal().range(["#053061", "#2166ac", "#4393c3", "#92c5de"]);  //palette from https://observablehq.com/@d3/color-schemes
    // // create custom colorScale function  DOESN"T WORK YET
    // config1.colorScale = d3.scale.ordinal()
    //     .range(["#9e0142", "#a00343", "#a20643", "#a40844", "#a70b44"])
    // doesn't work below (colorSCale)
    // config1.colorsScale = ["#9e0142", "#a00343", "#a20643", "#a40844", "#a70b44", "#a90d45", "#ab0f45", "#ad1245", "#af1446", "#b11646", "#b31947", "#b51b47", "#b71d48", "#ba2048", "#bc2248", "#be2449", "#c02749", "#c12949", "#c32b4a", "#c52d4a", "#c7304a", "#c9324a", "#cb344b", "#cd364b", "#ce384b", "#d03b4b", "#d23d4b", "#d33f4b", "#d5414b", "#d7434b", "#d8454b", "#da474a", "#db494a", "#dd4b4a", "#de4d4a", "#df4f4a", "#e1514a", "#e2534a", "#e35549", "#e45749", "#e65949", "#e75b49", "#e85d49", "#e95f49", "#ea6149", "#eb6349", "#ec6549", "#ed6749", "#ee6a49", "#ef6c49", "#f06e4a", "#f0704a", "#f1724a", "#f2744b", "#f3774b", "#f3794c", "#f47b4d", "#f47e4d", "#f5804e", "#f6824f", "#f68550", "#f78750", "#f78951", "#f88c52", "#f88e53", "#f89154", "#f99356", "#f99557", "#f99858", "#fa9a59", "#fa9c5a", "#fa9f5c", "#fba15d", "#fba35e", "#fba660", "#fba861", "#fcaa62", "#fcad64", "#fcaf65", "#fcb167", "#fcb368", "#fcb56a", "#fdb86b", "#fdba6d", "#fdbc6e", "#fdbe70", "#fdc071", "#fdc273", "#fdc474", "#fdc676", "#fdc878", "#fdca79", "#fecc7b", "#fecd7d", "#fecf7e", "#fed180", "#fed382", "#fed584", "#fed685", "#fed887", "#feda89", "#fedb8b", "#fedd8d", "#fede8f", "#fee090", "#fee192", "#fee394", "#fee496", "#fee698", "#fee79a", "#fee89b", "#feea9d", "#feeb9f", "#feeca1", "#feeda2", "#feefa4", "#fef0a5", "#fef1a7", "#fef2a8", "#fdf3a9", "#fdf3aa", "#fdf4ab", "#fdf5ac", "#fcf6ad", "#fcf6ae", "#fcf7af", "#fbf7af", "#fbf8b0", "#faf8b0", "#faf9b0", "#f9f9b0", "#f9f9b0", "#f8f9b0", "#f7faaf", "#f7faaf", "#f6faae", "#f5faae", "#f4f9ad", "#f3f9ac", "#f2f9ac", "#f2f9ab", "#f0f9aa", "#eff8a9", "#eef8a8", "#edf8a7", "#ecf7a7", "#ebf7a6", "#e9f6a5", "#e8f6a4", "#e7f5a3", "#e5f5a2", "#e4f4a2", "#e2f3a1", "#e0f3a1", "#dff2a0", "#ddf1a0", "#dbf19f", "#d9f09f", "#d7ef9f", "#d6ee9f", "#d4ee9f", "#d2ed9e", "#d0ec9e", "#cdeb9f", "#cbea9f", "#c9e99f", "#c7e89f", "#c5e89f", "#c3e79f", "#c0e6a0", "#bee5a0", "#bce4a0", "#b9e3a0", "#b7e2a1", "#b4e1a1", "#b2e0a1", "#b0dfa1", "#addea2", "#abdda2", "#a8dca2", "#a6dba3", "#a3daa3", "#a0d9a3", "#9ed8a3", "#9bd7a3", "#99d6a4", "#96d5a4", "#94d4a4", "#91d3a4", "#8ed1a4", "#8cd0a4", "#89cfa5", "#87cea5", "#84cda5", "#82cba5", "#7fcaa6", "#7dc9a6", "#7ac7a6", "#77c6a6", "#75c5a7", "#73c3a7", "#70c2a8", "#6ec0a8", "#6bbea8", "#69bda9", "#66bba9", "#64b9aa", "#62b8aa", "#60b6ab", "#5db4ac", "#5bb2ac", "#59b0ad", "#57aeae", "#55acae", "#53aaaf", "#51a8af", "#50a6b0", "#4ea4b1", "#4ca2b1", "#4ba0b2", "#499db2", "#489bb3", "#4799b3", "#4697b3", "#4595b4", "#4492b4", "#4390b4", "#438eb4", "#428cb5", "#4289b5", "#4287b4", "#4285b4", "#4283b4", "#4280b4", "#437eb3", "#437cb3", "#447ab3", "#4577b2", "#4575b1", "#4673b1", "#4771b0", "#486eaf", "#4a6caf", "#4b6aae", "#4c68ad", "#4e65ac", "#4f63ab", "#5161aa", "#525fa9", "#545ca8", "#555aa7", "#5758a6", "#5956a5", "#5b53a4", "#5c51a3", "#5e4fa2"];
    config1.maxValue = 100;
    // debugger
    loadRectangularAreaChart("rectangularareachart1", data1, config1);




    let config2 = rectangularAreaChartDefaultSettings();
    // Overwrite default configuration settings
    config2.displayLabelText = false;                                           // Turn off for top right box
    config2.displayValueText = false,                                           // Turn off for top right box
    config2.colorsScale = d3.scale.ordinal().range(["#053061", "#2166ac", "#4393c3", "#92c5de"]);  //palette from https://observablehq.com/@d3/color-schemes
    config2.textColorScale = d3.scale.ordinal().range(["#444", "#333", "#222"]);
    config2.labelAlignDiagonal = true;
    config2.valueTextAlignDiagonal = true;
    config2.valueTextPadding.right = 18;
    config2.maxValue = 100;
    // config2.animateDelay = 1000;
    config2.animateDelayBetweenBoxes = 0;
    config2.valueTextCountUp = false;
    loadRectangularAreaChart("rectangularareachart2", data2, config2);
    // ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"]



    let config3 = rectangularAreaChartDefaultSettings();
    config3.displayLabelText = false;                                           // Turn off for bottom left box
    config3.displayValueText = false,                                           // Turn off for bottom left box
    config3.expandFromLeft = false;
    config3.expandFromTop = true;
    config3.maxValue = 100;
    // config3.colorsScale = d3.scale.ordinal().range(["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"]);  //palette from colorbrewer https://github.com/mbostock/d3/tree/master/lib/colorbrewer
    config3.colorsScale = d3.scale.ordinal().range(["#053061", "#2166ac", "#4393c3", "#92c5de"]);  //palette from https://observablehq.com/@d3/color-schemes
    config3.textColorScale = d3.scale.ordinal().range(["#555", "#777", "#999", "#aaa", "#ddd", "#fff", "#fff"]);
    // config3.animateDelay = 2000;
    loadRectangularAreaChart("rectangularareachart3", data3, config3);


    let config4 = rectangularAreaChartDefaultSettings();
    config4.displayLabelText = false;                                           // Turn ON for bottom right box
    config4.displayValueText = false,                                           // Turn ON for bottom right box
    config4.expandFromLeft = true;
    config4.expandFromTop = true;
    config4.maxValue = 100;
    config4.labelAlignDiagonal = true;
    // config4.animateDelay = 3500;
    config4.animateDelayBetweenBoxes = 0;
    // config4.colorsScale = d3.scale.ordinal().range(["#7570b3", "#e7298a", "#66a61e"]);  //palette from colorbrewer https://github.com/mbostock/d3/tree/master/lib/colorbrewer
    config4.colorsScale = d3.scale.ordinal().range(["#053061", "#2166ac", "#4393c3", "#92c5de"]);  //palette from https://observablehq.com/@d3/color-schemes
    config4.textColorScale = d3.scale.ordinal().range(["#e7298a", "#7570b3", "#66a61e"]);
    loadRectangularAreaChart("rectangularareachart4", data4, config4);
}