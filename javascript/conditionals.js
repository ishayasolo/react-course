let age = 10;

if (age >= 18) {
	console.log('You are qualified!')
}

else if (age > 12 && age < 18) {
	console.log('hey teenager!!!')
}

else {
	console.log('You are underaged... go home to momma!')
}

let dayOfTheWeek = "Mondayyy";

if (dayOfTheWeek === "Sunday") {
	console.log("let's go to church");
}

else if (dayOfTheWeek === "Monday") {
	console.log("nooooo!... not again");
}

else if (dayOfTheWeek === "Tuesday") {
	console.log("well... the week no bad sha");
}

else if (dayOfTheWeek === "Wednesday") {
	console.log("people no too come work today");
}

else if (dayOfTheWeek === "Thursday") {
	console.log("Omo!... I cant wait for friday");
}

else if (dayOfTheWeek === "Friday") {
	console.log("TGIF!!!");
}

else if (dayOfTheWeek === "Saturday") {
	console.log("finally!... i can rest");
}

else {
	console.log("what planet are you from?");
}

switch (dayOfTheWeek) {
	case "Sunday":
		console.log("yay!... church time")
		break;
	
	case "Monday":
		console.log("Boring day");
		break;
	
	default:
		console.log('alien!')
}

const hasMoney = true

if (hasMoney) {
	console.log("chop life!!!")
} else {
	console.log("drink garri!!!")
}

// ternary
console.log(hasMoney ? "i dey go club" : "stay at home")
console.log(hasMoney ? "chop life!!!" : "drink garri!!!")

// RECAP - switch...case
let score = 150;

// GRADES (A, B, C, D, E, F)
// A = 70 and above
// B = 60 - 69
// C = 50 - 59
// D = 45 - 49
// E = 40 - 44
// F = 39 and below

if (score >= 70 && score <= 100) {
	console.log("You have an A")
} else if (score >= 60 && score <= 69) {
	console.log("You have a B")
} else if (score >= 50 && score <= 59) {
	console.log("You have a C")
} else if (score >= 45 && score <= 49) {
	console.log("You have a D")
} else if (score >= 40 && score <= 44) {
	console.log("You have a E")
} else if (score <= 39) {
	console.log("You have an F")
} else {
	console.log("You no sabi book")
}


dayOfTheWeek = "Tuesday"

switch (dayOfTheWeek) {
	case "Monday":
		console.log("Mondayyyyyy!");
		break;
		
	case "Tuesday":
		console.log("Tuesdayyyyyy!");
		break;
		
	case "Wednesday":
		console.log("Wednesdayyyyyy!");
		break;
		
	case "Thursday":
		console.log("Thursdayyyyyy!");
		break;
		
	case "Friday":
		console.log("Yayyyyyy!");
		break;
		
	case "Saturday":
		console.log("Saturdayyyyyy!");
		break;
		
	case "Sunday":
		console.log("Sundayyyyyy!");
		break;

	default:
		console.log("invalid day of the week")
}
