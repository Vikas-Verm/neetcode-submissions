class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (!Array.isArray(nums)) {
            return [];
        }
        let n = new Map();
        for (let i = 0; i < nums.length; i++) {
            let value = target - nums[i];
            if (n.has(value)) {
                return [n.get(value), i];
            }
            n.set(nums[i], i);
        }
        return [];
    }
}
