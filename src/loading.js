// DYNAMICALLY GENERAGED POLYLINES DON'T GET CSS STYLES APPLIED WTF?
// export function showLoadingAnimation() {
//     let svgLoading = document.createElement('svg');                 // <svg></svg>
//     let container = document.getElementById('loading-container');
//     // set attributes of svgLoading element
//     setAttributes(svgLoading, { 
//         "id": "loading-animation", 
//         "height": "200", 
//         "width": '200',
//         "viewBox": '0 0 100 100'
//     });
    
//     // create 4 polylines w/ various attributes
//     let polyline1 = document.createElement('polyline');
//     let polyline2 = document.createElement('polyline');
//     let polyline3 = document.createElement('polyline');
//     let polyline4 = document.createElement('polyline');

//     setAttributes(polyline1, {
//         "class": "line-cornered stroke-still",
//         "points": "0,0 100,0 100,100",
//         "stroke-width": '10',
//         "fill": 'none'
//     });
//     setAttributes(polyline2, {
//         "class": "line-cornered stroke-still",
//         "points": "0,0 0,100 100,100",
//         "stroke-width": '10',
//         "fill": 'none'
//     });
//     setAttributes(polyline3, {
//         "class": "line-cornered stroke-animation",
//         "points": "0,0 100,0 100,100",
//         "stroke-width": '10',
//         "fill": 'none'
//     });
//     setAttributes(polyline4, {
//         "class": "line-cornered stroke-animation",
//         "points": "0,0 0,100 100,100",
//         "stroke-width": '10',
//         "fill": 'none'
//     });

//     // append each polyline to svgLoading
//     [polyline1, polyline2, polyline3, polyline4].forEach( (polyline) => {
//         svgLoading.append(polyline);
//     });

//     // append loading to container
//     container.appendChild(svgLoading);
// }


// function setAttributes(element, attributes) {
//     for (var key in attributes) {
//         element.setAttribute(key, attributes[key]);
//     }
// }




// NEW LOADING ANIMATION
export function showLoadingAnimation() {
    const loading = document.getElementById('loading-animation');
    loading.className = "show";
}

export function hideLoading() {
    const loading = document.getElementById('loading-animation');
    loading.className = loading.className.replace("show", "")
}


// OLD CIRCLE LOADING ANIMATION
// export function showLoadingAnimation() {
//     const loading = document.getElementById('loading-animation');
//     loading.className = "show";
//     // setTimeout( ()=> {
//     //     loading.className = loading.className.replace("show", "")
//     // }, 3000);
// }

// export function hideLoading() {
//     const loading = document.getElementById('loading-animation');
//     loading.className = loading.className.replace("show", "")
// }


export function isValid(response, symbol) {
    if (response.datatable.data.length === 0) {     // if stock symbol doesn't exist
        return false;
    } else {
        return true;
    }
}