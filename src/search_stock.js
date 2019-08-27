import { STOCK_SAMPLE_TICKERS } from './stock_sample_data';

// export function handleStockSearch(e) {
//     let currentFocus;

// };

// export function handleStockKeyDown() {

// };

// takes in input DOM element that the user types, and an array of stock tickers
export function autocompleteSearch(inputEl) {
  
    let currentFocus;

    // do function below when user types stuff in input text field
    // inputEl.addEventListener('input', () => handleStockSearch(e, inputEl));
    inputEl.addEventListener('input', function(e) { 
        // debugger
        let a, b;
        let val = this.value;           // ex. this.value == 'A'

        // close open lists
        // closeAllLists();
        if (!val) return false;
        currentFocus = -1;

        a = document.createElement('DIV');
        a.setAttribute('id', this.id + 'autocomplete-list');
        a.setAttribute('class', 'autocomplete-items');

        // append div ele to autocomplete container element
        this.parentNode.appendChild(a);

        // search algo: loop through each ele in array
        for (let i = 0; i < STOCK_SAMPLE_TICKERS.length; i++) {
            let ticker = STOCK_SAMPLE_TICKERS[i];
            if (ticker.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                // make a div element for all matching tickers
                b = document.createElement('DIV');
                // make matching characters bolded
                b.innerHTML = "<strong>" + ticker.substr(0, val.length) + "</strong>";
                b.innerHTML += ticker.substr(val.length);

                b.innerHTML += "<input type='hiden' value='" + ticker + "'>";

                // do function below when user clicks on the item in drop down
                b.addEventListener('click', function(e) {
                    // insert the value in the input field based on what the user clicks
                    inputEl.value = this.getElementsByTagName('input')[0].value;

                    // close lists of dropdown
                    // closeAllLists();
                });

                a.appendChild(b);
            }
        }
    });
};


export function closeDropDownList(element, inputEl) {
    let tickerItems = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < tickerItems.length; i++) {
        if (element != tickerItems[i] && element != inputEl) {
            tickerItems[i].parentNode.removeChild(tickerItems[i]);
        }
    }
}