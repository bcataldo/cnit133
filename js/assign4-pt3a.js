

function calculateInterest()
{	
	var rate, principal, y;// declaring variables
	var amount = new Array();//stores each amount in an address	
	var y = parseFloat(document.myform.years.value);
	var rate = parseFloat(document.myform.rate.value);
	
	for (var j=5; j<=10; j++)//does the proceedure below 6 times to iterate the through the five percentage rates
	{		
		a = document.myform.principal.value; //get principal each time to erase the value set in the last loop
		r = document.myform.rate[j].value;//gets the 6 percentage rates one at a time
		percent = r/100;//moves the decimal place in the percentage rate to use in the formula below
	}
		for (var i=1; i<=n; i++)//does the procedure as many times as there are years		
		{		
			a = (1 + percent)*a;//calculate percentage rate and stores the new amout for the next loop
		}//end  calculate interest for loop
	
	}//end iterate percentage rate for loop
	document.getElementById('results[1]').value = a;//spit out the contents of the array	
}// end calculateInt function
