// go to new page when user makes a choice - on change 1st function and on click 2nd

function goToFavoriteSite(myForm1) {
    var myDestination1 = myForm1.newsSite1.options[myForm1.newsSite1.selectedIndex].value;
    window.location = myDestination1;
}

function goToFavoriteSite2(myForm2) {
    var myDestination2 = myForm2.newsSite2.options[myForm2.newsSite2.selectedIndex].value;
    window.location = myDestination2;
}


//jquery for the info box
$("#flip").click(function () {
	$("#panel").slideToggle("slow");
});