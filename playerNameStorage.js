// Function to save the player's scores to local storage
function savePlayerScore(score) {
	const playerName = localStorage.getItem("playerName");
	console.log("Player Name:", playerName);
	if (!playerName) {
		alert("Player name not found! Please enter your name.");
		return;
	}

	let highScoreKey = "__menja__highScore";
	let currentHighScore = localStorage.getItem(highScoreKey)
		? parseInt(localStorage.getItem(highScoreKey), 10)
		: 0;

	if (score > currentHighScore) {
		localStorage.setItem(highScoreKey, String(score));
	}

	// Save high score to file
	const fileName = "high_score.txt"; // Changed to a fixed file name
	const fileExists = checkFileExists(fileName);

	if (fileExists) {
		// Read existing file contents
		const fileContents = readFileContents(fileName);
		const newContents = `${fileContents}\nHigh Score: ${score} - Player: ${playerName}`;
		const blob = new Blob([newContents], { type: "text/plain" });
		saveAs(blob, fileName);
	} else {
		const highScoreData = `High Score: ${score} - Player: ${playerName}`;
		const blob = new Blob([highScoreData], { type: "text/plain" });
		saveAs(blob, fileName);
	}
}

// Function to check if file exists
function checkFileExists(fileName) {
	const fileSystem = window.fs;
	if (fileSystem) {
		return fileSystem.existsSync(fileName);
	} else {
		return false;
	}
}

// Function to read file contents
function readFileContents(fileName) {
	const fileSystem = window.fs;
	if (fileSystem) {
		return fileSystem.readFileSync(fileName, "utf8");
	} else {
		return "";
	}
}

// Button action for high score button
document
	.querySelector(".high-score-btn")
	.addEventListener("click", function () {
		const highScoreKey = "__menja__highScore";
		const currentHighScore = localStorage.getItem(highScoreKey)
			? parseInt(localStorage.getItem(highScoreKey), 10)
			: 0;
		document.getElementById(
			"highScore"
		).innerHTML = `High Score: ${currentHighScore}`;
		savePlayerScore(currentHighScore);
	});
