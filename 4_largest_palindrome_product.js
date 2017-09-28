/* ALARM!!! WRONG!!!

	Largest palindrome product
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/



var i,j,mul,max,k,n;
var answer=0;
for (i=999; i>=100; i--) {
    for (j=999; j>=100; j--) {
        p=i*j;
        mul=p;
        max=0;
        do {
            max=max*10+p%10;
            p=Math.trunc(p/10);
        } while (p>=1);
        if ((mul==max)&&(max>answer)) {
            answer=max;
        }
    }
}
console.log("Answer: " + answer);