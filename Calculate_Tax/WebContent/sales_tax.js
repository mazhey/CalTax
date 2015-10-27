var $ = function (id) {
    return document.getElementById(id); 
}

//retrieve the subtotal value and retrieve the tax rate value
function calculate_click() 
{
var subtotal= parseFloat(document.getElementById("subtotal").value);
var taxRate= parseFloat(document.getElementById("taxRate").value);

var checkSubtotal= isNaN(document.getElementById("subtotal").value) ; 
if ( checkSubtotal== true ||subtotal <0) {
	 alert("Enter a valid number or Subtotal is negative");
	 
} else{
		//do calculation
		/*Calculate the salesTax as the subtotal times the taxRate divided by 100   
		 and calculate the total as the sum of the subtotal and the salesTax. */
		var SalesTax= (subtotal*taxRate)/100;
		var Total = (subtotal+SalesTax);
//		Total =Total.toFixed(2);
		console.log("subtotal: " + subtotal);
		console.log("taxRate: " + taxRate);
		console.log("SalesTax: " + SalesTax);
		console.log("Total: " + Total);
		
		document.getElementById('salesTax').value =SalesTax ;
		document.getElementById('total').value = Total;
		
		
	}
	
}

window.onload = function () {
	 $("calculate").onclick = calculate_click;
	 $("subtotal").focus;
	}