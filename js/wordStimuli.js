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
                            initial:"Hola, ¡y muchas gracias por venir! La tarea consiste en lo siguiente: <h2>Te vamos a pedir que te imagines en dos contextos diferentes y luego te vamos a mostrar una lista de palabras para que las analices en cada situación.</h2>Para cada <u>contexto</u> (se irán alternando), tendrás que valorar <b>cómo de familiar </b>te resulta la situación, y qué nivel de <b>intensidad emocional</b> te produce.</br></br>Para cada grupo de <u>palabras</u>, te proporcionaremos dos escalas de calificación; te pediremos que califiques las palabras en función de lo <b>apropiadas</b> que son en cada contexto, y de la <b>intensidad emocional</b> que te producen en cada contexto. Las palabras pueden tener cualquier puntuación, depende de ti decidir cuál es la mejor. Pero por favor, trata de utilizar <b>toda la escala</b> de valores.</br></br><b>Ten cuidado:</b> cada palabra aparecerá por sólo cinco segundos, por lo que tendrás que tomar tus decisiones con bastante rapidez.",

                            practice:[
                              "<h2><b>VACACIONES</b> <i>(PRÁCTICA)</i></h2><h2>Para esta tarea, imagina que te encuentras disfrutando de unas <b>vacaciones</b> prolongadas en un complejo de lujo, con todas tus necesidades básicas atendidas. Durante los próximos meses, querrás encontrar diferentes actividades para pasar el tiempo y maximizar el disfrute de tus <b>vacaciones</b>.</h2></br>Por favor, califica cómo de <b>relevante</b> y cómo de <b>intensa emocionalmente</b> sería cada una de estas palabras para ti en esta situación de vacaciones. Las palabras pueden tener cualquier puntuación, depende de ti decidir cuál es la mejor.</br></br>Recuerda, la escala de <b>relevancia</b> va de uno a cinco, con uno indicando <i>'totalmente irrelevante'</i> y cinco significando <i>'extremadamente relevante'</i>. La escala de <b>emoción</b> va de <i>'cara somnolienta'</i>, indicando baja intensidad emocional a <i>'cara espabilada'</i> indicando alta intensidad emocional. Por favor, trata de utilizar toda la escala. </br></br><b>Ten cuidado:</b> cada palabra aparecerá por sólo cinco segundos por lo que tendrás que tomar tus decisiones con bastante rapidez.",

                              "<h2><b>SUPERVIVENCIA</b> <i>(PRÁCTICA)</i></h2><h2>Para esta tarea, nos gustaría que imagines que te encuentras en las praderas de un país extranjero, sin ningún material básico de <b>supervivencia</b>. Durante los próximos meses, tendrás que encontrar suministros estables de comida y agua y protegerte de los depredadores.</h2></br>Por favor, califica la <b>relevancia</b> y la <b>intensidad emocional </b>que tienen para ti cada una de estas palabras en esta situación de <b>supervivencia</b>. Las palabras pueden tener cualquier puntuación, depende de ti decidir cuál es la mejor.</br></br>Recuerda, la escala de <b>relevancia</b> va de uno a cinco, con uno indicando <i>'totalmente irrelevante'</i> y cinco significando <i>'extremadamente relevante'</i>. La escala de <b>emoción</b> va de <i>'cara somnolienta'</i>, indicando baja intensidad emocional a <i>'cara espabilada'</i> indicando alta intensidad emocional. Por favor, trata de utilizar toda la escala. </br></br><b>Ten cuidado:</b> cada palabra aparecerá por sólo cinco segundos por lo que tendrás que tomar tus decisiones con bastante rapidez."
                            ],

                            vacation:[
                              "<h2><b>VACACIONES</b></h2><h2>Recuerda, en esta tarea, queremos que imagines que estás disfrutando de unas <b>vacaciones</b> prolongadas en un complejo de lujo con todas tus necesidades básicas atendidas. Durante los próximos meses, querrás encontrar diferentes actividades para pasar el tiempo y maximizar el disfrute de tus <b>vacaciones.</b></h2></br>Por favor, califica la <b>relevancia</b> y la <b>intensidad emocional </b>que tienen para ti cada una de estas palabras en esta situación de <b>vacaciones</b>. Las palabras pueden tener cualquier puntuación, depende de ti decidir cuál es la mejor.</br></br>Recuerda, la escala de <b>relevancia</b> va de uno a cinco, con uno indicando <i>'totalmente irrelevante'</i> y cinco significando <i>'extremadamente relevante'</i>. La escala de <b>emoción</b> va de <i>'cara somnolienta'</i>, indicando baja intensidad emocional a <i>'cara espabilada'</i> indicando alta intensidad emocional. Por favor, trata de utilizar toda la escala. </br></br><b>Ten cuidado:</b> cada palabra aparecerá por sólo cinco segundos por lo que tendrás que tomar tus decisiones con bastante rapidez.",

                              "<h2><b>VACACIONES</b></h2><h2>En esta tarea, una vez más nos gustaría que imagines que estás disfrutando de unas <b>vacaciones</b> prolongadas en un complejo de lujo con todas tus necesidades básicas atendidas. Durante los próximos meses, querrás encontrar diferentes actividades para pasar el tiempo y maximizar el disfrute de tus <b>vacaciones. </b></h2></br>Vamos a mostrarte una lista de palabras, y nos gustaría que calificaras la <b>relevancia</b> y la<b> intensidad emocional</b> que tienen para ti cada una de estas palabras en esta situación de vacaciones. "],

                            survival:[
                            "<h2><b>SUPERVIVENCIA</b></h2><h2>Recuerda, en esta tarea, queremos que imagines que te encuentras en las praderas de un país extranjero, sin ningún material básico de <b>supervivencia</b>. Durante los próximos meses, tendrás que encontrar suministros estables de comida y agua y protegerte de los depredadores. </h2></br>Por favor, califica la <b>relevancia</b> y la <b>intensidad emocional </b>que tienen para ti cada una de estas palabras en esta situación de <b>supervivencia</b>. Las palabras pueden tener cualquier puntuación, depende de ti decidir cuál es la mejor.</br></br>Recuerda, la escala de <b>relevancia</b> va de uno a cinco, con uno indicando <i>'totalmente irrelevante'</i> y cinco significando <i>'extremadamente relevante'</i>. La escala de <b>emoción</b> va de <i>'cara somnolienta'</i>, indicando baja intensidad emocional a <i>'cara espabilada'</i> indicando alta intensidad emocional. Por favor, trata de utilizar toda la escala. </br></br><b>Ten cuidado:</b> cada palabra aparecerá por sólo cinco segundos por lo que tendrás que tomar tus decisiones con bastante rapidez.",

                            "<h2><b>SUPERVIVENCIA</b></h2><h2>En esta tarea, una vez más nos gustaría que imagines que te encuentras en las praderas de un país extranjero, sin ningún material básico de<b> supervivencia</b>. Durante los próximos meses, tendrás que encontrar suministros estables de comida y agua y protegerte de los depredadores.</h2></br>Vamos a mostrarte una lista de palabras, y nos gustaría que calificaras la <b>relevancia</b> y la<b> intensidad emocional</b> que tienen para ti cada una de estas palabras en esta situación de supervivencia. "],

                            distraction_task:"Ahora completarás una tarea de recordar dígitos. El ordenador te mostrará siete dígitos, uno a uno. Después de que hayan aparecido todos los dígitos, te pedimos que escribas los dígitos que has visto en orden de aparición. Si no puedes recordar todos los siete dígitos, introduce tantos dígitos como puedas recordar. El ordenador te dirá cuándo has completado la tarea.",

                            recall_task:"Ahora nos gustaría ver si puedes recordar las palabras que calificaste al principio del experimento (de TODOS los contextos). Por favor, anota las palabras de ambas tareas en tu hoja de respuestas. Puedes escribirlas en el orden que desees. Tendrás diez minutos para completar esta tarea. Un contador de tiempo en la parte superior de la pantalla te mostrará la cantidad de tiempo que te queda.</br></br>Cuando te sientas preparado para comenzar, pulsa el botón ‘Continuar’"
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
                        rating:{importance:0.0, arousal:0.0, valence:0.0}
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
    console.log("cur_block: "+cur_block);
    if( cur_block >= 5 )
    {
      document.getElementById("affective-slider").reset();
      if ($('#wordDisplay').hasClass('animated'))
        $('#wordDisplay').removeClass('animated fadeOut');

      $('#welcome').hide();
      $('#words-wrap').hide();
      document.getElementById('instructions-wrap').style.display = "block";

      console.log("distraction_task");
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
