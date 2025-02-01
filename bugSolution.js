function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){
return a+b;}
else{
return "Error: Operands must be numbers";
}
}
console.log(foo(1, "1")); // Output: Error: Operands must be numbers

function bar(a, b) {
if(typeof a === 'number' && typeof b === 'number'){
return a + b;}
else{
return "Error: Operands must be numbers";
}
}
console.log(bar(1, '1')); //Output: Error: Operands must be numbers