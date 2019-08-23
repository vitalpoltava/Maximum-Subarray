/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  const res = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (res[i-1] + nums[i] > nums[i]) {
      res.push(res[i-1] + nums[i]);
    } else {
      res.push(nums[i]);
    }
  }

  return Math.max(...res);
};