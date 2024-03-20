const inputs = document.querySelectorAll("input");
var userCode = 0;

inputs.forEach((input, key) => {
	input.addEventListener("keydown", function (event) {
		if (event.key === "Backspace" && key !== 0 && input.selectionStart === 0) {
		  inputs[key - 1].focus(); // Move focus to the previous input
		}
  });

  input.addEventListener("keyup", function () {
    if (input.value) {
      if (key === inputs.length - 1) {
        // Last input
        userCode = [...inputs].map((input) => input.value).join("");
        // console.log("User Code:", userCode);
        update()
      } else {
        inputs[key + 1].focus(); // Move focus to the next input
      }
    }
  });
});
