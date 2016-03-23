//need to create global variables for random numbers to have both functions work 	
function generateNum(){
var number1 = Math.floor(Math.random() * 9) + 1;
var number2 = Math.floor(Math.random() * 9) + 1;
var minNumber = -100;
var maxNumber = 40

randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max)
{
    var randomNumber = Math.floor(Math.random()*(max-min+1)+min);

    // do whatever with randomNumber...
}
	
//generateNum Displays the question about the multiplication
}

document.getElementById("output1").innerHTML = 'How much is ' + number1 + ' times ' + number2 + '?';
}

//checkAns checks to see if the correct number was typed in
function checkAns(number1,number2) {
	numb1 = parseInt(number1);
	numb2 = parseInt(number2);
	ansIn = parseInt(document.getElementById("check").value);

	var ansCor = numb1 * numb2;



	if (ansCor == ansIn) {
		document.getElementById("ansCor").innerHTML = ansCor;
		document.getElementById("output1").innerHTML = ("Very Good!");
		
		

	} else

	{	
		document.getElementById("output2").innerHTML = ("No. Please try again.");
		document.getElementById("ansIn").innerHTML = ansIn;

	}
}

//Display the conversion in output field in form
//document.getElementById("output1").value = number1;
//document.getElementById("output2").value = number2;
//}
//}

//the process1 function is called if the user clicks the Celsius to Farenheit button 	


//function converts to either farenheit or celsius depending on the button