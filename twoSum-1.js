/* 
1. TWO SUM Problem 
TIME Complexity : O(N)
SPACE Complexity : O(N)
*/
// Hash table solution 

var twoSum = function(nums, target) {
    let res=[]
    const obj = {} //create a new obj and add array value to it as key and value as index.
    for(let i=0; i < nums.length; i++){
        let val = target - nums[i];
        if(obj[val] !== undefined){
            res = [i, obj[val]] // if val exists then return index array 
            break;
        }
            obj[nums[i]]=i; // otherwise add array with index in obj.
    }
    return res
};
