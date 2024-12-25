function foo(a, b) {
  // Handle null or undefined values using nullish coalescing
  const numA = a ?? 0; 
  const numB = b ?? 0; 

  //Check if the inputs are numbers before performing arithmetic
  if (typeof numA !== 'number' || typeof numB !== 'number'){
    return 'Error: Inputs must be numbers';
  }
  return numA + numB;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(5, 'hello')); // Output: Error: Inputs must be numbers