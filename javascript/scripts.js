/*
Mehrzeilige
Kommentare
*/

// Öffne Dialogfenster mit "Mein erster Alert"als Text
alert('Mein erster ALERT');

//erstellen einer Variablen mit einem Text
var consolenTest = 'Hallo Jasmine';


//ausgeben der Variable
//console.log(consolenTest);

//überschreiben der Variable mit neuem Inhalt
consolenTest = 'Ciao Jasmine';

//ausgeben des neuen Inhalts
//console.log(consolenTest);

if(consolenTest === 'Ciao Jasmine') {
  aler('Ciao');
}


//Prüfung ob Links mit https oder http existieren
var externalLink = $('a[href^0"https://"], a[href^="http://"]');

if(externalLink.length > 0) {
  externalLink.attr('target', '_blank');
}
