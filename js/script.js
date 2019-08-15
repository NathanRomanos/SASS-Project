console.log('my script is working');


$(document).ready(function(){
  $('#menu').click(function(){
    $('nav').fadeToggle('active');
  })

  $('#close').click(function(){
    $('nav').fadeOut(100);
  })

  $('nav').mouseleave(function(){
    $('nav').fadeOut(500);
  })

});

// $(document).ready(function(){
//     // Opens the hamburger menu
//     $('#menu').click(function(){
//         $('nav').fadeToggle('active');
//     })
//     // Closes the hamburger menu
//     $('nav').mouseleave(function(){
//         $('nav').fadeOut(500);
//     })
// });
