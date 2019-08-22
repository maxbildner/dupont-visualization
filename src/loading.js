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