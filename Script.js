// const returnVowel = (n) =>{
//     console.log(n)
// }
// for(let i=0; i<50; i++){
//     returnVowel(i);
// }

// function countVowel(n){
// let count = 0;
// for(let i=0; i<n.length; i++){
//     if(n[i] === 'a'|| n[i] === 'e'|| n[i] === 'i'|| n[i] === 'o'||n[i] === 'u'){
//     count+=1;
//     }
// }
// console.log(count);
// }

// console.log(countVowel("aeiou"));

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

// arr.forEach((n) =>{
//     console.log(n*n);
// });

// let marks = [87,93,64,99,86];
// let mark = marks.filter((value)=>{
// return value>90;
// });

// console.log(mark);

let n = prompt("Enter number : ");
let arr = [n];

for(let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);


let totalSum = arr.reduce((sum,current) =>{
    return sum*current;
})

console.log(totalSum);







