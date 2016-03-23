	//declare variables
	var day, gift, carol, carol1, text = "",
		text1 = "",
		dayOut, giftOut, repeat;

	//use the for and switch statements to generate the text for each section
	// cycles through the numbers and generates the text
	//using two separate table cells to align the text.

	for (day = 1; day <= 12; day++)

	{

		//the switch statement determines the words to print out for the day
		switch (day) {
		case 1:
			dayOut = "<strong>First </strong><br />";
			gift = 1;
			break;

		case 2:
			dayOut = "<strong>Second </strong><br />";
			gift = 2;
			break;

		case 3:
			dayOut = "<strong>Third </strong><br />";
			gift = 3;
			break;

		case 4:
			dayOut = "<strong>Fourth </strong><br /><br />";
			gift = 4;

			break;
		case 5:
			dayOut = "<strong>Fifth </strong><br /><br />";
			gift = 5;

			break;

		case 6:
			dayOut = "<strong>Sixth </strong><br /><br />";
			gift = 6;

			break;

		case 7:
			dayOut = "<strong>Seventh </strong><br /><br /><br />";
			gift = 7;

			break;

		case 8:
			dayOut = "<strong>Eighth </strong><br /><br /><br />";
			gift = 8;

			break;

		case 9:
			dayOut = "<strong>Ninth </strong><br /><br /><br />";
			gift = 9;

			break;

		case 10:
			dayOut = "<strong>Tenth </strong><br /><br /><br /><br />";
			gift = 10;

			break;

		case 11:
			dayOut = "<strong>Eleventh </strong><br /><br /><br /><br />";
			gift = 11;

			break;

		case 12:
			dayOut = "<strong>Twelfth </strong>";
			gift = 12;

			break;

		}

		carol = "";
		carol += text + "On the " + dayOut + "<br /><br />";

		text = carol;

		document.getElementById("carol").innerHTML = text;
	}

	//cycles through the numbers and uses a different switch statement, as requested in the assignment,
	// to generate the second part of the statement

	{

		for (gift = 1; gift <= 12; gift++)

		{
			switch (gift) {
			case 1:
				giftOut = "A Partridge in a Pear Tree.";
				break;

			case 2:
				giftOut = "Two Turtle Doves and a Partridge in a Pear Tree.";
				break;

			case 3:
				giftOut = "Three French Hens, Two Turtle Doves and a Partridge in a Pear Tree.";
				break;

			case 4:
				giftOut = "Four Calling Birds, Three French Hens, Two Turtle Doves and a Partridge in a Pear Tree.";
				break;
			case 5:
				giftOut = "Five Golden Rings, Four Calling Birds, Three French Hens, Two Turtle Doves and a Partridge in a Pear Tree.";
				break;

			case 6:
				giftOut = "Six Geese a Laying, Five Golden Rings, Four Calling Birds, Three French Hens, Two Turtle Doves and a Partridge in a Pear Tree.";
				break;

			case 7:
				giftOut = "Seven Swans a Swimming, Six Geese a Laying, Five Golden Rings. Four Calling Birds, Three French Hens, Two Turtle Doves and a Partridge in a Pear Tree.";
				break;

			case 8:
				giftOut = "Eight Maids a Milking, Seven Swans a Swimming, Six Geese a Laying, Five Golden Rings. Four Calling Birds, Three French Hens, Two Turtle Doves and a Partridge in a Pear Tree.";
				break;

			case 9:
				giftOut = "Nine Ladies Dancing, Eight Maids a Milking, Seven Swans a Swimming, Six Geese a Laying, Five Golden Rings. Four Calling Birds, Three French Hens, Two Turtle Doves and a Partridge in a Pear Tree.";
				break;

			case 10:
				giftOut = "Ten Lords a Leaping, Nine Ladies Dancing, Eight Maids a Milking, Seven Swans a Swimming, Six Geese a Laying, Five Golden Rings. Four Calling Birds, Three French Hens, Two Turtle Doves and a Partridge in a Pear Tree.";
				break;

			case 11:
				giftOut = "Eleven Pipers Piping, Ten Lords a Leaping, Nine Ladies Dancing, Eight Maids a Milking, Seven Swans a Swimming, Six Geese a Laying, Five Golden Rings. Four Calling Birds, Three French Hens, Two Turtle Doves and a Partridge in a Pear Tree.";
				break;

			case 12:
				giftOut = "Twelve Drummers Drumming, Eleven Pipers Piping, Ten Lords a Leaping, Nine Ladies Dancing, Eight Maids a Milking, Seven Swans a Swimming, Six Geese a Laying, Five Golden Rings. Four Calling Birds, Three French Hens, Two Turtle Doves and a Partridge in a Pear Tree.";
				break;

			}

			carol1 = "";

			carol1 += text1 + "day of Christmas my true love brought to me: " + giftOut + "<br /><br />";

			text1 = carol1;

			document.getElementById("giftOut").innerHTML = text1;

		}
	} //end of program


	//jquery for the flipping panel
	$("#flip").click(function () {
		$("#panel").slideToggle("slow");
	});

	//jquery to animate the partridge across the page 
	//(selector).animate({styles},speed,easing,callback)

	$(document).ready(function () {
		function beeLeft() {
			$("#b").animate({
				left: "+=100",
				top: "100px"
			}, 2500, "swing", beeRight);
		}

		function beeRight() {
			$("#b").animate({
				left: "+=50",
				top: "150px"
			}, 1500, "swing", beeDown);
		}

		function beeDown() {
			$("#b").animate({
				left: "+=20",
				top: "250px"
			}, 2500, "swing", beeLeft);
		}
		beeRight();
	});