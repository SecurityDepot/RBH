// Kantech SN to RBH

document.getElementById("equationSN").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    document.getElementById("solveKantech").click();
  }
});

document.getElementById("solveKantech").addEventListener("click", function() {
    var equationSN = document.getElementById("equationSN").value;
    // Implement equation solving logic here (e.g., using a library like mathjs)
    var result = KantechtoRBH(equationSN);
    document.getElementById("result").textContent = result;
});

function KantechtoRBH(equationSN) 
{ 
  const [FCHex, SNDec] = equationSN.split(':');  
  const SNDecNum = Number(SNDec);
  const SNHex = SNDecNum.toString(16).toUpperCase().padStart(4, '0');
  
  // Combine the two hexadecimal parts
  const FCSNHex = FCHex + SNHex;  
  
  // Convert the combined hexadecimal string to decimal
  const decimalNumber = parseInt(FCSNHex, 16);

  return decimalNumber;
}


// RBH to Kantech SN

document.getElementById("equationRBH").addEventListener("keydown", function(event)
 {
  if (event.key === "Enter") 
  {
    document.getElementById("solveRBH").click();
  }
	}
);

document.getElementById("solveRBH").addEventListener("click", function() 
{
    var equationRBH = document.getElementById("equationRBH").value;
    // Implement equation solving logic here (e.g., using a library like mathjs)
    var result2 = RBHtoKantech(equationRBH);
    document.getElementById("result2").textContent = result2;
});

function RBHtoKantech(equationRBH) {
	
    // Ensure the input is a number
  const number = Number(equationRBH);
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
