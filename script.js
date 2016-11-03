$( document ).ready(function() {
$('#translucent-borders').on('click', function(){
  $('.tb').toggleClass('visible');
});

$('#multiple-borders').on('click', function(){
  $('.mb').toggleClass('visible');
});

$('#flexible-background-positioning').on('click', function(){
  $('.fbp').toggleClass('visible');
});
});
