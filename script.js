const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snakePosition = [100, 100];
let snakeDirection = "right";
let foodPosition = [200, 200];
let score = 0;

document.getElementById("up").addEventListener("click", function() {
	snakeDirection = "up";
});

document.getElementById("down").addEventListener("click", function() {
	snakeDirection = "down";
});

document.getElementById("left").addEventListener("click", function() {
	snakeDirection = "left";
});

document.getElementById("right").addEventListener("click", function() {
	snakeDirection = "right";
});

setInterval(function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "green";
	ctx.fillRect(snakePosition[0], snakePosition[1], 20, 20);
	ctx.fillStyle = "red";
	ctx.fillRect(foodPosition[0], foodPosition[1], 20, 20);
	
	if (snakePosition[0] === foodPosition[0] && snakePosition[1] === foodPosition[1]) {
		score++;
		foodPosition = [Math.floor(Math.random() * 20) * 20, Math.floor(Math.random() * 20) * 20];
	}
	
	if (snakeDirection === "up") {
		snakePosition[1] -= 10; // reduced speed
	} else if (snakeDirection === "down") {
		snakePosition[1] += 10; // reduced speed
	} else if (snakeDirection === "left") {
		snakePosition[0] -= 10; // reduced speed
	} else if (snakeDirection === "right") {
		snakePosition[0] += 10; // reduced speed
	}
	
	if (snakePosition[0] >= canvas.width || snakePosition[0] < 0 || snakePosition[1] >= canvas.height || snakePosition[1] < 0) {
		alert("Game over! Score: " + score);
		snakePosition = [100, 100];
		snakeDirection = "right";
		score = 0;
	}
}, 500); // increased interval time