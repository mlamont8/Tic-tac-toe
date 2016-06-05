var user, comp, human, turn = true;

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
    var board = {b1:'N', b2:'N', b3:'N', b4:'N', b5:'N', b6:'N', b7:'N', b8:'N', b9:'N'};
    // begin play
    tictacgo(board, user, comp);
});

   	// Done with Mask Page



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
     var attempt; 
    $(".blk").click(function() {
        attempt = $(this).attr('id');
        $(this).html(user);
         boardUpdate(attempt, board, user,comp);
    });
 
}
function boardUpdate(attempt, board, user,comp){
    
var val = board[attempt];
    
    //check to see if already clicked
    
    if (val !== 'N'){
        alert("Try Another Move");
    }
    //update the board object with attempt key value

        board[attempt] = user;
  // send to read board
    var plr = user;
human = true;
    read(board,plr,human);
}

// read the current state of the board
function read(board,plr,human){
    // takes object, push values into array
var testArray = [];
    for (var i = 1; i<=9; i++){
        testArray.push(board['b'+i]);
     //   console.log(board['b'+ i]);
    }
    console.log(testArray, plr);
    if (((testArray[1] && testArray[4] && testArray[7]) == plr)||
        ((testArray[2] && testArray[5] && testArray[8]) == plr)||
        ((testArray[3] && testArray[4] && testArray[5]) == plr)||
        ((testArray[6] && testArray[7] && testArray[8]) == plr)||
        ((testArray[2] && testArray[5] && testArray[8]) == plr)||
        ((testArray[0] && testArray[1] && testArray[2]) == plr)||
        ((testArray[0] && testArray[3] && testArray[6]) == plr)||
        ((testArray[0] && testArray[4] && testArray[8]) == plr)||
        ((testArray[2] && testArray[4] && testArray[6]) == plr)){
        //currently either x or o's in winning position trigger win.
        if (human){
            console.log ('YOU WIN!');
        }else{
        console.log ('YOU LOSE!');
    }
        // put tie condition here
    }else{
    if (human){
        computerTurn(board,plr);
    }else{
    console.log('keep going');
    if (plr == 'X'){
        comp = 'X';
        user = 'O';
        humanMove(board, user, comp);
    }else{
        comp = 'O';
        user = 'X';
        humanMove(board, user, comp);
    }
    }
}
}
    function tokenSelect(user){
        if (user === 'X'){
            return 'O';

        }else{
            return 'X';

        }
    }

// computers turn
    function computerTurn(board,plr){
        console.log('Computer turn!');
    }
