console.log('Dokument lädt');

//formular -> button -> nicht doppelt abschicken 'disabled'

$(document).ready(function() {

  function timeout() {
    window.setTimeout(function() {
      $('button').removeClass('sending');
      $('button').text('gesendet');
      $('button').removeAttr('disabled');
    }, 3000);
  }


  $('button').click(function() {
    console.log('Bitte!');
    $(this).addClass('sending');
    $(this).text('wird gesendet');
    $(this).attr('disabled', true)
    timeout();


    // $('button').click(function() {
    //   console.log('Bitte!!');


    // $(this).css({
    //
    // 'width': '300px'
    // })

  });

});


//Interne und externe Links
