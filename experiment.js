// Quiz result options in a separate object for flexibility
$(document).ready(function() {
    
// global variables
//var quizSteps = $('#quizzie .quiz-step');

// for each step in the quiz, add the selected answer value to the total score
// if an answer has already been selected, subtract the previous value and update total score with the new selected answer value
// toggle a visual active state to show which option has been selected

//$('#welcome').click(function () {

 /*  $('#welcome').hide();
   $('#pract-instructions1').show();
   //countdown( "countdown", 0, 10 );
});
 $('#pract-instructions1').click(function () {
  $('#pract-instructions1').hide();
  document.getElementById('myDiv').style.display = "block";
  document.getElementById('myDiv2').style.display = "block";
  practexp();*/
 //});



/*var practice = ['word 1', 'word 2', 'word 3', 'word 4', 'word 5'];
var vacation = ['vacay 1', 'vacay 2', 'vacay 3', 'vacay 4', 'vacay 5'];
 i = 0,
 $div = $('#myDiv');
 $div2 = $('#myDiv2');

function practexp(){
  countdown( "countdown", 0, 10 );
$div.text(practice[i++ % practice.length]);
    if(i==practice.length){
      $("#myDiv").hide();
      $("#myDiv2").hide();
      $("#pract-instructions2").show();
      $("#countdown").hide();
      return startexp();
      
}
    setTimeout(function () {
        $("#myDiv").hide();
        $("#myDiv2").show();
        setTimeout(function () {
            $("#myDiv").show();
            practexp();
        }, 10000);
    }, 10000);

}

function startexp(){
  countdown( "countdown", 0, 10 );
$div.text(vacation[i++ % vacation.length]);
    if(i==vacation.length){
      $("#myDiv").hide();
      $("#myDiv2").hide();
      $("#pract-instructions2").show();
      $("#countdown").hide();

}
    setTimeout(function () {
        $("#myDiv").hide();
        $("#myDiv2").show();
        setTimeout(function () {
            $("#myDiv").show();
            startexp();
        }, 1000);
    }, 1000);

}



//startexp();
function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}
*/
});