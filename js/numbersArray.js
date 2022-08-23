"use strict";

var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function findTarget(num){
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === num){
            console.log(nums[i])
        }

    }
}

findTarget(13);