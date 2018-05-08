console.log('launch!')

var smoke1 ="<img src='https://i.imgur.com/XW9R7PM.png' title='source: imgur.com'  class='content' id='smoke1'>";
// var smoke4 ="<img src='https://i.imgur.com/DJIROws.png' title='source: imgur.com'  class='content' id='smoke4'>";
var smoke3 ="<img src='https://i.imgur.com/RRK2seF.png' title='source: imgur.com' class='content visible' id='smoke3'>";
var puff4 ="<img src='https://i.imgur.com/gSQAN2b.png' title='source: imgur.com'  id='puff4'>";
var puff3 ="<img src='https://i.imgur.com/MEM4cjk.png' title='source: imgur.com'  id='puff3'>";
var puff2 ="<img src='https://i.imgur.com/KSouGOB.png' title='source: imgur.com'  id='puff2'>";
var puff1 ="<img src='https://i.imgur.com/1ro8Amq.png' title='source: imgur.com'  id='puff1'>";
var puff1a ="<img src='https://i.imgur.com/1ro8Amq.png' title='source: imgur.com' id='puff1a'>";

var retro = "<h1 id='retro'>Retro</h1>";
var space = "<h1 id='space'>Space</h1>";
var rocket = "<h1 id='rocketword'>Rocket!!</h1>";

var three = "<h1 id='three'>3</h1>";
var two = "<h1 id='two'>2</h1>";
var one = "<h1 id='one'>1</h1>";
var gorocket = "<h1 id='gorocket'>GO!</h1>";


$(document).ready(function() {

function smokes() {
    $('.content').toggleClass('visible');
}




$( "#bottom" ).click(function() {
  console.log("CLICK!");
  $('body').children("#go").remove();
  $('body').append(three);
   setTimeout(function() {
   	$("body").children("#three").remove();
  $('body').append(two);
}, 1000);
   setTimeout(function() {
   	$("body").children("#two").remove();
  $('body').append(one);
}, 2000);
   setTimeout(function() {
   	$("body").children("#one").remove();
  $('body').append(gorocket);
}, 3000);
 setTimeout(function() {
  $('body').append(smoke1);
}, 5000);
  setTimeout(function() {
  $('body').append(smoke3);
}, 5000);

setTimeout(function() {

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

setInterval(smokes, 1000);

  setTimeout(function() {
  $('#smoke1').hide();
  $('#smoke3').hide();
}, 13900);

  setTimeout(function() {
  $('body').append(retro);
}, 15100);
    setTimeout(function() {
  $('body').append(space);
}, 15800);
      setTimeout(function() {
  $('body').append(rocket);
}, 16500);

}, 3000);
});
});




$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
setTimeout(function() {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 15100);
}, 3000);
        return false;
      }
    }
  });
});
