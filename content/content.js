// Write all your JavaScript and JQuery code in this file! :)
var count = 0;

$("#counter").on("click", function(){
    // currentNum = parseInt($("h1").eq(1).text()) + 1;
    count += 1;
    $("h1").eq(1).html(count);
});

$("#reset").on("click", function(){
    count = 0;
    $("h1").eq(1).html(count);
});