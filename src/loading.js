export function showLoadingAnimation() {
    const loading = document.getElementById('loading-animation');
    loading.className = "show";
    // setTimeout( ()=> {
    //     loading.className = loading.className.replace("show", "")
    // }, 3000);
}

export function hideLoading() {
    const loading = document.getElementById('loading-animation');
    loading.className = loading.className.replace("show", "")
}


export function isValid(response, symbol) {
    if (response.datatable.data.length === 0) {     // if stock symbol doesn't exist
        return false;
    } else {
        return true;
    }
}