let count = 0;
let passing = 0;
let passing2 = 0;

function password_validate(passwords) {
	for(i = 0; i < passwords.length; i++) {
		
		// part 1
		var output = passwords[i].split()
		output = output[0].split(' ');
		var span = output[0].split('-')
		span.max = parseInt(span[1]) - 1;
		span.min = parseInt(span[0]) - 1;
		var letter = output[1].replace(':', '');
		var passwordout = output[2]
		count = 0;
		
		for (let i in passwordout) {
			if(passwordout[i] == letter) {
				count++;
			}
		}
				
		if((parseInt(span[0]) <= count) && (count <= parseInt(span[1]))) {
			passing++;
		}

		// part 2
		
		if( ( ( passwordout[span.min] == letter ) || ( passwordout[span.max] == letter ) ) && !( ( passwordout[span.min] == letter ) && ( passwordout[span.max] == letter ) ) ) {
			passing2++
		}
	}
	
	console.log(`part 1: ` + passing);
	console.log(`part 2: ` + passing2);
}

const passwords = []

password_validate(passwords)
