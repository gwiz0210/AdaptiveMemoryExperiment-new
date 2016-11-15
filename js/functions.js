//General
var stage = 0;
var words;
var nParticipants;
var initTime;
var clickTime;
var condition;
var seconds_left;

var renew_word;

var cur_context; //inital - practice(block[0,1]) - vacation(block[2,4]//block[3,5]) - survival(block[3,5]//block[2,4]) - distraction_task - recall_task
var cur_block = 0;

var curWord;

var wordTime = 10000;

function init()
{
  curWord = 1;
  initTime = new Date().getTime() / 1000;
  words = get_words(cur_block);

  setup_participant();

  document.getElementById("welcomeDisplay").innerHTML = context_instructions["initial"];
}

function showInstructions()
{
  if (cur_context == "practice")
  {
    document.getElementById("instructionsDisplay").innerHTML = context_instructions[cur_context][cur_block];
  }
  else if( cur_context == "survival" || cur_context == "vacation")
  {
    if (cur_block <= 3)
    {
      document.getElementById("instructionsDisplay").innerHTML = context_instructions[cur_context][0];
    }
    else
    {
      document.getElementById("instructionsDisplay").innerHTML = context_instructions[cur_context][1];
    }

  }
  else // initial, distraction, or recall
  {
    document.getElementById("instructionsDisplay").innerHTML = context_instructions[cur_context];
  }

  // var countdown_timer = setInterval(function() {
  //     document.getElementById('timer_div').innerHTML = --seconds_left;
  //
  //     if (seconds_left <= 0)
  //     {
  //         document.getElementById('timer_div').innerHTML = 'You are ready';
  //         clearInterval(countdown_timer);
  //     }
  // }, 1000);
}

function showWords()
{
  //console.log("SHOW WORDS 0");
  document.getElementById("wordDisplay").innerHTML = words[0];

  var uploadWord = function()
  {
      //console.log("sw: uploadWord");

      if( cur_context == "practice" )
      {

        //console.log("sw: word_moveForward");
        word_moveForward();
      }
      else
      {
        //console.log("sw: saveParticipantAnswer");
        saveParticipantAnswer();
      }
  }

  renew_word = setInterval(uploadWord, wordTime);

  // var _word_countdown_timer = setInterval(function() {
  //     document.getElementById('timer_div').innerHTML = --seconds_left;
  //
  //     if (seconds_left <= 0)
  //     {
  //         document.getElementById('timer_div').innerHTML = 'You are ready';
  //         clearInterval(_word_countdown_timer);
  //     }
  // }, 1000);

}

function show_distractionTask()
{
  $('#welcome').hide();
  $('#words-wrap').hide();
  $('#instructions-wrap').hide();
  $('#disAnsw').hide();
  document.getElementById('distraction-wrap').style.display = "block";

  var id_distractionDigit = 1;
  document.getElementById('distractionDisplay').innerHTML = distraction_digits[0];

  var showDistractionDigits = setInterval(function() {

      if (id_distractionDigit == distraction_digits.length)
      {
          clearInterval(showDistractionDigits);
          answer_distractionTask();
      }
      else
      {
        document.getElementById('distractionDisplay').innerHTML = distraction_digits[id_distractionDigit];
        id_distractionDigit ++;
      }
  }, 1000);

}

function answer_distractionTask()
{
  $('#welcome').hide();
  $('#words-wrap').hide();
  $('#instructions-wrap').hide();
  $('#distractionDisplay').hide();
  document.getElementById('disAnsw').style.display = "block";

}

function show_recallTask()
{
  $('#instructions-wrap').hide();
  document.getElementById('recall-wrap').style.display = "block";

}

function answer_recallTask()
{
  var _recalledWords = document.getElementById('recallAnswers').value;
  //console.log("recalled words: "+_recalledWords);
  var res = _recalledWords.replace(/ /g,"");
  //console.log(res);
  var _arrayWords = res.split(',');
  console.log(_arrayWords);
  $.each(_arrayWords, function(i, el){
    if($.inArray(el, participant.wordsRecalled) === -1) participant.wordsRecalled.push(el);
  });

  // participant.wordsRecalled = res.split(',');
  console.log(participant.wordsRecalled);

  for(var i = 0; i <= participant.wordsRecalled.length; i++)
  {
    var ind = searchWord(participant.wordsRecalled[i]);

    if( ind != -1 )
    {
      //FOUND
      word_data[ind].recalled = true;
      if(word_data[ind].context == "survival")
      {
        participant.meanRememberedWords_survival ++;
      }
      else if(word_data[ind].context == "vacation")
      {
        participant.meanRememberedWords_vacation ++;
      }
    }
    else
    {
      //NOT FOUND
      participant.misspelled_words.push(participant.wordsRecalled[i]);
    }
  }

  /*----------- CALCULATE THE MEANS ------------*/
  console.log("survival answered: "+answeredWords_survival);
  console.log("raw-> im: "+participant.meanRating_survival.mean_importance+" ; ar: "+  participant.meanRating_survival.mean_arousal+" ; val: "+participant.meanRating_survival.mean_valence);
  participant.meanRating_survival.mean_importance /= answeredWords_survival;
  participant.meanRating_survival.mean_arousal /= answeredWords_survival;
  participant.meanRating_survival.mean_valence /= answeredWords_survival;
  console.log("mean-> im: "+participant.meanRating_survival.mean_importance+" ; ar: "+  participant.meanRating_survival.mean_arousal+" ; val: "+participant.meanRating_survival.mean_valence);

  participant.meanRating_vacation.mean_importance /= answeredWords_vacation;
  participant.meanRating_vacation.mean_arousal /= answeredWords_vacation;
  participant.meanRating_vacation.mean_valence /= answeredWords_vacation;

  participant.meanRememberedWords_survival /= 16;
  participant.meanRememberedWords_vacation /= 16;
  /*-------------------------------------------*/


  /*------- SAVE THE DATA TO FILES ------------*/
  var hiddenElement = document.createElement('a');

  hiddenElement.href = 'data:attachment/text,' + JSON.stringify(word_data);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'word_data.json';
  hiddenElement.click();

  hiddenElement.href = 'data:attachment/text,' + JSON.stringify(participant);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'participant_data.json';
  hiddenElement.click();
  /*--------------------------------------------*/
}


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
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}
