/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];

    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            let num = remaining[i];

            current.push(num);

            let newRemaining = remaining.filter((_, index) => index !== i);//keep only the elements which are not equal to i

            backtrack(current, newRemaining);

            current.pop();
        }
    }

    backtrack([], nums);

    return result;
};