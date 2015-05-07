function assignGrade(score) {
	if (score > 89) {
		return "You got an A!";
	} else if (score > 79) {
		return "You got a B!";
	} else if (score > 69) {
		return "You got a C!";
	} else if (score > 59) {
		return "You got a D!";
	} else {
		return "You got an F";
	}
}