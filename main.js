// 1:reversee a string
// const reverseString = (str) => {
//     let newStr = "";
    
//     for(let i = str.length-1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// } 




// 2:Remove duplicates from sorted array 
//  const arr = [2 , 9 , 3 , 2 , 8];
//  const newArr = [];

//  for(let i = 0; i < arr.length; i++) {
//     let isRepeated = false;

//     for(let j = 0; j < newArr.length; j++) {
//         if(arr[i] === newArr[j]) {
//             isRepeated = true;
//             break;
//         }
//     }
       
//     if(!isRepeated) {
//       newArr[newArr.length] = arr[i];
//     }
//  }
// console.log(newArr);