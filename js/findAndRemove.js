"use strict";


var nums = [1,2,3,4,5,6,7,8,9,10]

var oddNums = [];

var evenNums = [];

function removeOdds(){
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0){
            nums.splice(nums[i], 0)
            oddNums.push(nums[i])
        }else if (nums[i] % 2 === 0){
            nums.splice(nums[i], 0)
            evenNums.push(nums[i])
        }
    }
}

removeOdds();
console.log(oddNums);
console.log(evenNums)