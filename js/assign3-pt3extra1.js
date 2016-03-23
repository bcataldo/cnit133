//need to set global variable point to false in beginning  
function first-roll() {
var point = false;
}


//function rolls two dice and then checks to see if there is a point, then says win/lose accordingly

function rolldice() {

	var number1 = Math.floor(Math.random() * 6) + 1;
	var number2 = Math.floor(Math.random() * 6) + 1;
	var sum = number1 + number2;


	document.getElementById("die").innerHTML = 'You have rolled ' + number1;
	document.getElementById("die1").innerHTML = 'You have rolled ' + number2;
	document.getElementById("sum").innerHTML = 'The sum of your rolls is ' + sum;

	if (point == false) {

		if (sum == 7) || (sum == 11) {
			document.getElementById("output").innerHTML = 'You are a Winner!';
			
		} else if (sum == 2) || (sum == 3) || (sum == 12) {

			document.getElementById("output").innerHTML = 'Craps to You';
			
		} else if (sum == 4 || sum == 5 || sum == 6 || sum == 8 || sum == 9 || sum == 10) {

			point = true;
			
			document.getElementById("point").innerHTML = sum;
		}
		
	} else {
		if (sum == document.getElementById("point").innerHTML) {
			
			document.getElementById("output").innerHTML = 'You are a Winner!';

			point = false;
			
		} else if (sum == 7) {
			
			document.getElementByID("result").innerHTML = "Craps to you";
			
			point = false;
			
		} else {
			document.getElementByID("result").innerHTML = "Roll again";
		}
	}


}
