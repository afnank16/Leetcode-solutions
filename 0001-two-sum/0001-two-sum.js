var twoSum = function (nums, target) {
//we have used simple brute force approach for this problem
    let indices = [];

    for (let i = 0; i < nums.length; i++) {
        let char1 = i;
        for (let j = i+1; j < nums.length; j++) {
            let char2 = j
            if (nums[char1] + nums[char2] === target) {
                indices.push(char1,char2)
            }
        }
    }

    return(indices)
};
let nums = [2, 7, 11, 15]
let target = 9
console.log(twoSum(nums, target))
