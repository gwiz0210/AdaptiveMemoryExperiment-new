$(document).ready(function ()
{
  init();

    //TEEEEST!!
    set_ParticipantInfo("timestamp", "birthday", "degree", "1")




  //--------Click functions-------------


  $('#welcome').click(function ()
  {
    $('#welcome').hide();
    $('#words-wrap').hide();

    document.getElementById('instructions-wrap').style.display = "block";

    showInstructions();
  });

  $('#instructions-wrap').click(function ()
  {
    if( cur_context == "practice" || cur_context == "survival" || cur_context == "vacation")
    {
      // //console.log("cur_block: "+cur_block+" // cur_context: "+word_stimuli[cur_block]["context"]);
      $('#countdown').show();
      countdown();

      cur_context = word_stimuli[cur_block]["context"];


      $('#welcome').hide();
      $('#instructions-wrap').hide();

      document.getElementById('words-wrap').style.display = "block";

      seconds_left = wordTime/1000;
      showWords();
    }
    else if (cur_context == "distraction_task")
    {
      show_distractionTask();
      cur_context = "recall_task";
    }
    else if (cur_context == "recall_task")
    {
      show_recallTask();
    }
  });

  $('#get-data').click(function ()
  {
    clickTime = new Date().getTime() / 1000;
  });

  $('#validateDistraction').click(function ()
  {
    $('#distraction-wrap').hide();
    $('#disAnsw').hide();

    document.getElementById('instructions-wrap').style.display = "block";
    showInstructions();
  });

  $('#validateRecall').click(function ()
  {
    answer_recallTask();
    $('#recall-wrap').hide();
    document.getElementById('bye-wrap').style.display = "block";

  });

  var next = 1;
  $(".add-more").click(function(e){
      e.preventDefault();
      var addto = "#field" + next;
      var addRemove = "#field" + (next);
      next = next + 1;
      var newIn = '<input autocomplete="off" class="input form-control" id="field' + next + '" name="field' + next + '" type="text">';
      var newInput = $(newIn);
      var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field">';
      var removeButton = $(removeBtn);
      $(addto).after(newInput);
      $(addRemove).after(removeButton);
      $("#field" + next).attr('data-source',$(addto).attr('data-source'));
      $("#count").val(next);

          $('.remove-me').click(function(e){

            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length-1);
            var fieldID = "#field" + fieldNum;

            var fieldWord = document.getElementById(fieldID).value;
            var confirmDelete = confirm("Are you sure you want to delete this word: "+fieldWord+"?");
            if (confirmDelete == true)
            {
              $(this).remove();
              $(fieldID).remove();
            }
            else {
              alert("cancel");
            }

          });
  });

});
