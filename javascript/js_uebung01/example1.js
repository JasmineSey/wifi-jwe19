//Definition Variablen

var apples = 5;
var nuts = 17;
var lemons = 9;

//console.log(apples,nuts,lemons);

//console.log('Das Ergebnis', apples * nuts);

var inputTag = '<input type="email">';
//console.log('<input type="email" onclick="this.style.backgroundColor=\"black"\">');
//console.log(inputTag + inputTag + inputTag);

//Array (eindimensional)
var woche = [
'Montag',
'Dienstag',
'Mittwoch',
'Donnerstag',
'Freitag'
];

//Array mehrdimensional (assoziativ) -> wird einmal erstellt var. var wird ein Typ Array zugwiesen

var monat = [];

monat['x'] = 'Januar';
monat['y'] = 'April';

//Array mehrdimensional (assoziati
var auto = [
['Rücklicht, Frontscheinwerfer'],

['Seitespiegel', 'Rückspiegel'],

['Fahrer', 'Beifahrer', 'Geisel im Kofferraum']
];



//Array
var langeWoche = new Array ('Samstag', 'Sonntag');
//console.log('Die Woche hat ' + woche.length + ' Tage.');

if(typeof woche[5] == 'undefined' ) {
  //console.log('Dieser Tag entfällt diese Woche');
} else {
  //console.log('Heute ist ' + woche[10]);
}

 //Object
 //Integer = ganze Zahlen
 var person = {
   age: 31,
   size: 164,
   anrede: 'Frau',
   name: 'Jasmine',
   nachname: 'Seywald'
 };

//console.log('Sehr geehrte ' + person.anrede + ' ' + person.nachname);

//Object

var auto = {
  leuchten: [
    'Frontscheinwerfer',
    'Rücklicht'
  ]
};

//Function
// Vogel = string
var tier = function(vieh) {
  return 'Schöner ' + vieh;
};

//console.log(tier('Vogel'));
var wieIstDeinName = function(person) {
  return person.name;
}
//console.log(wieIstDeinName(person));


//Operatoren = Vergleich
//in if prüft man ob etwas richtig oder falsch ist

var himmel = 'blau';

if(himmel === 'blau') {
  //console.log('wirklich?');
} else if( himmel == 'schwarz') {
  //console.log('Ist es Nacht?');
}

var note = 1;

if(note === 1 ) {
//  console.log('wirklich?');
} else if( note == 3) {
//  console.log('OK');
}

//! damit wird das Ergebnis umgedreht
var tomate = 5.0;
var melone = 23.5;

if( !(tomate > melone) ) {
  //console.log('wo? glaub ich nicht!');
} else {
  //console.log('genau');
}


// | bedeutet "oder"  && "und"

var tomate = 5.0;
var melone = 23.5;

//if( tomate = 4.0 && melone = 23.5 ) {

// if( tomate != melone || tomate > melone ) {
//   //console.log('true');
// } else {
//   //console.log('false');
// }
//
// var tomate = 5.0;
// var melone = 23.5;
//
// if( melone == '23.5') {
//   console.log('true');
// } else if ( melone = '7') {
// console.log('true');
// } else {
//   console.log('false')
// }
//
// switch( melone ) {
//   case '23.5':
//   console.log(true);
//   break;
//   case '7':
//     console.log(true);
//     break;
//     default:
//     console.log(true);
// }


//Loop

// for(var i = 0; i < 10; i++) {
//   console.log(i);
// }

// for(var i = 0; i < 19; i+=2) {
//   console.log(i);
// }

// for(var i = 0; i < 19; i+=2) {
//   console.log('Prefix: ' + i);
// }


var jetzt = new Date();
jetzt = jetzt.getTime();
console.log(jetzt);
while(jetzt <  ) {
  console.log('Nicht schon wieder');
}
