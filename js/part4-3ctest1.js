
function calculateInterest () {
	var initial = 1000, amount = 0;
	
	document.writeln("<table>");
	document.writeln("<p class=\"bump-space\">");
	document.writeln("<h3>Compound yearly interest on initial deposit of $1,000:</h4>");
	document.writeln("<table id=\"interest\">");
	document.writeln("<tr>");
	document.writeln("<th>Year</th>");
	document.writeln("<th>Amount on deposit</th>");
	document.writeln("<th>Interest Rate</th>");
	document.writeln("</tr>");
	
	for (var rate = 5; rate <= 10; rate++) {
		for (var year = 1; year <= 10; year++) {
			amount = initial *  Math.pow((1 + rate * 0.01), year);
			
			document.writeln("<tr>");
			document.write("<td>" + year + "</td>");
			document.write("<td>$" + amount.toFixed(2) + "</td>");
			document.write("<td>" + rate + " %</td>");
			document.writeln("</tr>");
			
		}
		document.writeln("<tr>");
		document.writeln("<td colspan=\"4\">");
		document.writeln("</td>");
		document.writeln("</tr>");
	}
	document.writeln("</table>");

}
