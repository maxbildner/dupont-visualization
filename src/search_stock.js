// import { STOCK_SAMPLE_TICKERS } from './stock_sample_data';

// export function handleStockSearch(e) {
//     let currentFocus;
// };

// export function handleStockKeyDown() {
// };

// export function closeDropDownList(element, inputEl) {       // element == e.target
//     let tickerItems = document.getElementsByClassName("autocomplete-items");
//     // let container = tickerItems[0];
//     // debugger
//     // let parent = container.parentNode;
//     // parent.removeChild(container);
//     // debugger
//     for (let i = 0; i < tickerItems.length; i++) {
//         if (element != tickerItems[i] && element != inputEl) {
//             tickerItems[i].parentNode.removeChild(tickerItems[i]);
//         }
//     }
// }








// takes in input DOM element that the user types, and an array of stock tickers
// export function autocompleteSearch(inputEl) {
  
//     let currentFocus;

//     // do function below when user types stuff in input text field
//     // inputEl.addEventListener('input', () => handleStockSearch(e, inputEl));
//     inputEl.addEventListener('input', function(e) { 
//         // debugger
//         let a, b;                       // a = div that has each stock ticker
//         let val = this.value;           // ex. this.value == 'A'

//         // debugger

//         // close lists that are already open    el == e.target ?
//         closeDropDownList(e.target, inputEl);
//         if (!val) { return false; }
//         currentFocus = -1;

//         // div element that has each item (stock)
//         a = document.createElement('DIV');
//         a.setAttribute('id', this.id + "autocomplete-list");
//         a.setAttribute('class', "autocomplete-items");

//         // append div ele to autocomplete container element
//         this.parentNode.appendChild(a);

//         // search algo: loop through each ele in array
//         for (let i = 0; i < STOCK_SAMPLE_TICKERS.length; i++) {
//             let ticker = STOCK_SAMPLE_TICKERS[i];
//             if (ticker.substr(0, val.length).toUpperCase() == val.toUpperCase()) { 
//                 // make a div element for all matching tickers
//                 b = document.createElement('DIV');
//                 // make matching characters bolded
//                 b.innerHTML = "<strong>" + ticker.substr(0, val.length) + "</strong>";
//                 b.innerHTML += ticker.substr(val.length);

//                 b.innerHTML += "<input type='hidden' value='" + ticker + "'>";

//                 // do function below when user clicks on the item in drop down
//                 b.addEventListener('click', function(e) {
//                     // insert the value in the input field based on what the user clicks
//                     inputEl.value = this.getElementsByTagName('input')[0].value;

//                     // close lists of dropdown
//                     closeDropDownList(inputEl);
//                 });

//                 a.appendChild(b);
//             }
//         }
//     });
// };








// FROM TUTORIAL: https://www.w3schools.com/howto/howto_js_autocomplete.asp
export function autocompleteSearchBar(stockSymbolEl, STOCK_SAMPLE_TICKERS) {
    // stockSymbolEl        == input field element ex. <input class="autocomplete" type="text" id="stock-symbol" onfocus="this.value=''">
    // STOCK_SAMPLE_TICKERS == array of strings valid stocks 
    
    var currentFocus;

    // Do function below when user types stuff in input text field
    stockSymbolEl.addEventListener("input", function (e) {
        // var a, b, i, value = this.value;
        var value = this.value;
        var container, stockItem;
        // this         == <input class="autocomplete" type="text" id="stock-symbol" onfocus="this.value=''">
        // this.value   == "A"   when user types in "A" in input field box
        // e            == input event { data: "A", target, ... }
        // e.target     == <input class="autocomplete" type="text" id="stock-symbol" onfocus="this.value=''">
        // e.target.value == "A"
        // debugger

        // Close all autosuggestion div tickers
        closeDropDownList();
        if (!value) { return false; }
        currentFocus = -1;
        
        
        // Make DIV container element that will contain each ticker element
        container = document.createElement("DIV");
        container.setAttribute("id", this.id + "autocomplete-list");
        container.setAttribute("class", "autocomplete-items");

        // Append the container element to the wrapper/section on the document
        this.parentNode.appendChild(container);

        // Search Algo: O(n) loop through each ticker in array
        for (let i = 0; i < STOCK_SAMPLE_TICKERS.length; i++) {
            let ticker = STOCK_SAMPLE_TICKERS[i];
            
            // Check if ticker string starts w/ same characters as the users input field
            if (ticker.substr(0, value.length).toUpperCase() == value.toUpperCase()) {
                
                // Make a DIV element for each ticker that matches
                stockItem = document.createElement("DIV");
                // Bold the character that matches
                stockItem.innerHTML = "<strong>" + ticker.substr(0, value.length) + "</strong>";
                // stockItem == <div><strong>A</strong>"APL"</div>
                // Add the rest of the ticker (letters not bolded)
                stockItem.innerHTML += ticker.substr(value.length);
                
                // Add a hidden input field that'll have the full ticker value
                stockItem.innerHTML += "<input type='hidden' value='" + ticker + "'>";
                // stockItem == <div><strong>A</strong>"APL" <input type="hidden" value="AAPL"></div>
                
                // When user clicks on a dropdown ticker item, reset the original input field's value to that
                stockItem.addEventListener("click", function (e) {
                    stockSymbolEl.value = this.getElementsByTagName("input")[0].value;
                    closeDropDownList();
                });

                // Attach stock item div to container
                container.appendChild(stockItem);
            }
        }
    });


    /*execute a function presses a key on the keyboard:*/
    stockSymbolEl.addEventListener("keydown", function (e) {
        let dropdownDiv = document.getElementById(this.id + "autocomplete-list");
        // this         == <input class="autocomplete" type="text" id="stock-symbol" onfocus="this.value=''">
        // dropdownDiv  == <div id="stock-symbolautocomplete-list" class="autocomplete-items"> <div>...</div> </div>
        // debugger

        if (dropdownDiv) dropdownDiv = dropdownDiv.getElementsByTagName("div");
        
        // if down key is pressed (40), increase currentFocus by 1
        if (e.keyCode == 40) {          // 40 == down arrow key code
            currentFocus++;
            // Add a class to the dropdownDiv
            addActive(dropdownDiv);
        } else if (e.keyCode == 38) {   // UP arrow key
            currentFocus--;
            addActive(dropdownDiv);
        } else if (e.keyCode == 13) {   // ENTER key
            e.preventDefault();         
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (dropdownDiv) dropdownDiv[currentFocus].click();
            }
        }
    });


    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }


    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }


    function closeDropDownList(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != stockSymbolEl) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeDropDownList(e.target);
    });
}