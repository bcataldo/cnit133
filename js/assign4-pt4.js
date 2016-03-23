function calculateAmount() {

	//declare variables
	var pNum, qProd, totalNum, totalSold = 0,
		cost, i;

	//cycle through for all 5 products with for statement   
	for (i = 1; i <= 5; i++)

	{

		pNum = parseInt(document.getElementById("prod" + i).value); // Get values as it cycles through the product #
		qProd = document.getElementById("qty" + i).value; // Get quantity as it cycles through each product

		//alert(pNum);
		//alert(qProd);


		//the switch statement sets the cost of each product for formula at end

		switch (pNum) {
		case 1:
			cost = 2.98;
			//alert(cost);
			break;

		case 2:
			cost = 4.50;
			break;

		case 3:
			cost = 9.98;
			break;

		case 4:
			cost = 4.49;
			break;

		case 5:
			cost = 6.87;
			break;

		}

		//final total cost by multiplying by number of product, cost set to 2 decimals;
		totalNum = parseFloat(cost * qProd);

		//total costs is calculated by adding each iteration to total sold
		totalSold = totalSold + totalNum;

		//output to table by ID plus decimal number fixed to two places

		document.getElementById("totalNum" + i).value = totalNum.toFixed(2);

		//output to table by ID to totalSold
		document.getElementById("totalSold").value = totalSold.toFixed(2);


	}

} // end function

//jquery for the flipping panel
$("#flip").click(function () {
	$("#panel").slideToggle("slow");
});

/* JQuery for validation
		displays error message if form input is not a number or empty
		*/

$(document).ready(function () {
	$("#myform").validate({
		// Rules for each input item
		rules: {
			qty1: {
				required: true,
				number: true
			},
			qty2: {
				required: true,
				number: true
			},
			qty3: {
				required: true,
				number: true
			},

			qty4: {
				required: true,
				number: true
			},
			qty5: {
				required: true,
				number: true
			},



		}
	});
}); //end of function