var findMedianSortedArrays = function(nums1, nums2) {
    let merged=[]
    let median=0
    
    for(let i=0;i<nums1.length;i++){
        merged.push(nums1[i])
    }
    for(let i=0;i<nums2.length;i++){
        merged.push(nums2[i])
    }
    merged=merged.sort((a,b)=>a-b)
    
    if(merged.length%2==0){
        
        let start=merged.length/2-1
        let findMedian=[]
        let sum=0
        for(let i=start; i<start+2; i++){
            findMedian.push(merged[i])
        }
        for(let i=0;i<findMedian.length;i++){
            sum+=findMedian[i]
        }
        median=sum/2
    }
    else{
         if(merged.length<2){
            median=merged[0]
        }
        else{
            median=merged[(merged.length)/2-0.5]
        }
    }
    return(median)


}; 

let a1=[1,2,3]
let a2=[4,6,5]
console.log(findMedianSortedArrays(a1,a2))