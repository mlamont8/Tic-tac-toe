var user,comp;
$(document).ready(function () {
	//Allow user to select X or O
	var id = '#dialog';
console.log(id);
	//Get the screen height and width
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();

	//Set height and width to mask to fill up the whole screen
	$('#mask').css({
		'width': maskWidth,
		'height': maskHeight
	});

	//transition effect
	$('#mask').fadeIn(500);
	$('#mask').fadeTo("slow", 0.9);

	//Get the window height and width
	var winH = $(window).height();
	var winW = $(window).width();

	//Set the popup window to center
	$(id).css('top', winH / 2 - $(id).height() / 2);
	$(id).css('left', winW / 2 - $(id).width() / 2);

	//transition effect
	$(id).fadeIn(2000);

	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();

		$('#mask').hide();
		$('.window').hide();
	});

	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});
    
$('button').click(function () {
    user = $(this).attr('id');
    
    $('#mask, .window').hide();
    gamePlay(user);
});

   	// Done with Popup Page

    function gamePlay(user){
        if (user === 'X'){
            comp = 'O';
            console.log('comp', comp);
        }else{
            comp = "X"
            console.log('comp', comp);
        }
    }

});
