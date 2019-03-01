"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Todd Adcox Jr
   Date:   2-27-19
   
   Filename: tc_cart.js
	
*/



//A variable named orderTotal, its initial value is set equal to 0.
var orderTotal = 0;

// A variable named cartHTML that contains a string of some HTML code that will create a table
var cartHTML = "<table> <tr> <th>Item</th> <th>Description</th> <th>Price</th> <th>Qty</th> <th>Total</th> </tr>";

// A for loop that loops through the entries in the item array
for (var i = 0; i <= 3; i++) {

    // Adds the following HTML code to the value of the cartHTML variable
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "'/> </td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    // A variable named itemCost is being set equal to the itemPrice multiplied by the itemQty variables.
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    orderTotal = orderTotal + itemCost;
}

// Apply the cartHTML value to the inner HTML of the div element with the ID cart.
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";
document.getElementById("cart").innerHTML = cartHTML;