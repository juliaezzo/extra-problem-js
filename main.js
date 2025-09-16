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

// 3:Three Sum
// const arr = [1, 4, 45, 6, 10, 8];
// let sum = 13;

// const hasTriplet = (arr, sum) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         let triplete = arr[i] + arr[j] + arr[k];

//         if (triplete === sum) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// };

// 4:Container with Most Water
// const arr = [1, 4, 5, 3];
// output = 6;

// const maxAmount = (arr,area) => {
//     let maxArea =0;
// for(let i = 0; i < arr.length; i++) {
//    for(let j = i+1; j < arr.length; j++) {
//     let height;
//     if(arr[i] < arr[j]) {
//         height = arr[i];
//     }
//     else {
//         height = arr[j];
//     }
//     area = height * (j-i);
//     if(area > maxArea) {
//         maxArea = area;
//     }
//    }
// }
// return maxArea;
// }
// console.log(maxAmount(arr));

// 5:Longest Substring Without Repeating Characters ماعرفت التكملة
// const longestSub = (str) => {
//     let newStr = "";
//     let maxLength = 0;

//     for(let i = 0; i < str.length; i++) {
//         let isRepeated = false;
//         let char = str[i];

//         for(let j = 0; j < newStr.length; j++) {
//             if(newStr[j] === char) {
//                 isRepeated = true;
//                 break;
//             }
//         }

//         if(!isRepeated) {
//             newStr += char;
//         }
//     }

// }





// 6:Trapping Rain Water Problem فهمتا بس ماعرفت اكتب الكود
// const rainWater = (arr) => {
    
// }