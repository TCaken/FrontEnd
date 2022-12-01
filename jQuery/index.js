// Anticipate document loading then start calling jquery
// $(document).ready(function(){
//     $("h1").css("color","#00ffff");
// });

//Manipulate Class
$("h1").addClass("big-title margin-50");
// $("h1").hasClass('big-title');

//Manipulate Text
// $("h1").text("Bye");
// $("button").text("Change")

// $("h1").html("<em>Italic</em>");

//Manipulate Attributes
// $('a').attr("href","https://www.yahoo.com")
// alert($('h1').attr("class"));

//Add Event Listeners
$('h1').click(function(){
    $('h1').css('color','purple')
});

// $('button').click(function(){
//     this.innerHTML = 'Clicked';
//     $('h1').fadeToggle();
// })

$('button').click(function(){
    $('h1').slideUp().slideDown().animate({margin : "20%"})
})

// $('button').click(function(){
//     this.innerHTML = 'Clicked';
//     $('h1').slideToggle();
// })

$('input').keydown(function(event){
    $('h1').text(event.key);
    console.log(event.key)
});

$('h1').on("mouseover", function(){
    $('h1').css("color",'black');
})

//Add Elements
//before, after, prepend, append