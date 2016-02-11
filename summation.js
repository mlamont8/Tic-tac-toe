function fearNotLetter(str) {
	//length of string
	var tLength = str.length;
	var difference, missing;
	//full alphabet
	var alpha = "abcdefghijklmnopqrstuvwxyz";
	//starting location of alphabet for string
	var startLocation = findloc(alpha, str);
	console.log(tLength);
	for (var i = 0; i < tLength; i++) {
		if (alpha.charAt(startLocation + i) != str[i]) {
			missing = alpha.charAt(startLocation + i);
			console.log(missing);
			break;
		} else {
			missing = "undefined";
		}
	}
	console.log(missing);
}

function findloc(alpha, str) {
	for (var i = 0; i < alpha.length; i++) {
		if (str.charAt(0) == alpha.charAt(i)) {
			return i;
			console.log(i);
			break;
		}
	}

}
fearNotLetter("bcd");