// function to show the salary range for individuals
// set up an array of info 
//initialize variables

var total = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
var bonusSal, bonusSal1, entry;

function start() {
	for (var i = 0; i < total.length; ++i)
		total[i] = 0; //initialize array counters to 0
}

function addEntry() {


	bonusSal = 200 + parseInt(document.getElementById("newSales").value) * 0.09; //calc bonus by multiplying percentage bonus and adding base pay
	bonusSal1 = bonusSal.toFixed(2); //round salary to integer


	if (isNaN(bonusSal1)) //check for numbers and alert if not 
		window.alert("Please enter a number");

	else
	//add to individual array counter depending on salary

	if (bonusSal1 <= 300)
		++total[0]
	else if (bonusSal1 <= 400)
		++total[1]
	else if (bonusSal1 <= 500)
		++total[2]
	else if (bonusSal1 <= 600)
		++total[3]
	else if (bonusSal1 <= 700)
		++total[4]
	else if (bonusSal1 <= 800)
		++total[5]
	else if (bonusSal1 <= 900)
		++total[6]
	else if (bonusSal1 <= 1000)
		++total[7]
	else
		++total[8];


	if (isNaN(bonusSal1)) //check for numbers  
		return
	else
		outputArray();
}

function outputArray() //info to display salary ranges
{
	document.getElementById("output").value =
		"This displays the number of individuals earning salaries" +
		" in the following ranges:\n" +
		"$200-$299 \t " + total[0] + "\n" +
		"$300-$399 \t " + total[1] + "\n" +
		"$400-$499 \t " + total[2] + "\n" +
		"$500-$599 \t " + total[3] + "\n" +
		"$600-$699 \t " + total[4] + "\n" +
		"$700-$799 \t " + total[5] + "\n" +
		"$800-$899 \t " + total[6] + "\n" +
		"$900-$999 \t " + total[7] + "\n" +
		"$1000 + \t " + total[8];

	document.getElementById("salesBonus").value = "$" + bonusSal1;
}


//jquery for the info box
$("#flip").click(function () {
	$("#panel").slideToggle("slow");
});