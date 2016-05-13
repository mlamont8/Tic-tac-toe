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
    comp = tokenSelect(user);
    console.log('user', user);
    console.log('comp', comp);
    //empty board spaces
    var board = {b1:null, b2:null, b3:null, b4:null, b5:null, b6:null, b7:null, b8:null, b9:null};
    // begin play
    tictacgo(board, user, comp);
});

   	// Done with Popup Page



});

//gameplay function
function tictacgo(board, user, comp){
    console.log(user, comp);
    console.log(board);
    $('#b1').html(comp);
    board.b1 = comp;
    board = humanMove(board, user, comp);
  
}

function humanMove(board, user, comp){
     var attempt; $(".blk").click(function() {
        attempt = $(this).attr('id');
         boardUpdate(attempt, board, user,comp);
    });
 
}
function boardUpdate(attempt, board, user,comp){
    console.log(attempt);
var val = board[attempt];
    console.log(val);
    //check to see if already clicked
    
    if (val !== null){
        alert("Try Another Move");
    }
    //update the board object with attempt key value

        board[attempt] = user;
  // send to read board
    read(board,user);
}
// read the current state of the board
function read(board,user){
    console.log(board, user);
    var val = user;
    for (i =0; i < board.length; i++){
        if board[i]
    }
    if (board.b2 == board.b3){
        console.log('winner');
    }
    
    console.log('keep going');
    }
}
    function tokenSelect(user){
        if (user === 'X'){
            return 'O';

        }else{
            return 'X';

        }
    }

    //returns current state of board of win, lose, draw or current
    function gamestate(){
        
    }
