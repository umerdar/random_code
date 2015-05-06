function hash(s) {
	var h = 7
	var letters = "acdegilmnoprstuw"
	for(var i = 0; i <s.length; i++) {
    	h = (h * 37 + letters.indexOf(s[i]));
    }
    return h;

}


For example, if we were trying to find the 7 letter string where hash(the_string) was 680131659347, the answer would be "leepadg".

var string = []
var letters = "acdegilmnoprstuw"

function convert(number) {
	for(var i =0; i < letters.length; i++) {
		if ((number - i) % 37 == 0) {
			var firstResult = (number - i) / 37
			if (firstResult < 37) {
				return letters[i]
			// string.push(letters[i])
			// return string
		}
			else {
					return convert(firstResult) + letters[i]
			}
		}
	}
}