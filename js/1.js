/*jslint browser: true*//*global  $*/



/*$(window).scroll(function() {
    $("#p1").css({
        'transform': 'translate(0px, ' + $(window).scrollTop() + '%)'
    });
    $("#bttn1").css({
        'transform': 'translate(0px, ' + $(window).scrollTop() + '%)'
    });
});*/

    col1 = document.getElementsByClassName("itm1");
    col2 = document.getElementsByClassName("itm2");
    
    
    bio = col1[0];
    contact = col1[1];
    
    work = col2[0];
    random = col2[1];
    



$(document).ready(function(){

});


$(bio).click(function(){
    var n = $(".divBox").css("height");
    console.log(n);
    $(window).scrollTop(parseInt(n));
});

$(contact).click(function(){
    var n = $(".divBox").css("height");
    $(window).scrollTop(parseInt(n) * 2);
});

$(work).click(function(){
    var n = $(".divBox").css("height");
    $(window).scrollTop(parseInt(n) * 3);
});

$(random).click(function(){
    var n = $(".divBox").css("height");
    $(window).scrollTop(parseInt(n) * 4);
});

