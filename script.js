var user, comp, turn = true;
$(document).ready(function () {
	//Allow user to select X or O
	var id = '#dialog';

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
    
$('.prebutton').click(function () {
    user = $(this).attr('id');
    
    $('#mask, .window').hide();
    comp = gamePlay(user);
    console.log('user', user);
    console.log('comp', comp);
});

   	// Done with Popup Page
var board = {b1:null, b2:null, b3:null, b4:null, b5:null, b6:null, b7:null, b8:null, b9:null};


});
    function gamePlay(user){
        if (user === 'X'){
            return 'O';

        }else{
            return 'X';

        }
    }
    // states whos turn it is
    function state(turn) {
       if (!turn) {
           return "computer";
       }
        return "human";
    }
    //returns current state of board of win, lose, draw or current
    function gamestate(){
        
    }
