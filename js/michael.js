function process() {
    //declare and define variables
    var hours, rate, grossSal;

    for (var i = 1; i <= 6; i++) {
        hours = parseFloat(document.getElementById("hours" + i).value); // User input hours
        rate = parseFloat(document.getElementById("rate" + i).value); // User input rate

        //calculate total without overtime
        grossSal = hours * rate;

        if (hours <= 40) {
            // show results in form fields
            document.getElementById("hoursOut" + i).value = hours; // output user hours
            document.getElementById("rateOut" + i).value = rate; //User input rate
            document.getElementById("calGross" + i).value = grossSal;
        }

        // Overtime has been worked
        else {
            // Calculate straight time ( 40 hours * rate ) and add overtime ( hours over 40 * 1.5 * rate )
            grossSal = (40 * rate) + ((hours - 40) * (rate * 1.5));

            // Output gross for employee
            document.getElementById("hoursOut" + i).value = hours; // output user hours
            document.getElementById("rateOut" + i).value = rate; //User input rate
            document.getElementById("calGross" + i).value = grossSal; //user gross rate

        } // End else
    }
}
