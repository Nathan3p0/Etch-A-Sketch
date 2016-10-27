//Creates initial full grid board
function grid16(){
  var div = '<div class="grid16"></div>';
  var i = 0;
  var selector = $('#container');
  while (i < 256) {
    selector.append(div);
    i += 1;
  }
};
grid16();

//Initial page funtion to draw on board
$( function() {
  //Allows you to draw on board
  $('.grid16').mouseenter( function() {
      $(this).css('background-color','rgba(0,0,0,0.9)');
    });
  });
//Loops to create a 64 x 64 grid
function grid64(){
  var div = '<div class="grid64"></div>';
  var i = 0;
  var selector = $('#container');
  while (i < 4096) {
    selector.append(div);
    i += 1;
  }
};
$('.randomize').click(function(){
  //Randomizes colors
  $(function(){  $('.grid16').mouseenter(function() {
     var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      $(this).css('background-color', randomColorChange);
      });
    });
    //Randomizes colors
    $(function(){  $('.grid64').mouseenter(function() {
       var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        $(this).css('background-color', randomColorChange);
        });
      });
});
  //Creates a 16 x 16 Board
  $('.sixteen').click(function(){
      $('#container').empty();
      grid16();
      $( function() {
        //Allows you to draw on board
        $('.grid16').mouseenter( function() {
            $(this).css('background-color','rgba(0,0,0,0.9)');
          });
        });
    });
  //Creats a 64 x 64 Board
  $('.sixty').click(function(){
      $('#container').empty();
      grid64();
      $( function() {
        //Allows you to draw on board
        $('.grid64').mouseenter( function() {
            $(this).css('background-color','rgba(0,0,0,0.9)');
          });
        });
      });
$('.reset').click(function(){
  $('.grid16').css('background-color','grey');
  $('.grid16').mouseenter(function(){
    $(this).css('background-color','rgba(0,0,0,0.9)');
  })
  $('.grid64').css('background-color','grey');
  $('.grid64').mouseenter(function() {
    $(this).css('background-color','rgba(0,0,0,0.9)');
  });
});
