$('.button.insert').click(function() {
  var current = $(this);
  $('.screen').val( $('.screen').val() + current.val() );
});

//$('.screen').val( $('.screen').val() !Das ist das Erste Ergebnis, welches auf dem Screen zu sehen ist! + current.val() !Das ist das weitere Ergbnis, auf welches man als 2. drückt! );

$('.button.btn-clean').click(function() {
var aktErgebnis = $('.screen').val();
aktErgebnis = aktErgebnis.substr(0, aktErgebnis.length-1);
$('.screen').val(aktErgebnis);
});

$('.button.btn-equal').click(function() {
  $('.screen').val((eval($('.screen').val())));  
});
