				for (iRate = 5; iRate <= 10; iRate++) 
				{
					document.write('<table class=\'bump-space\'>');
					document.write('<tr><th>Year</th><th>Amount on Deposit' +
						'</th><th>Interest Rate</th></tr>')

					for (year = 1; year <= 10; year++) {

						document.write('<tr>');
						document.write('<td>' + year + '</td><td>' +
							(Math.pow((1 + (iRate / 100)), year) * 1000).toFixed(2) +
							'</td><td>' + (iRate / 100).toFixed(2) + '</td>');

						document.write('</tr>');
					}
				}
				document.write('</table>');