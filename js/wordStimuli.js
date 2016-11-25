var word_stimuli = {0:
                      {words:["zapato","cocaína","viaje"],
                        context:"practice"},
                    1:
                      {words:["baloncesto","cobra","dólar"],
                        context:"practice"},
                    2:
                      {words:["apartamento","sal","zanahoria","algodón","oxígeno","águila","cáncer","acero"],
                        context:""},
                    3:
                      {words:["martillo","camiseta","abogado","espada","tambor","camión","araña","templo"],
                        context:""},
                    4:
                      {words:["silla","tenedor","leche","naranja","arce","diésel","periódico","huracán"],
                        context:""},
                    5:
                      {words:["salmón","margarita","caballo","Papa","muñeca","vino","océano","senador"],
                        context:""}
                    };

var context_instructions = {
                            initial:"Hola, y gracias por venir. Vamos a mostrarte una lista de palabras, y nos gustaría que las calificaras para cada uno de los contextos. Para cada grupo de palabras, te proporcionaremos una tarea y una escala de calificación, y te pedimos que califiques las palabras de acuerdo a la tarea que se te ha dado en cada momento. Las palabras pueden caer en cualquier punto de la escala - depende de ti decidir dónde. La escala siempre va de uno a cinco y estará claramente enumerada; por favor, trata de utilizar toda la escala.</br></br><b>Ten cuidado:</b> cada palabra aparecerá por sólo cinco segundos, por lo que tendrás que tomar tus decisiones con bastante rapidez.",

                            practice:[
                              "Para esta tarea, imagina que te encuentras disfrutando de unas vacaciones prolongadas en un complejo de lujo, con todas tus necesidades básicas atendidas. Durante los próximos meses, querrás encontrar diferentes actividades para pasar el tiempo y maximizar el disfrute de tus vacaciones. Por favor califica cómo de relevante sería cada una de estas palabras para ti en esta situación de vacaciones. Algunas de las palabras pueden ser relevantes y otras no—la decisión depende de ti. Recuerda, la escala de relevancia va de uno a cinco, con uno indicando ‘totalmente irrelevante’ y cinco significando ‘extremadamente relevante’; por favor, trata de utilizar toda la escala. </br></br><b>Ten cuidado:</b> cada palabra aparecerá por sólo cinco segundos por lo que tendrás que tomar tus decisiones con bastante rapidez. Comenzaremos con algunas palabras de práctica.",

                              "Para esta tarea, nos gustaría que imagines que te encuentras en las praderas de un país extranjero, sin ningún material básico de supervivencia. Durante los próximos meses, tendrás que encontrar suministros estables de comida y agua y protegerte de los depredadores. Por favor, califica la relevancia que tiene para ti cada una de estas palabras en esta situación de supervivencia. Algunas de las palabras pueden ser relevantes y otras no, tú decides. Recuerda, la escala de relevancia va de uno a cinco, con uno indicando ‘totalmente irrelevante’ y cinco significando ‘extremadamente relevante’; por favor, trata de utilizar toda la escala.</br></br><b>Ten cuidado:</b> cada palabra aparecerá por sólo cinco segundos por lo que tendrás que tomar tus decisiones con bastante rapidez. Comenzaremos con algunas palabras de práctica."
                            ],

                            vacation:[
                              "Recuerda, en esta tarea, queremos que imagines que estás disfrutando de unas vacaciones prolongadas en un complejo de lujo con todas tus necesidades básicas atendidas. Durante los próximos meses, querrás encontrar diferentes actividades para pasar el tiempo y maximizar el disfrute de tus vacaciones. Vamos a mostrarte una lista de palabras, y nos gustaría que calificaras la relevancia que tiene para ti cada una de estas palabras en esta situación de vacaciones. ¿Tienes alguna pregunta sobre el experimento? Si no, puedes presionar 'continuar'.",

                              "En esta tarea, una vez más nos gustaría que imagines que estás disfrutando de unas vacaciones prolongadas en un complejo de lujo con todas tus necesidades básicas atendidas. Durante los próximos meses, querrás encontrar diferentes actividades para pasar el tiempo y maximizar el disfrute de tus vacaciones. Por favor, califica la relevancia que tiene para ti cada una de estas palabras en esta situación de vacaciones. Algunas de las palabras pueden ser relevantes y otras no, tú decides. Recuerda, la escala de relevancia va de uno a cinco, con uno indicando ‘totalmente irrelevante’ y cinco significando ‘extremadamente relevante’; por favor, trata de utilizar toda la escala."],

                            survival:[
                            "Recuerda, en esta tarea, queremos que imagines que te encuentras en las praderas de un país extranjero, sin ningún material básico de supervivencia. Durante los próximos meses, tendrás que encontrar suministros estables de comida y agua y protegerte de los depredadores. Vamos a mostrarte una lista de palabras, y nos gustaría que calificaras la relevancia que tiene para ti cada una de estas palabras en esta situación de supervivencia. ¿Tienes alguna pregunta sobre el experimento? Si no, puedes presionar 'continuar'.",

                            "En esta tarea, una vez más nos gustaría que imagines que te encuentras en las praderas de un país extranjero, sin ningún material básico de supervivencia. Durante los próximos meses, tendrás que encontrar suministros estables de comida y agua y protegerte de los depredadores. Por favor, califica la relevancia que tiene para ti cada una de estas palabras en esta situación de supervivencia. Algunas de las palabras pueden ser relevantes y otras no - tú decides. Recuerda, la escala de relevancia va de uno a cinco, con uno indicando ‘totalmente irrelevante’ y cinco significando ‘extremadamente relevante’; por favor, trata de utilizar toda la escala."],

                            distraction_task:"Ahora completarás una tarea de recordar dígitos. El ordenador te mostrará siete dígitos, uno a uno. Después de que hayan aparecido todos los dígitos, te pedimos que escribas los dígitos que has visto en orden de aparición. Si no puedes recordar todos los siete dígitos, introduce tantos dígitos como puedas recordar. El ordenador te dirá cuándo has completado la tarea.",

                            recall_task:"Ahora nos gustaría ver si puedes recordar las palabras que calificaste al principio del experimento. Por favor, anota las palabras de ambas tareas en tu hoja de respuestas. Puedes escribirlas en el orden que desees. Tendrás diez minutos para completar esta tarea. Además, después de cada minuto, escucharás un pitido; Cuando esto suceda, dibuja una línea después de la palabra que acabas de recordar. Un contador de tiempo en la parte superior de la pantalla te mostrará la cantidad de tiempo que te queda. Cuando te sientas preparado para comenzar, pulsa el botón ‘Continuar’; El temporizador te dirá cuánto tiempo te queda."
                          };

var word_data = [];

var distraction_digits = [1,2,3,4,5,6,7];

var answeredWords_survival = 0;
var answeredWords_vacation = 0;

function setup_wordData()
{
  for(var i = 0; i <= 5; i ++)
  {
    for(var j = 0; j < word_stimuli[i].words.length; j++)
    {
      word_data.push({ stimuli_word:word_stimuli[i].words[j],
                        context:word_stimuli[i].context,
                        recalled:false,
                        resp_time:"",
                        rating:{importance:"", arousal:"", valence:""}
                      });
    }
  }
}

function searchWord(_word)
{
    for (var i=0; i < word_data.length; i++) {
        if (word_data[i].stimuli_word === _word) {
            return i;
        }
    }
    return -1;
}

function get_words(stage)
{
  cur_context = word_stimuli[stage]["context"];
  return word_stimuli[stage]["words"];
}

function word_moveForward()
{
  rating = [-1,-1,-1];
  clickTime = -1;
  initTime = new Date().getTime() / 1000;

  $('#timer').pietimer('pause');

  if(curWord == words.length)
  {
    if( cur_block >= 5 )
    {
      document.getElementById("affective-slider").reset();
      if ($('#wordDisplay').hasClass('animated'))
        $('#wordDisplay').removeClass('animated fadeOut');

      $('#welcome').hide();
      $('#words-wrap').hide();
      document.getElementById('instructions-wrap').style.display = "block";

      cur_context = "distraction_task";
      showInstructions();
    }
    else
    {
      cur_block ++;
      curWord = 1;
      words = get_words(cur_block);

      document.getElementById("affective-slider").reset();
      if ($('#wordDisplay').hasClass('animated'))
        $('#wordDisplay').removeClass('animated fadeOut');


      $('#welcome').hide();
      $('#words-wrap').hide();
      document.getElementById('instructions-wrap').style.display = "block";
      showInstructions();
    }
  }
  else
  {
    document.getElementById("affective-slider").reset();
    if ($('#wordDisplay').hasClass('animated'))
      $('#wordDisplay').removeClass('animated fadeOut');

    document.getElementById("wordDisplay").innerHTML = words[curWord];
    curWord++;

    $('#timer').pietimer({
      seconds: 10,
      color: 'rgba(0, 0, 0, 0.8)',
      height: 50,
      width: 50,
          is_reversed: false
    },
    function(){
      if( cur_context == "practice" )
      {
        word_moveForward();
      }
      else
      {
        saveParticipantAnswer();
        word_moveForward();
      }
    });

    $('#timer').pietimer('start');
    var fadeOutWord = setTimeout(function()
    {
      $('#wordDisplay').addClass('animated fadeOut');
      // if( rating[0] != -1 && rating[1] != -1 )
      //   var goNext = setTimeout(function(){ word_moveForward(); }, 1000);

      // //If the word has already been rated
      // console.log(rating);
      // if( rating[0] != -1 && rating[1] != -1 )
      // {
      //   word_moveForward();
      // }
      // else
      // {
      //   $('#wordDisplay').addClass('animated fadeOut');
      // }

    }, 5000);
  }
}
