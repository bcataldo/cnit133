}
//checkAns clears the previous text 
//checks to see if the correct number was typed in
//displays whether answer is right or wrong
//asks if user wants to try again if she's right or else if she's wrong

function checkAns() {
	document.getElementById("outputyes").innerHTML = ("");
	document.getElementById("outputno").innerHTML = ("");
	
	numb1 = parseInt(number1);
	numb2 = parseInt(number2);
	ansIn = parseInt(document.getElementById("check").value);

	var ansCor = numb1 * numb2;


	if (ansCor == ansIn) {
		document.getElementById("yes_no").className = "block";
		document.getElementById("outputyes").innerHTML = ("Very Good! Do you want to try again?");
				$("#myform")[0].reset();
		

		

	} else

	{	
		document.getElementById("yes_no").className = "none";
		document.getElementById("outputno").innerHTML = ("No. Please try again.");
		//document.getElementById("ansIn").innerHTML = ansIn;
		$("#myform")[0].reset();
		

		

	}
}
