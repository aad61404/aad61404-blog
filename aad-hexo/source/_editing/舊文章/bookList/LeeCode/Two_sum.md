
### Two Sum

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

```sh
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i=0; i < nums.length ; i++) {
      for(j=i+1; j<nums.length; j++) {
          if(nums[i]+ nums[j] == target) {
              return [i,j]
          }
      }
    }
   
};
```
