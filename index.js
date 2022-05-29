const classes = [".penguin-bottom", ".penguin-top"];

let elements = [];

classes.forEach((className) => {
	elements.push(document.querySelector(className));
});

console.log(elements);

elements.forEach((element) => {
	element.addEventListener("click", handleClick);
});

function handleClick() {
	// console.log("Element CLicked");
	let rightHand = document.querySelector(".right-hand");
	let leftEye = document.querySelector(".left-eye");
	let rightEye = document.querySelector(".right-eye");
	// console.log(rightHand);
	// console.log(leftEye);
	// console.log(rightEye);
	rightHand.classList.remove("right-hand");
	rightHand.classList.add("right-hand-anim");
	leftEye.classList.remove("lefft-eye");
	leftEye.classList.add("lefft-eye-anim");
	rightEye.classList.remove("right-eye");
	rightEye.classList.add("right-eye-anim");

	setTimeout(handleClass, 2000);

	function handleClass() {
		rightHand.classList.remove("right-hand-anim");
		rightHand.classList.add("right-hand");
		leftEye.classList.remove("lefft-eye-anim");
		leftEye.classList.add("lefft-eye");
		rightEye.classList.remove("right-eye-anim");
		rightEye.classList.add("right-eye");
	}
}
