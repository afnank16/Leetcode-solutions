var reverse = function(x) {
    let str=String(x)
    let numbers=[1,2,3,4,5,6,7,8,9,0]
    let reversed="";
    let specialChar=""
    
    for(let i of str){
        if(numbers.includes(Number(i))){
            reversed+=i
        }
        else{
            specialChar=i
        }
    }
    reversed=reversed.split('').reverse().join('')
    reversed=specialChar+reversed
    reversed=Number(reversed)
    if(reversed>2**31-1 || reversed<-(2**31)){
        return 0
    }
    else{
        return reversed
    }
};
console.log(reverse(123))