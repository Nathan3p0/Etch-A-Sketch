function gridMaker(){
  var div = '<div class="grid"></div>';
  var i = 0;
  var selector = $('#container')
  while (i < 4096) {
    selector.append(div);
    i += 1;
  }
}

gridMaker();

$( function() {
  $('.grid').mouseenter( function() {
      $(this).css('background-color','rgba(0,0,0,0.9)');
    });
});
