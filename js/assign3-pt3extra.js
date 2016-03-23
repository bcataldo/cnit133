
//need to generate two random numbers, like throwing dice 
//generateNum generates random numbers and then displays the question about the multiplication

 $(document).ready(function(){
    });
    function craps(){    
        $("#die").html(Math.floor(Math.random()*6 + 1));
		$("#die1").html(Math.floor(Math.random()*6 + 1));
	
		var die = parseFloat(document.getElementById("die").value); 
		var die1 = parseFloat(document.getElementById("die1").value); 

		var sum = die + die1;

		//Show summary results
	document.getElementById("sum").value = sum;


	}

//function generateNum(){
//	document.getElementById("outputyes").innerHTML = ("");
//	document.getElementById("outputno").innerHTML = ("");
//	document.getElementById("yes_no").className = "none";
// {
		
// number1 = Math.floor(Math.random() * 9) + 1;
 //number2 = Math.floor(Math.random() * 9) + 1;



//document.getElementById("output1").innerHTML = 'How much is ' + number1 + ' times ' + number2 + '?';
//}

//}
//checkAns clears the previous text 
//checks to see if the correct number was typed in
//displays whether answer is right or wrong
//asks if user wants to try again if she's right or else if she's wrong

//function checkAns() {
//	document.getElementById("outputyes").innerHTML = ("");
//	document.getElementById("outputno").innerHTML = ("");
	
//	numb1 = parseInt(number1);
//	numb2 = parseInt(number2);
//	ansIn = parseInt(document.getElementById("check").value);

//	var ansCor = numb1 * numb2;


//	if (ansCor == ansIn) {
//		document.getElementById("yes_no").className = "block";
//		document.getElementById("outputyes").innerHTML = ("Very Good! Do you want to try again?");
//				$("#myform")[0].reset();
		

		

//	} else

//	{	
//		document.getElementById("yes_no").className = "none";
//		document.getElementById("outputno").innerHTML = ("No. Please try again.");
		//document.getElementById("ansIn").innerHTML = ansIn;
//		$("#myform")[0].reset();
		

		

//	}
//}
