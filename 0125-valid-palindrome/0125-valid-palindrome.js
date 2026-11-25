/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase(). replace(/[^a-z0-9]/g, "");
   let k = ""
   for(let i=s.length-1; i>=0; i--){
     k+=s[i]
   }
  if(k===s) return true
  else return false
};