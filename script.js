let display = document.getElementById("display")

let alpha =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let cypher = "THEQUICKBROWNFXJMPSVLAZYDG"

function print(string) {
	console.log(string)
	// dis.innerHTML += string + " -> "
}

function numberToLetters(numbers, array) {
	let string = []
	for (let o = 0; o < numbers.length; o++) {
		const s = numbers[o];
		string.push(array[s])
	}

	return string
}

function lettersToNumbers(letters, array) {

	let result = [];

	for (let i = 0; i < letters.length; i++) {
		const a = letters[i];

		for (let o = 0; o < array.length; o++) {
			const e = array[o];
			
			if(a == e) {
				result.push(o);

			}
		}
		
	}

	return result;
}

function lettersToArray(letters, array) {

	let result = [];

	for (let i = 0; i < letters.length; i++) {
		const a = letters[i];

		for (let o = 0; o < array.length; o++) {
			const e = array[o];
			
			if(a == e) {
				result.push(o);
			}
		}
		
	}

	return result;
}

function arrayToString(array) {
	let string = ""

	for (let i = 0; i < array.length; i++) {
		const a = array[i];
		
		string+=a;
	}

	return string
}

function mapToMatched(input, matchToFind, mapTo) {

	let string = []

	//loop through code
	for (let i = 0; i < input.length; i++) {
		const a = input[i];

		// loop through cypher
		for (let o = 0; o < matchToFind.length; o++) {
			const b = matchToFind[o];
			
			// if the letters match
			if(a == b) {
				string.push(mapTo[o])

			}
		}
		
	}

	return string
}

function encrypt(string) {

	// console.log("ENCRYPTING...")

	let stringToAlpha = numberToLetters(string, alpha)
	
	let cypherToAlpha = mapToMatched(stringToAlpha, cypher, alpha)

	return arrayToString(cypherToAlpha)
}

function decrypt(string) {

	// console.log("DECRYPTING...")

	let indexedAlpha = mapToMatched(string, alpha, cypher)

	let result = lettersToNumbers(indexedAlpha, alpha)

	return result
}

const passcode = "IGYCI"

function update() {

	const encryptedInput = encrypt(userCode)

	if (encryptedInput != passcode) {
		display.innerHTML = userCode + " is incorrect"
	} else if (encryptedInput == passcode) {
		display.innerHTML = "Correct."
	}

}

