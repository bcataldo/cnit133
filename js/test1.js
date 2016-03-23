<script language="javascript" type="text/javascript">
<!--
var i;
var grosspay;
var grosspayValue;
var overtimeValue;
var hours;
var pay;

for (i = 0; i < 3; i++)
{
  //Prompt for data
  hours = window.prompt( "Enter hours worked:");
  grosspay = window.prompt( "Enter your grosspay:" );
  
  //Convert to numbers
  grosspayValue = parseInt( grosspay );
  overtimeValue = parseInt( overtime );

  //Calculate regular pay
  if ( hours <= 40 )
  {
     pay = hours * grosspayValue;
    
  }
  else
    //calculate overtime pay
    if ( hours > 40 )
    {
       pay = ((hours - 40) * 1.5 * grosspay)  + (pay * grosspay );
    }
  document.write( "Total Pay is: " + pay + "<br />");
}

//-->
</script>
Last edited by JayM; 05-1