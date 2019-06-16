// Write all your JavaScript and JQuery code in this file! :)

// var x = 0;
// var y = 0;
// var z = 0;

function updateSize(newSize) {
  // FINISH ME! Set the width of the MEET logo to be newSize in pixels.
	$("img").eq(0).css("width", newSize);
}


function updateLeftPosition(newX) {
	// FINISH ME
	$("img").eq(0).css("transform", "rotateX(" + newX.toString()+ "deg)");
}

function updateTopPosition(newY) {
	// FINISH ME
	$("img").eq(0).css("transform", "rotateY(" + newY.toString()+ "deg)");
}

function updateFrontPosition(newZ) {
	$("img").eq(0).css("transform", "rotateZ(" + newZ.toString()+ "deg)");
}

