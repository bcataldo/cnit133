function listValues() {



	//declare variables
	var infoOut, linesOut, linesOut1, lNum, i, text, text1;


	lNum = document.getElementById("list").value; // Get list option input by user
	//alert(lNum)

	//alerts if the number input is Not a number or not 1-3

	if (lNum > 3 || lNum <= 0 || isNaN(lNum))

		$.toast({
			text: "Please type in a number from 1 to 3!",
			heading: 'Hell-O',
			position: 'top-right',
			bgColor: '#337ab7',
			textColor: '#fff',
		})
		//alert("Please type in a number from 1 to 3");

	else {

		//the switch statement determines which list to choose
		switch (lNum) {
		case "1":
			infoOut = "<h4>Unordered List</h4>";
			linesOut = "<ul style='list-style-type: square'>";
			linesOut1 = "</ul>";
			break;


		case "2":
			infoOut = "<h4>Ordered List</h4>";
			linesOut = "<ol>";
			linesOut1 = "</ol>";
			break;

		case "3":
			infoOut = "<h4>Ordered Letter List</h4>";
			linesOut = "<ol style='list-style-type: upper-alpha'>";
			linesOut1 = "</ol>";
			break;
		}

		text1 = "";

		//the for statement writes each line of the list item
		for (i = 1; i < 4; i++) {



			text1 += "<li>List item " + i + "</li>";
		}
		//output the choice of the user by adding values of variables together;
		{
			text = infoOut + linesOut + text1 + linesOut1;

			document.getElementById("infoOut").innerHTML = text;
		}


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
			list: {
				required: true,
				number: true
			},
		}
	});
}); //end of function