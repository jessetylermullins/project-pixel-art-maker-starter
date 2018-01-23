

$('#submit').click(function() {
    // stops browser reload


	var height = $('#height').val();
	var width = $('#width').val();
	makeGrid(height, width);
});

function makeGrid(height, width) {
    // reset function
    $('.grid-cell').remove();
    
    // takes input values, iterates over and returns div 'cells' to form a grid
	for (var x = 0 ; x < height ; x++) {
		for (var y = 0 ; y < width ; y++) {
			$('#gridWrapper').append('<div class="inline grid-cell"></div>');
		}
		$('#gridWrapper').append('<div class="grid-cell"></div>');
	}
};

// converts hexadecimal to rgb. must be in "" and use the # identifier with six digits, ex.: hexToRgb("#d3d3d3")
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// when a user clicks on a grid cell, the background changes to the value stored from the color picker
$('#gridWrapper').on('click', '.grid-cell', function() {
	var color = $('#colorPicker').val();
	var color = hexToRgb(color);

	// if the background color of the cell is 
	if ($(this).css('background-color') != color) {
		$(this).css('background-color', color);
	} else {
		$(this).css('background-color', 'rgb(255, 255, 255)');
	}
});

