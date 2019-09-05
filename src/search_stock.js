import { NAMES } from './stock_names_full';

// FROM TUTORIAL: https://www.w3schools.com/howto/howto_js_autocomplete.asp
export function autocompleteSearchBar(stockSymbolEl, STOCK_TICKERS) {
	// stockSymbolEl        == input field element ex. <input class="autocomplete" type="text" id="stock-symbol" onfocus="this.value=''">
	// STOCK_TICKERS == array of strings valid stocks 
	
	let currentSelection;

	// Do function below when user types stuff in input text field
	stockSymbolEl.addEventListener("input", function (e) {
		let value = this.value;
		let container, stockItem;
		// this         == <input class="autocomplete" type="text" id="stock-symbol" onfocus="this.value=''">
		// this.value   == "A"   when user types in "A" in input field box
		// e            == input event { data: "A", target, ... }
		// e.target     == <input class="autocomplete" type="text" id="stock-symbol" onfocus="this.value=''">
		// e.target.value == "A"
		// debugger

		// Close all autosuggestion div tickers
		closeDropDownList();
		if (!value) { return false; }
		currentSelection = -1;
		
		// Make DIV container element that will contain each ticker element
		container = document.createElement("DIV");
		container.setAttribute("id", this.id + "autocomplete-list");
		container.setAttribute("class", "autocomplete-items");

		// Append the container element to the wrapper/section on the document
		this.parentNode.appendChild(container);

		// Search Algo: O(n) loop through each ticker in array (and simultaneously loop through NAMES array)
		for (let i = 0; i < STOCK_TICKERS.length; i++) {
			let ticker = STOCK_TICKERS[i];
			let name = NAMES[i];

			// Check if ticker string starts w/ same characters as the users input field
			let inputMatchesTicker = ticker.substr(0, value.length).toUpperCase() == value.toUpperCase();
			let inputMatchesName = name.substr(0, value.length).toUpperCase() == value.toUpperCase();
			
			// if (ticker.substr(0, value.length).toUpperCase() == value.toUpperCase()) {
			// if (inputMatchesTicker || inputMatchesName) {
			if (inputMatchesTicker || inputMatchesName) {
		   		
				// Make a DIV element for each ticker that matches
				stockItem = document.createElement("DIV");
				
				// Bold the character that matches
				stockItem.innerHTML = "<strong>" + ticker.substr(0, value.length) + "</strong>";
				// stockItem == <div><strong>A</strong>
				
				// Add the rest of the ticker (letters not bolded)
				stockItem.innerHTML += ticker.substr(value.length);
				// stockItem == <div><strong>A</strong>"APL"</div>

				// Insert stock Name as another p element (inline)
				stockItem.innerHTML += " " + "<p style='display: inline-block;margin:0 auto;'>" + name + "</p>";

				// Add a hidden input field that'll have the full ticker value
				stockItem.innerHTML += "<input type='hidden' value='" + ticker + "'>";
				// stockItem == <div><strong>A</strong>"APL" <input type="hidden" value="AAPL"></div>
				
				// When user clicks on a dropdown ticker item, reset the original input field's value to that
				stockItem.addEventListener("click", function (e) {
						stockSymbolEl.value = this.getElementsByTagName("input")[0].value;
						closeDropDownList();
				});

				// debugger
				// stop appending if list container becomes too long
				if (container.childElementCount > 15) break;
				// Attach stock item div to container
				container.appendChild(stockItem);
			}
		}
	});


	/*execute a function presses a key on the keyboard:*/
	stockSymbolEl.addEventListener("keydown", function (e) {
		let dropDownList = document.getElementById(this.id + "autocomplete-list");
		// this         == <input class="autocomplete" type="text" id="stock-symbol" onfocus="this.value=''">
		// dropDownList == <div id="stock-symbolautocomplete-list" class="autocomplete-items"> <div>...</div> </div>
		// debugger

		if (dropDownList) dropDownList = dropDownList.getElementsByTagName("div");
		
		// if down key is pressed (40), increase currentSelection by 1
		if (e.keyCode == 40) {          // 40 == down arrow key code
			currentSelection++;
			// Add a class to the dropDownList
			addActiveClass(dropDownList);
		} else if (e.keyCode == 38) {   // UP arrow key
			currentSelection--;
			addActiveClass(dropDownList);
		} else if (e.keyCode == 13) {   // ENTER key
			if (currentSelection > -1) {
					// When user hits enter, simulate a "click" on that ticker
					if (dropDownList) dropDownList[currentSelection].click();
				}
		}
	});


	function addActiveClass(dropDownList) {
		// dropDownList                   == HTMLCollection [div, div, ...]
		// dropDownList[currentSelection] == <div> <strong>A</strong> <input type="hidden" value="AAPL"> </div>

		// Exit if there's no dropdown list (user didn't type in anyting/input field is blank)
		if (!dropDownList) return false;

		// Remove active class for all tickers
		removeActiveClass(dropDownList);

		if (currentSelection >= dropDownList.length) currentSelection = 0;
		if (currentSelection < 0) currentSelection = (dropDownList.length - 1);
		
		// Add class
		dropDownList[currentSelection].classList.add("autocomplete-active");
	}


	// Remove active class from all tickers
	function removeActiveClass(dropDownList) {
		for (let i = 0; i < dropDownList.length; i++) {
			dropDownList[i].classList.remove("autocomplete-active");
		}
	}

	// Clears all drop down items (except one passed in)
	function closeDropDownList(element) {
		let tickers = document.getElementsByClassName("autocomplete-items");
		for (let i = 0; i < tickers.length; i++) {
			if (element != tickers[i] && element != stockSymbolEl) {
				tickers[i].parentNode.removeChild(tickers[i]);
			}
		}
	}

	/*execute a function when someone clicks in the document:*/
	document.addEventListener("click", function (e) {
		closeDropDownList(e.target);
	});
}
