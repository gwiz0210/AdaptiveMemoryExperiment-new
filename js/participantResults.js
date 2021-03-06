var participant;

var totalWordsAnswered_survival;
var totalWordsAnswered_vacation;
var rating;
var parCondition;// = 1;

function setup_participant()
{
  totalWordsAnswered_survival = 0;
  totalWordsAnswered_vacation = 0;

  rating = [-1,-1,-1];

  participant = { timestamp:"",
                  birthday:"",
                  degree:"",
                  condition:"",
                  survival:{familiarity:-1, arousal:-1},
                  vacation:{familiarity:-1, arousal:-1},
                  meanRating_survival:{mean_importance:0, mean_arousal:0, mean_valence:0},
                  meanRating_vacation:{mean_importance:0.0, mean_arousal:0.0, mean_valence:0.0},
                  meanRememberedWords_survival:0.0,
                  meanRememberedWords_vacation:0.0,
                  responseTime_survival:0.0,
                  responseTime_vacation:0.0,
                  wordsRecalled:[],
                  misspelled_words:[]
                };
}

// How do we assign the conditions to each participant?
function set_ParticipantInfo()//_timestamp, _birthday, _degree, _condition)
{
    var _birthday = document.getElementById("p_birthday").value;
    var _degree = document.getElementById("p_degree").value;
    var _condition = document.getElementById("p_condition").value;

    console.log("parCondition: "+parCondition+" "+_condition);
    if(_birthday != "" && _degree != "" && _condition != "")
    {
      console.log("condition: "+parseInt(_condition));
      var _timestamp = new Date().getTime();
      _condition = parseInt(_condition);
      participant.timestamp = _timestamp;
      participant.birthday = _birthday;
      participant.degree = _degree;
      participant.condition = _condition;
      //Randomize the words of each block
      word_stimuli[2]["words"] = shuffle(word_stimuli[2]["words"]);
      word_stimuli[3]["words"] = shuffle(word_stimuli[3]["words"]);
      word_stimuli[4]["words"] = shuffle(word_stimuli[4]["words"]);
      word_stimuli[5]["words"] = shuffle(word_stimuli[5]["words"]);

      //Randomize the order of the digits of the distraction task
      distraction_digits = shuffle(distraction_digits);

      if(parseInt(_condition) == 1) //SVSV
      {

          console.log("CONDITION 1");
        cur_context = "practice";
        cur_block = 0;

        word_stimuli[2]["context"] = "survival";
        word_stimuli[3]["context"] = "vacation";
        word_stimuli[4]["context"] = "survival";
        word_stimuli[5]["context"] = "vacation";

        setup_wordData();

        $('link[rel=stylesheet][href~="css/login-style.css"]').remove();

        $('#welcomeForm').hide();
        document.getElementById("welcomeDisplay").innerHTML = context_instructions["initial"];
        document.getElementById('welcome').style.display = "block";

        showInstructions();
      }
      else if(parseInt(_condition) == 0)//VSVS
      {
        console.log("CONDITION 0");
        cur_context = "practice";
        cur_block = 0;

        word_stimuli[2]["context"] = "vacation";
        word_stimuli[3]["context"] = "survival";
        word_stimuli[4]["context"] = "vacation";
        word_stimuli[5]["context"] = "survival";

        setup_wordData();

        $('link[rel=stylesheet][href~="css/login-style.css"]').remove();

        $('#welcomeForm').hide();
        document.getElementById("welcomeDisplay").innerHTML = context_instructions["initial"];
        document.getElementById('welcome').style.display = "block";


        showInstructions();
      }
      else alert("WRONG CONDITION!! Please do it again");


    }

}

function add_meanRatingSurvival(_mean_importance, _mean_arousal, _mean_valence, _responseTime)
{
  if( _mean_importance >= 0 && _mean_arousal >= 0 )// && _mean_valence >= 0 ) // if the 3 have been answered
  {
    totalWordsAnswered_survival ++;
    participant.meanRating_survival.mean_importance += _mean_importance;
    participant.meanRating_survival.mean_arousal += _mean_arousal;
    participant.meanRating_survival.mean_valence += _mean_valence;
  }

  console.log("response time survival: "+participant.responseTime_survival+" // response time: "+_responseTime);
  participant.responseTime_survival += _responseTime;
  // rating = [-1,-1,-1];
}

function add_meanRatingVacation(_mean_importance, _mean_arousal, _mean_valence, _responseTime)
{
  if( _mean_importance >= 0 && _mean_arousal >= 0 )// && _mean_valence >= 0 ) // if the 3 have been answered
  {
    totalWordsAnswered_vacation ++;
    participant.meanRating_vacation.mean_importance += _mean_importance;
    participant.meanRating_vacation.mean_arousal += _mean_arousal;
    participant.meanRating_vacation.mean_valence += _mean_valence;
  }

    console.log("response time vacation: "+participant.responseTime_vacation+" // response time: "+_responseTime);
  participant.responseTime_vacation += _responseTime;
  // rating = [-1,-1,-1];
}

function rateFami(val, _id)
{

  if( _id == 0 )
  {
    if(cur_context == "survival")
    {
      participant.survival.familiarity = val;
      if(participant.survival.arousal != -1 )
      {
        console.log("DISPLAY!");
        document.getElementById('1').style.display = "block";
      }
    }else if (cur_context == "vacation")
    {
      participant.vacation.familiarity = val;
      if(participant.vacation.arousal != -1 )
      {
        console.log("DISPLAY!");
        document.getElementById('1').style.display = "block";
      }

    }
  }
  else
  {
    if(cur_context == "survival")
    {
      participant.survival.arousal = val;
      if(participant.survival.familiarity != -1 )
      {
        console.log("DISPLAY!");
        document.getElementById('1').style.display = "block";
      }

        console.log("1 / survival -- arousal: "+participant.vacation.arousal+" familiarity: "+participant.vacation.familiarity);

    }else if (cur_context == "vacation")
    {
      participant.vacation.arousal = val;
      if(participant.vacation.familiarity != -1 )
      {
        console.log("DISPLAY!");
        document.getElementById('1').style.display = "block";
      }
      console.log("1 / vacation -- arousal: "+participant.vacation.arousal+" familiarity: "+participant.vacation.familiarity);
    }
  }
}

function rateWord(val, id)
{
    rating[id] = val;
    clickTime = new Date().getTime() / 1000;

    if( rating[0] != -1 && rating[1] != -1 && ( cur_context == "survival" || cur_context == "vacation" ))// && rating[2] != -1 )
    {
      saveParticipantAnswer(parseFloat(rating[0]), parseFloat(rating[1]), parseFloat(rating[2]));
      console.log("participant answer");
    }
}

function saveParticipantAnswer(_imp, _ar, _va)
{
  var _importance = _imp;
  var _arousal = _ar;
  var _valence = _va;
  var _respTime = wordTime/1000;

  if( clickTime != -1 )
  {
    _respTime = clickTime - initTime;
  }

  var ind = searchWord(words[curWord-1]);
  if(ind != -1)
  {
    console.log("before save word data: "+_respTime+" "+_importance+" "+_arousal+" "+_valence);
    word_data[ind].resp_time = _respTime;
    word_data[ind].rating.importance = _importance;
    word_data[ind].rating.arousal = _arousal;
    word_data[ind].rating.valence = _valence;

    console.log(word_data[ind]);
  }

  switch(cur_context)
  {
    case "survival":
      answeredWords_survival ++;

      console.log("survival: "+_respTime+" "+_importance+" "+_arousal+" "+_valence);
      add_meanRatingSurvival(_importance, _arousal, _valence, _respTime);
      break;

    case "vacation":
      answeredWords_vacation ++;

        console.log("vacation: "+_respTime+" "+_importance+" "+_arousal+" "+_valence);
      add_meanRatingVacation(_importance, _arousal, _valence, _respTime);
      break;
  }


  //  if( _respTime >= wordTime ) word_moveForward();
}



/*
To shuffle the arrays: words, digits for the distraction task...
*/
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
