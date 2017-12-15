//On vs Click. On listens for dynamic stuff that can be created. Click only works on existing material

//Check off specific todos by clicking
$('ul').on("click", "li", function(){
  $(this).toggleClass("completed");
});


//Click on X to delete todo
$('ul').on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove(); //Allows the fade to start and finish before removing the element.
  });
  event.stopPropagation(); //stops bubbling
});

//Adding To-Do
$('input[type="text"]').keypress(function(event){
  if(event.which === 13){  //checks if user hit enter key
    //saving input
    var todoText = $(this).val();
    //setting input to blank string. preps for next input
    $(this).val("");
    //create a new li and add to ul
    $('ul').append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
