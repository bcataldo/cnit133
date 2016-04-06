// jquery validation of form

$(document).ready(function(){

$("#myform").validate({

		messages: {
			city: "Please enter a city",
                        bird: "Please choose a bird",
                        food: "Please choose at least one food",
                        season: "Please choose a season",
	    },

/* the following place an error msg after the radio and checkbox elements */

errorPlacement: function(error, element) {
if ( element.is(":radio") || element.is(":checkbox")) {
error.appendTo( element.parent());
} else {
error.insertAfter(element);
}
} // end errorPlacement

	  
});

});


//jquery for the draggable
$("#draggable").draggable();

//jquery for the info box
$("#flip").click(function () {
	$("#panel").slideToggle("slow");
});