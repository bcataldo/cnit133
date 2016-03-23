//declare variables
var year, iRate;

//use a for statement to concatenate rates

for (iRate = 5; iRate <= 10; iRate++)


//write the head information each time 
//publish the year in the first column of table
//use a "nested" for statement to compute the compound for each year using formula, rounding off to 2 decimals
//publish the rate in the third column of table


{

	document.write('<table class=\'bump-space\'>');
	document.write('<tr><th>Year</th><th>Amount on Deposit' +
		'</th><th>Interest Rate</th></tr>')

	for (year = 1; year <= 10; year++) {

		document.write('<tr>');
		document.write('<td>' + year + '</td><td>' +
			(Math.pow((1 + (iRate / 100)), year) * 1000).toFixed(2) +
			'</td><td>' + (iRate / 100).toFixed(2) + '</td>');

		document.write('</tr>');
	}
}
document.write('</table>');

//jquery for the flipping panel
$("#flip").click(function () {
	$("#panel").slideToggle("slow");
});

//jquery for changing row colors
$(function () {
	$("table tr:nth-child(even)").addClass("striped");
});