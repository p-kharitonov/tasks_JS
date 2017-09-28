/*
	Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

var num=600851475143;
var num2=num;
var max=0;
var i;
for (i=2; i<num; i++) {
    if ((num2%i)===0) {
        max=i;
        num2/=i;
    }
    if (num2<=1) break;
}
console.log("Answer: " + max);