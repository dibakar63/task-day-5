//1.a.print odd numbers in an array
let array=[1,2,3,4,5,6,7,8];
for(let i=0;i<array.length;i++){
    if(i%2!=0){
         //console.log(i);
    }
}
//output 1,3,5,7
//1.b.convert all the strings in title cap in a string array

var array2 = ["melon","banana","apple","orange","lemon"];
array2 = array2.map((x)=>{ return x.toUpperCase(); })

//console.log(array2);
//output=['MELON', 'BANANA', 'APPLE', 'ORANGE', 'LEMON']
//1.c.sum of all the numbers in an array
function getsum(...args){
  let sum=0;  
  for(let i=0;i<args.length;i++){
    sum+=args[i]

}
  return sum ;
}
//console.log(getsum(10,20,30,40,50));
//output=150
//1.d return all the prime numbers in an array
let arr=[3,5,7,12,15,53]
function checkPrime(number){
  if(number<=1){
    return false;
  }else{
    for(let i=2;i<number;i++){
      if(number%i==0){
        return false;
      }
    }
  }
   return true;
}
let isPrime;
arr.forEach(function (element) {
  const isPrime = checkPrime(element);
  if (isPrime) {
    console.log(`${element} is a prime number`);
  } else {
    console.log(`${element} is NOT a prime number`);
  }
});
//output 3,5,7,53 is a prime number
//12,15 is not a prime number
//1.e.return all the plaindromes in an array
const arr1 = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      } else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr1=> {
   return arr1.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr1));
//output [12321,'did']
//1.f.return the median of two sorted arrays of same size
function medianTwoArrays(num1, num2) {
  let newArray = num1.concat(num2)
  let sorted = newArray.sort((a,b) => a - b)

  if (sorted.length % 2 === 1) {
    return sorted[(sorted.length/2) -.5]
  } 
    else {
 return (sorted[sorted.length/2] + sorted[sorted.length/2 -1]) /2
  }
}
//1.g.remove the duplicates in an array
let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);

//1.h.
function arrayRotate(arr4,reverse){
  if (reverse) arr4.unshift(arr4.pop());
  else arr4.push(arr.shift());
  return arr4;
}
console.log(arrayRotate([1,2,3,4,5]));//[2,3,4,5,1]
console.log(arrayRotate([1,2,3,4,5],true));[5,1,2,3,4]