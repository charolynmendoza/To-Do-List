// Show & hide new task input field

$(document).ready(function () {
  $(".add").click(function () {
    $(".newTaskText").toggle();
  });
});

// Adding, checking and deleting new tasks

$('input').keypress(function (event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val('');
    $('.newTaskText').toggle();
    var $newTask = $(
      '<div class="task">' +
      '<input type="checkbox" class="checkbox" name="checkbox">' +
      '<label class="checkmark" for="checkbox">' + todoText + '</label>' +
      '<span class="far fa-trash-alt delete"></span>' +
      '</div>'
    );
    $newTask.on('click', '.delete', function () {
      $(this).parent().fadeOut(500, function () {
        $(this).remove();
      });
      event.stopPropagation();
    });
    $newTask.on('click', function () {
      var checkbox = $(this).find('.checkbox')[0];
      checkbox.checked = !checkbox.checked;
    });
    $('form').append($newTask);
  }
});

// Deleting current tasks

$('.task').on('click', '.delete', function () {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
});

// Checkbox funcionality for already existing tasks

$('.task .checkmark').on('click', function () {
  var checkbox = $(this).parent().find('.checkbox')[0];
  checkbox.checked = !checkbox.checked;
});

