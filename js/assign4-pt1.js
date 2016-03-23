//for javascript loop that calculates the sum and product of every 3 integer from 5-20
var sum = 0;
var product = 1;

for (var number = 5; number <= 20; number += 3) {
	sum += number;
	product *= number;
}
//alert(sum);

//write out the solution. tolocalestring puts in the commas for longer numbers
document.getElementById('sum').innerHTML = 'The <strong>sum</strong> of every third integer from 5 to 20 inclusive is ' + sum;
document.getElementById('sum1').innerHTML = ('<p> 5 + 8 + 11 + 14 + 20 = ' + parseFloat(5 + 8 + 11 + 14 + 17 + 20) + '</p>');
document.getElementById('product').innerHTML = 'The <strong>product</strong> of every third integer from 5 to 20 inclusive is ' + product.toLocaleString();
document.getElementById('product1').innerHTML = ('<p> 5 * 8 * 11 * 14 * 20 = ' + parseFloat(5 * 8 * 11 * 14 * 17 * 20).toLocaleString() + '</p>');

//while javascript loop that calculates the sum and product of every forth integer from 3-31
var sum2 = 0;
product2 = 1;
x = 3;

while (x <= 31) {
	sum2 += x;
	product2 *= x;
	x = x + 4;
}
//write out the solution. tolocalestring puts in the commas for longer numbers
document.getElementById('sum2').innerHTML = 'The <strong>sum</strong> of every fourth integer from 3 to 31 inclusive is ' + sum2;

document.getElementById('sum2a').innerHTML = ('<p> 3 + 7 + 11 + 15 + 19 + 23 + 27 + 31 = ' + parseFloat(3 + 7 + 11 + 15 + 19 + 23 + 27 + 31) + '</p>');

document.getElementById('product2').innerHTML = 'The <strong>product</strong> of every fourth integer from 3 to 31 inclusive is ' + product2.toLocaleString();

document.getElementById('product2a').innerHTML = ('<p>3 * 7 * 11 * 15 * 19 * 23 * 27 * 31 = ' + parseFloat(3 * 7 * 11 * 15 * 19 * 23 * 27 * 31).toLocaleString() + '</p>');


//jquery for the draggable
$("#draggable").draggable();

//jquery for the info box
$("#flip").click(function () {
	$("#panel").slideToggle("slow");
});