// Define a strongly typed function
function calculateAddition(firstnumber: number, secondnumber: number): number {
  return firstnumber + secondnumber;
}



// Use the function 
console.log(`Addition calculation: ${calculateAddition(5.6, 5.6)}`);


function calculateEven(firstnumber: number): boolean {
  return firstnumber%2===0
}

// Use the function 
console.log(`Even or Odd calculation: ${calculateEven(10)}`);