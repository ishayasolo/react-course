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