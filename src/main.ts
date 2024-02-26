const age:number=5;
for (let i = 1; i <= age; i++) {
 console.log(i)
}
if(age>=18){
 console.log("age bigger than 18")
}else{
 console.log("age smaller than 18")
}
const score:number=0;
if(score.valueOf()){
 console.log("Score is available")
}
if (score) {
 console.log('Score is evaluated as truthy.');
} else {
 console.log('Score is not evaluated as truthy.');
}
const username: string[]=[];
if(username){
 console.log("Username is available");
}else{
 console.log("Username is not available");
}
if (!username) {
 console.log('Username is evaluated as falsy');
}
const isAdmin:boolean=false;
if(isAdmin){
 console.log("'isAdmin is evaluated as truthy");
}else{
 console.log("isAdmin is not evaluated as truthy");
}
if (isAdmin === false) {
 console.log("isAdmin is false.");
}

var txt = "";
for(let i=1;i<=5;i++){
 txt = "";
 for(let j=i;j<5;j++){
  txt += " ";
 }
 for(let k=0;k<(i*2)-1;k++){
  txt += "*";
 }
 console.log(txt);
}
//Create an array of numbers. Use the '.map' function to double all the numbers in the array.
const numbers:number[]=[1,2,3,4,12];
const doubleNumbers: number[] = numbers.map((number: number): number => number * 2);
console.log(doubleNumbers);

// Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
const words:string[]=["apple","banana","word"];
const longer5letters: string[]=words.filter(n=> n.length>5)
console.log(longer5letters);

//Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
const reduce:number=numbers.reduce((n1, n2) => n1 + n2, 0);
console.log(reduce);

//Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
const check:boolean=numbers.some(n=>n>10);
console.log(check);

const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
//Sort these numbers in descending order.
const sortList:number[]=list.sort((a, b) => b - a);
console.log(sortList);

//Square these numbers
const squareNumbers: number[] = list.map((number: number): number => number * number);
console.log(squareNumbers);

//Remove the lowest two numbers and the highest 4 numbers from the list.
sortList.splice(-2);
sortList.splice(0,4);
console.log(sortList);

//Remove all numbers that are divisible by 4.
const neuList=sortList.filter(n => n % 4 != 0);
console.log(sortList)

const sum:number=sortList.reduce((n1,n2)=>n1+n2)
console.log(sum);