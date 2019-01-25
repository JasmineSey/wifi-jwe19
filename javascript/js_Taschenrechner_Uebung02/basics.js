//Felder/Attrubute auslesen
//val gibt den wert zurück, der in dem Feld value erhalten ist:

//let wertDesFeldes = $('input').val();

//weiteres Beispiel:

//let wertDesFeldes = $('input').attr('value')

//Inhalt zwischen zwei Attributen -> text() wäre nur reiner Text:

//let wertDesFeldes = $ ('p').text();


//Zusammenzählenund verarbeiten

/*let zahl1 = $('.zahl1').val();
let zahl2 = $('.zahl2').val();
$('.ergebnis').val( eval(zahl1 + '+' + zahl2) );*/

//Events auf alle Buttons -> von welchem Event brauchen wir die value -> this

$('.number-btn').click(function() {
var current = $(this);
$('.ergebnis').val( current.val() );
});

//substring -> man kann den Anfang oder das Ende vom String wiedergeben

$('.back-btn').click(function() {
var aktuelleErgebnis = $('.ergebnis').val();
aktuelleErgebnis = aktuelleErgebnis.substr(0, aktuelleErgbenis.length-1);
$('.ergebenis').val(aktuelleErgebnis);
});





// //einzelner Buttons -> this gilt für jeden einzelnen Button
// $('number-btn').click(function() {
//
// var current = $(this);
// current.val();
// })
