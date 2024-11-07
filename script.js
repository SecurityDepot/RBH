document.getElementById("solve").addEventListener("click", function() {
    var equation = document.getElementById("equation").value;
    // Implement equation solving logic here (e.g., using a library like mathjs)
    var result = solveEquation(equation);
    document.getElementById("result").textContent = "Result: " + result;
});

function solveEquation(equation) {
	
    // Ensure the input is a number
  const number = Number(equation);
  if (isNaN(number)) {
    return "Invalid input: Please provide a valid decimal number.";
  }

  // Convert to hexadecimal
  const hexString = number.toString(16).toUpperCase();

  // Pad with leading zeros if necessary
  const paddedHexString = hexString.padStart(6, '0');

  // Extract and format the parts
  const firstTwoDigits = paddedHexString.substring(0, 2);
  const remainingDigits = paddedHexString.substring(2);
  const decimalValue = parseInt(remainingDigits, 16);

  return firstTwoDigits + ":" + decimalValue;
   }