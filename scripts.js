console.log('launch!')


var smoke4 ="<img src='./images/smoke4.png' class='animated fadeIn' id='smoke4'>";
var smoke3 ="<img src='./images/smoke3.png' class='animated fadeIn' id='smoke3'>";
var puff4 ="<img src='./images/puff4.png'  id='puff4'>";
var puff3 ="<img src='./images/puff3.png'  id='puff3'>";
var puff2 ="<img src='./images/puff2.png'  id='puff2'>";
var puff1 ="<img src='./images/puff1.png'  id='puff1'>";
var puff1a ="<img src='./images/puff1.png'  id='puff1a'>";


$(document).ready(function() {
$( "#bottom" ).click(function() {
  console.log("CLICK!");
  $('body').append(puff4);

 setTimeout(function() {
  $('body').append(puff1);
}, 900);

  setTimeout(function() {
  $('body').append(puff2);
}, 840);

//   setTimeout(function() {
//   $('body').append(smoke3);
// }, 740);

  setTimeout(function() {
  $('body').append(puff1a);
}, 1100);

});
});




$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 15100);
        return false;
      }
    }
  });
});
