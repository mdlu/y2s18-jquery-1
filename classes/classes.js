// Write all your JavaScript and JQuery code in this file! :)
$("#bigButton").on("click", function(){
    $("#message").toggleClass("big")
});

$("#hideButton").on("click", function(){
    $("#message").toggleClass("hidden")
});

$("#rotateButton").on("click", function(){
    $("#message").toggleClass("rotated")
});