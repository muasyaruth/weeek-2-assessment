// // First question. Reversing an array
function reverse(name){
    let StringName=name.split('');

    let reversedname=StringName.reverse();
    let reversedString=reversedname.join('');
    return reversedString
}
let myName="Ruth";
let reversedname=reverse(myName)
console.log(reversedname)


// //question 2
function count(){
    let sentence="This is my assignment"
    let sentenceLength=sentence.length
    console.log(sentenceLength)
}
count()

//question 3
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function userNumbers() {
    rl.question("Enter numbers", (numbers) =>{
        let array = numbers.split(',')
        for (let i = 0; i < array.length; i++) {
            sum += parseInt(array[i]);
    }
    
    console.log('Sum:', sum);
        rl.close();
});
}

let sum = 0;
userNumbers();

// question 4
function myPalindrome(str){
    let firstString=
}

//question 5
function divide(array, chunk){
    
    let newArray=[];

    for(let i=0; i<array.length; i+=chunk){
        let myChunk=array.slice(i, i+chunk);

        newArray.push(myChunk);
    }
    return newArray;
}
let largeArray=[3,4,2,34,56,67,2,4,9];
let chunkLength=2;
let finalArray= divide(largeArray, chunkLength);
console.log(finalArray)

// //question 6
// function reverseInteger(){
//     rl.question("Enter a number: ", (myInteger) => {
//         // Convert the input string to a number
//         let num = parseInt(myInteger);

//         // Reverse the order of digits
//         let reversedInteger = parseInt(num.toString().split('').reverse().join(''));

//         console.log('Reversed:', reversedInteger);

//         rl.close();
//     });

    
// }
// reverseInteger()


