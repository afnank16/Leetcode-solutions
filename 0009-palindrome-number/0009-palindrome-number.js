var isPalindrome = function(x) {
    let str=String(x)
    str=str.split('').reverse().join('')
    if(x==str){
        return true
    }
    else{
        return false
    }
};
 console.log(isPalindrome(121))