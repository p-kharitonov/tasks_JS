/*
	Even Fibonacci numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million,
find the sum of the even-valued terms.
*/

var max=4000000;
var sum=0;
var term=2;
var beforeTerm=1;
var i;
while (term<=max) {
    if (term%2===0) sum+=term;
	i=term;
	term+=beforeTerm;
	beforeTerm=i;
}
console.log("Answer: "+sum);