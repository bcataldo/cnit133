function calculateInterest() {

var initial = 1000, amount = 0;
	
	for (var rate = 5; rate <= 10; rate++) 
	{
		for (var year = 1; year <= 10; year++) 
		{
			amount = initial *  Math.pow((1 + rate * 0.01), year);
			
			document.writeln("<tr>");
			document.write("<td>" + year + "</td>");
			document.write("<td>$" + amount.toFixed(2) + "</td>");
			document.write("<td>" + rate + " %</td>");
			document.writeln("</tr>");

		document.getElementById("amount" + year).value = amount; // output accumulated amount
}
}
}


} // end function