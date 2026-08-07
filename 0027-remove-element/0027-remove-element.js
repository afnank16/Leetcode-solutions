var removeElement = function(nums, val) {

    count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[count]=nums[i]
            count+=1
        }
       
    }
    return count
};
let a=[3,2,2,3];
let val=3
console.log(removeElement(a,val))