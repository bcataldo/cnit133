
		/* JQuery for validation
		displays error message if form input is not a number or empty
		*/

		$(document).ready(function () {
			$("#myform").validate({
				// Rules for each input item
				rules: {
					accountNo: {
						required: true,
						number: true
					},
					limit: {
						required: true,
						number: true
					},

					balance: {
						required: true,
						number: true
					},

					charges: {
						required: true,
						number: true
					},
					
					credits: {
						required: true,
						number: true
					}


				}
			});
		});


		function creditInfo() {



			if ($("#myform").valid()) {

				//declare variables

				var accountNo, limit, balance, charges, credit, summary, creditAv, creditDef, acct, lim, bal, char, cred;

				// define variables and get input number from getElementById

				var acct = parseFloat(document.getElementById("accountNo").value);
				var lim = parseFloat(document.getElementById("limit").value);
				var bal = parseFloat(document.getElementById("balance").value);
				var char = parseFloat(document.getElementById("charges").value);
				var cred = parseFloat(document.getElementById("credits").value);



				//Multiply to get the summary of the balance and round to 2 digits
				var summary = ((+bal + +char) - +cred).toFixed(2);
				
				//Subtract to get the summary of the credit available and round to 2 digits
				var creditAv = (+lim - +summary).toFixed(2);
				
				
				//Show new balance in form fields

				document.getElementById("summary").value = summary;

				
				//Show available credit in form fields balance vs. credit
if (creditAv > 0) {
        document.getElementById('creditAv').innerHTML=( "Credit available is $" +  creditAv);
    }
    else {
        document.getElementById("creditAv").value=( "Credit limit exceeded by $" + Math.abs(creditAv));
    }

				
				
			}
		}
