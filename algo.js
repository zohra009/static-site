// let strArr = ["a", "b", "c", "d"]

// function array(strArr) {
//     for(i = 0; i < strArr.length; i++){
//         console.log(strArr[i]); 
//     }
// }
// array(strArr);

// let numArr = [1, 2, 3, 4]

// function num(numArr){
   
//      numArr.sort((a,b) => b - a) 
   
//      console.log(numArr[0]);
   
// }

// num(numArr);

//add all num and return sum
// function sum(numArr){
//     let total = 0;
//    for(i = 0 ; i < numArr.length; i++){
//      total += numArr[i]
//    }
//     return total;
  
// }

// console.log(sum(numArr));


/////////////////////////////////////////////////////////////////////
//Hashtables
//check for duplicates in arr 
//print t/f 


// const arr = [ "{", "]", "}", "["]

// function hasDuplicate(arr){
//     let hashTable = {};

//     for(i = 0; i < arr.length; i++){
//         if(arr[i] in hashTable){
//             return true;
//         }else {
//             hashTable[arr[i]] = true
//         }
//     }
//     return false;
// }
// console.log(hasDuplicate(arr));

////////////////////////////////
//list of nums 
//return T if any two num add up to 10 

let arrNum = [ 1, 8, 4, 5];
let total = 9;

function sumTotal(arrNum, total){
    //hashtable stores items that are missing if it doesnt already exist 
    let hashTable = {};

    for(i = 0; i < arrNum.length; i++){
        //console.log(arrNum[i])
        let difference = total - arrNum[i];
        if(!(arrNum[i] in hashTable)){
            //pushing in # that doesnt exist in hashtable
             hashTable[difference] = true; 
             //console.log(hashTable);
        }else{
            return true;
        }
    }
    return false; 
}
console.log(sumTotal(arrNum, total));



cache = {}
function fib(x){
    if (x in cache){
        return cache[x]
    }
    if (x < 2){
        return 1;
    } else {
        res =  fib(x-1) + fib(x-2)
        cache[x] = res
        return res;
    }
}
console.log(fib(180));

