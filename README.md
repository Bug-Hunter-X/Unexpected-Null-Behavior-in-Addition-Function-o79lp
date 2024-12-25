# Unexpected Null Behavior in Addition Function

This repository demonstrates a common JavaScript error related to handling null values in arithmetic operations. The `foo` function is intended to add two numbers, but it exhibits unexpected behavior when one or both of the input values are null.

## Bug Description
The `foo` function does not properly handle null input. It returns null in cases where either 'a' or 'b' is null, even though a more appropriate response might be 0 or to throw an error.

## Bug Solution
The `bugSolution.js` file provides a corrected version of the function, demonstrating how to handle null values appropriately. This version uses the nullish coalescing operator (`??`) to assign a default value of 0 to null values. This version also includes handling for non-numeric values to provide more robust functionality. 
