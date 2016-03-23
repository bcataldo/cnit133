
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Michael Downey | CNIT 133 Homework</title>

<link rel="stylesheet" type="text/css" href="http://themikedowney.com/master.css" />
<link rel="Shortcut icon" href="http://themikedowney.com/favicon.ico">
<style>
#results {float:left; margin:2px 0 0 30px;}
#myformid input {padding-left:3px; background-color: #F6F6F6;}

#hw_table {
	width:390px;
	background-color:#FFFFFF;
	margin:10px;
}
#hw_table a{ color:#888888; font-weight:bold; text-decoration:none;}
#hw_table a:hover{ color:#333333; font-weight:bold;}
#hw_table th { font-weight:bold; border-bottom:solid 2px #FAB689; }

#hw_table td{ text-align:left; padding:5px 0; margin-bottom:1px;}
#hw_table tr.highlight{ background-color:#e2e2e2;}
#hw_table td.number{padding-left:28px; font-size:14px;}
#hw_table td.date{padding-left:35px;}
#hw_table td.asmnt{padding-left:26px;}
#hw_table td.due{padding-right:30px; text-align:right; width:65px;}
#hw_table td.complete{padding-left:30px;}
#hw_table td.underline {border-bottom:2px solid #666;}

#hw_table.assignments td.number{padding:10px 3px 10px 10px; font-size:14px; width:7%; border-left:1px solid #e2e2e2;}
#hw_table td.last {border-bottom:solid 2px #FAB689; height:50px;}

#footer li.extra a {color:#990000; text-decoration:none;}
#footer li.extra a:hover {color:#fff;}
</style>

<SCRIPT type="text/JavaScript"><!--

/*This script inputs hours workded and rate of pay for three employees. Then figures out the gross pay by calculating overtime for hours worked over fourty and multiplying it by the rate of pay

This script uses one loop to calculate for the three employees*/

function calcPay()
{	
	var payrounded, mathall;// declaring variables
	var hourArray = new Array(); // declaring new Array
	var rateArray = new Array();
	var payArray = new Array();
		
	for (var i=0; i<3; i++)//does the proceedure below 3 times
	{
			hourArray[i] = document.inputform.hours[i].value; //get values from the form and puttng it in the array
			rateArray[i] = document.inputform.rate[i].value;  // looping through the form and the dot syntax because the form objects with the same name are in an array by default
	
		if (hourArray[i] > 40)// testing to see if employee worked over 40 hours
		{
			mathall = (((hourArray[i] - 40) * 1.5) + 40);//less 40 then multiplied by 1.5 for overtime and added back to 40
			hourArray[i] = mathall;// I couldn't get the previous line to work with just and array so I had to store it in a variable then put it back into the array
		
		}//end if
		
		payArray[i] = (Math.round((rateArray[i] * hourArray[i]) * 100)) / 100;//simple rounding	
		document.getElementById('answer' + i).innerHTML = ("$" + payArray[i]);//loops through the output incrementing and concatinating the element id
		
	}//end for

}// end calculateInt function

--></script>

</head>
<body>
<div id="page">
	<div id="container">		
				<div id="masthead_javascript">
			<div id="underlinemenu">
				<ul>
					<li><a href="../index.html" title="Assignment 1">Hw1</a></li>
					<li class="top_active">Hw2</li>
					<li><a href="../hw3.html" title="Assignment 3">Hw3</a></li>
					<li><a href="../hw4.html" title="Assignment 4">Hw4</a></li>
					<li><a href="../hw5.html" title="Assignment 5">Hw5</a></li>
					<li><a href="../hw6.html" title="Assignment 6">Hw6</a></li>
					<li><a href="../hw7.html" title="Assignment 7">Hw7</a></li>
					<li><a href="../hw8.html" title="Assignment 8">Hw8</a></li>
					<li><a href="../hw9.html" title="Assignment 9">Hw9</a></li>		
				</ul>
			</div>	
		</div>
		<div id="content"> 
  			<div id="main">
				 <div class="boxwrapper_large">
					<div class="boxtop_large"></div>
					<div class="boxmiddle">
					  <h3>CNIT 133 Homework Assignment 3 -  Part 3</h3>
		
 <p style="margin-top:20px">Create a webpage that contains a script that will determine the gross  pay for each of three employees. The company pays &quot;straight time&quot; for  the first 40 hours worked by each employee and pays &quot;time and a half&quot;  for all hours worked in excess of 40 hours. You are given a list of the  employees of the company, the number of hours worked last week and the  hourly rate of each employee. Your script should input this information  for each employee, determine the employee's gross pay and output HTML  or XHTML text that displays the employee's gross pay. Use prompts or a  form to input the data. Here is a page of <a href="http://fog.ccsf.edu/%7Emclancy/133/hw3_samppromp.html">sample prompts and sample output.</a></p>
 			<div style="width: 390px; margin:0 auto;">
 					<form name="inputform" id="myformid">
                   <table id="hw_table" cellpadding="0" cellspacing="0">            
				     <tbody>
                       <tr>
                         <th>Employee </th>
                         <th style="padding-left:15px;">Hours Workded </th>
                         <th style="padding-left:15px;">Hourly Rate </th>
                         <th style="padding-left:15px;">Gross Pay</th>
                       </tr>
                       <tr>
                         <td class="number">1</td>
                         <td class="date"><input type="text" name="hours" tabindex="1" size="3" style="margin-left:.4em; color:#333;" /></td>
                         <td class="asmnt">$<input type="text" name="rate" tabindex="2" size="4" style="margin-left:.4em; color:#333;" /></td>
                         <td class="due"><span id="answer0"></span></td>
                       </tr>
                       <tr class="highlight">
                         <td class="number">2</td>
                         <td class="date"><input type="text" name="hours" tabindex="3" size="3" style="margin-left:.4em; color:#333;" /></td>
                         <td class="asmnt">$<input type="text" name="rate" tabindex="4" size="4" style="margin-left:.4em; color:#333;" /></td>
                         <td class="due"><span id="answer1"></span></td>
                       </tr>
                       <tr>
                         <td class="number">3</td>
                         <td class="date"><input type="text" name="hours" tabindex="5" size="3" style="margin-left:.4em; color:#333;" /></td>
                         <td class="asmnt">$<input type="text" name="rate" tabindex="6" size="4" style="margin-left:.4em; color:#333;" /></td>
                         <td class="due"><span id="answer2"></span></td>
                       </tr>

                       <tr class="highlight">
                         <td class="number last"></td>
                         <td class="date last"><input type="button" onclick="calcPay()" value="SUBMIT" /></td>
                         <td class="asmnt last"><input type="reset" value="RESET" /></td>
                         <td class="due last"></td>
                       </tr>
			         </tbody>
                   </table>
                   </form>
                  	</div>
                    
					<div class="clearing"></div>
                    	
		   	  	   </div><!--end boxmiddle-->
					 <div class="boxbottom_large"></div>
				</div><!--end boxwrapper-->
  			</div><!-- end main -->
    </div><!-- end content -->	
		<div class="clearing"></div>		
		
		<div id="footer">
		<ul>
			<li><a href="../hw3.html" title="Assignment 3 Home">Assignment 3 Home</a></li>
			<li><a href="part1.html" title="part 1">Part 1</a></li>
			<li><a href="part2.html" title="part 2">Part 2</a></li>
			<li class="bottom_active">Part 3</li>
			<li><a href="part4.html" title="part 4">Part 4</a></li>
			<li><a href="extra.html" title="extra credit">Extra Credit</a></li>
			<li class="extra"><a href="../dive_bar.html" title="extra not-for-credit">Extra Not-For-Credit</a></li>
		</ul>

		</div><!-- end footer -->
		<div class="clearing"></div>		
  </div><!-- end container -->
</div><!-- end page -->
</body>
</html>