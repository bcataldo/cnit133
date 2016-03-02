

		function process() {

			//Declare variables

			var hwAvg, midExam, finalExam, ACR, finAvg, finGra;

			var errMsg1 = "<span style='font-weight: bold; color: red; font-size: 20px;'>Number must be between 0 and 100</span>";
			var errMsg2 = "<span style='font-weight: bold; color: red; font-size: 20px;'>Student must retake the course</span>";


			//get HW average value from form 

			hwavg = document.getElementById("hwAvg").value;

			//get mid-term exam value from form 

			midex = document.getElementById("midExam").value;


			//get final exam value from form 

			finex = document.getElementById("finalExam").value;

			//get ACR value from form 

			acrval = document.getElementById("ACR").value;


			// Validate input - if not a number then alert error msg 


			if (isNaN(hwavg) || isNaN(midex) || isNaN(finex) || isNaN(acrval) || hwavg === "" || midex === "" || finex === "" || acrval === "" || hwavg > 100 || hwavg < 0 || midex < 0 || midex > 100 || acrval < 0 || acrval > 100 || finex < 0 || finex > 100)


			{
				document.getElementById("errOut").innerHTML = errMsg1;
			} else {

				//Convert input string to numeric 


				hwavgP = parseInt(hwavg);
				midexP = parseInt(midex);
				finexP = parseInt(finex);
				acrvalP = parseInt(acrval);

				//Calculate final grade

				finalAvg = (.5 * hwavgP) + (.2 * midexP) + (.2 * finexP) + (.1 * acrvalP);



				document.getElementById("results").value = Math.round(finalAvg);

				//Note: use true in switch statement and ranges for finalAvg and grades will work

				switch (true) {



				case (finalAvg >= 90):
					document.forms["myform"].elements["summary"].value = ("A")
					break;


				case (finalAvg >= 80):
					document.forms["myform"].elements["summary"].value = ("B")
					break;


				case (finalAvg >= 70):
					document.forms["myform"].elements["summary"].value = ("C")
					break;

				case (finalAvg >= 60):
					document.forms["myform"].elements["summary"].value = ("D")
					document.getElementById("errOut").innerHTML = errMsg2;

					break;

				default:
					document.forms["myform"].elements["summary"].value = ("F")


					document.getElementById("errOut").innerHTML = errMsg2;
					break;

					//end switch logic
				}

				//end else logic
			}



			//end function
		}

