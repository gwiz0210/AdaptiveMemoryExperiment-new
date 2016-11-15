var participant;

var totalWordsAnswered_survival;
var totalWordsAnswered_vacation;
var rating;

function setup_participant()
{
  totalWordsAnswered_survival = 0;
  totalWordsAnswered_vacation = 0;

  rating = [-1,-1,-1];

  participant = { timestamp:"",
                  birthday:"",
                  degree:"",
                  condition:"",
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
function set_ParticipantInfo(_timestamp, _birthday, _degree, _condition)
{
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

    if(_condition == "1") //SVSV
    {
      cur_context = "practice";
      cur_block = 0;

      word_stimuli[2]["context"] = "survival";
      word_stimuli[3]["context"] = "vacation";
      word_stimuli[4]["context"] = "survival";
      word_stimuli[5]["context"] = "vacation";
    }
    else //VSVS
    {
      cur_context = "practice";
      cur_block = 0;

      word_stimuli[1]["context"] = "vacation";
      word_stimuli[2]["context"] = "survival";
      word_stimuli[3]["context"] = "vacation";
      word_stimuli[4]["context"] = "survival";
    }

    setup_wordData();
}

function add_meanRatingSurvival(_mean_importance, _mean_arousal, _mean_valence, _responseTime)
{
  if( _mean_importance >= 0 && _mean_arousal >= 0 && _mean_valence >= 0 ) // if the 3 have been answered
  {
    totalWordsAnswered_survival ++;
    participant.meanRating_survival.mean_importance += _mean_importance;
    participant.meanRating_survival.mean_arousal += _mean_arousal;
    participant.meanRating_survival.mean_valence += _mean_valence;
  }

  participant.responseTime_survival += _responseTime;
  rating = [-1,-1,-1];
}

function add_meanRatingVacation(_mean_importance, _mean_arousal, _mean_valence, _responseTime)
{
  if( _mean_importance >= 0 && _mean_arousal >= 0 && _mean_valence >= 0 ) // if the 3 have been answered
  {
    totalWordsAnswered_vacation ++;
    participant.meanRating_vacation.mean_importance += _mean_importance;
    participant.meanRating_vacation.mean_arousal += _mean_arousal;
    participant.meanRating_vacation.mean_valence += _mean_valence;
  }

  participant.responseTime_vacation += _responseTime;
  rating = [-1,-1,-1];
}

function rateWord(val, id)
{
    rating[id] = val;
    clickTime = new Date().getTime() / 1000;

    if( rating[0] != -1 && rating[1] != -1 && rating[2] != -1 )
    {
      clearInterval(renew_word);
      saveParticipantAnswer(parseFloat(rating[0]), parseFloat(rating[1]), parseFloat(rating[2]));
    }
}

function saveParticipantAnswer(_importance, _arousal, _valence)
{
  var _respTime = wordTime;

  if( clickTime != -1 )
  {
    _respTime = clickTime - initTime;
  }

  if( cur_context == "survival" )
  {
    answeredWords_survival ++;
    add_meanRatingSurvival(_importance, _arousal, _valence, _respTime);
  }
  else( cur_context == "vacation" )
  {
    answeredWords_vacation ++;
    add_meanRatingVacation(_importance, _arousal, _valence, _respTime);
  }

  var ind = searchWord(words[curWord-1]);
  if(ind != -1)
  {
    word_data[ind].resp_time = _respTime;
    word_data[ind].rating.importance = _importance;
    word_data[ind].rating.arousal = _arousal;
    word_data[ind].rating.valence = _valence;
  }
  word_moveForward();
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
