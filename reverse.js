let input = "Subhajit"; // input string to be reversed

setTimeout(() => {
  let reversed = input.split("").reverse().join(""); // reverse the input string
  console.log(reversed); // print the reversed string to the console
}, 2000); // delay the execution of the code inside the function by 2 seconds (2000 milliseconds)
