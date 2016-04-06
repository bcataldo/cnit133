// function to show the census info the user is asking for
// set up an array of info 

var censusArray = [ ["AL", "ALABAMA", "Montgomery", "4,779,736"],                     
                ["AK", "ALASKA", "Juneau", "710,231"],  
                ["AZ", "ARIZONA", "Phoenix", "6,392,017"],
                ["AR", "ARKANSAS", "Little Rock", "2,915,918"],
				 ["CA",	"CALIFORNIA", "Sacramento",	"37,253,956"],
				  ["CO", "COLORADO", "Denver", "5,029,196"]] ;    


function censusInfo()
   
{   

    var searchKey = document.forms["SearchForm"].elements["stateName"].value;  //get searchkey from form input box
    searchKey = searchKey.toUpperCase();     //change search key to upper case
    
    var found = false;
    for (var row = 0; row < censusArray.length; row++) //loop for 6 rows
     {
	
     if ((censusArray[row][0] == searchKey) || (censusArray[row][1] == searchKey))

                 //check if search key = 1st or 2nd element of each row
     { 

              //if search key = 1st or 2nd element of a particular row
              //then place in input boxes for state name, capital and population in the 2nd, 3rd and 4th elements

       document.forms["SearchForm"].elements["name"].value = censusArray[row][1];
       document.forms["SearchForm"].elements["capital"].value = censusArray[row][2];  
	document.forms["SearchForm"].elements["population"].value = censusArray[row][3];  

       row = censusArray.length;   //ends loop if match found
       found = true;
       
     }
           
  }

  if ( found == false ) {
   document.forms["SearchForm"].elements["comment"].value= "Please type in a valid state"; 
       }

}


//jquery for dialog prompting box
//fades in and out

$(function() {

$( "#dialog" ).dialog({
autoOpen: false,
show: {
effect: "fade",
duration: 1000
},

hide: {
effect: "fade",
duration: 500
}
});

$( "#opener" ).click(function() {
$( "#dialog" ).dialog( "open" );
});
});


//jquery for the info box
$("#flip").click(function () {
	$("#panel").slideToggle("slow");
});