

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

// when a user clicks on a grid cell, the background changes to the value stored from the color picker
$('#gridWrapper').on('click', '.grid-cell', function() {
    var color = $('#colorPicker').val();

    // checks to see if color is transparent, then changes background color of cell
	if ($(this).css('background-color') != 'rgba(0, 0, 0, 0)') {
		$(this).css('background-color', 'rgba(0, 0, 0, 0)');	
	} else {
		$(this).css('background-color', color);	
	}
});