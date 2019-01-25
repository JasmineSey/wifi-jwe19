//Vorschleife

var $lightboxWrapper = $('.lightbox-wrapper');

for (var i = 1; i <= 23; i++) {


  //Datenerweiterung
  var src = '.jpg';

  //Man bastelt einen String

  //Wenn der Indexi i 1 Stelle hat
  if (i.toString().length == 1) {
    //Wenn der Indexi i 1 Stelle hat
    src = '00' + i + src;
  } else if (i.toString().length == 2) {
    //Wenn der Indexi i 2 Stellen hat
    src = '0' + i + src;
  } else {
    //Wenn der Index i 3 oder mehr Stellen hat
    src = i + src;
  }

  //Erstellen des HTML Tags
  var htmlTag = '<img src="img/thumbnails/' + src + '" class="lightbox-image" data-fullcreen="img/fullscreen/' + src + '">';

  //console.log(htmlTag);

  $lightboxWrapper.append(htmlTag);
}

$('lightbox-image').click(function() {

  //Das richtige Bild ermitteln
  var $currentClicked = $(this);

  //Image tag zusammenbauen
  var imageTag = '<img src="'
  $currentClickedImage.attr('data-fullscreeen') + '"alt=""'

  //Image tag als neuen HTML-Code im Modal Body einfügen
  $('#MyModal .modal-body').html()


  $('#MyModal').modal('show');

  //Bild wird hier in einem im HTML Markup befindlichen DIV-Container geladen
  //Anschließend wird der DIV-Container (Modal) eingeblendet
});

$('#MyModal').modal('show');
