"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Todd Adcox Jr
   Date:   2-27-19
   
   Filename: tc_cart.js
	
*/


// 12. Create a for loop that loops through the entries in the item array. Each time through the loop, execute the commands described in Steps a through e.

// e. Add the value of the itemCost variable to the orderTotal variable to keep a running total of the
// total cost of the customer order.


//A variable named orderTotal, its initial value is set to 0. 
var oderTotal = 0;

// A variable named cartHTML that contains a string of some HTML code that will create a table
var cartHTML = "<table>" + "<tr>" + "<th>Item</th>" + "<th>Description</th>" + "<th>Price</th>" + "<th>Qty</th>" + "<th>Total</th>" + "</tr>";

// A for loop that loops through the entries in the item array
for (var i = 0; i <= item; i++) {

    // Adds the following HTML code to the value of the cartHTML variable
    var cartHTML = "<tr>" + "<td>" + "<img src = 'tc_item.png' alt = '" + item[i] + "'/>" + "</td>" + "<td>" + itemDescription[i] + "</td>" + "<td>$" + itemPrice[i] + "</td>" + "<td>" + itemQty[i] + "</td>";

    // A variable named itemCost is being set equal to the itemPrice multiplied by the itemQty variables.
    var itemCost = (itemPrice[i] * itemQty[i]);


}

// d. Add the following HTML code to the cartHTML variable to display the cost for the item(s) ordered, completing the table row
// <td>$cost</td></tr>
// where cost is the value of the itemCost variable, preceded by a $ symbol.