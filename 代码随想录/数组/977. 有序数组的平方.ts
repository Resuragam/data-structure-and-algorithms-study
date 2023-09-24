/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，
 * 返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 */
function sortedSquares(nums: number[]): number[] {
    const ans: number[] = [];
    let leftIndex = 0,
        rightIndex = nums.length - 1;
    while (leftIndex <= rightIndex) {
        let leftNumSqare = nums[leftIndex] * nums[leftIndex],
            rightNumSqare = nums[rightIndex] * nums[rightIndex];
        if (leftNumSqare > rightNumSqare) {
            ans.unshift(leftNumSqare);
            leftIndex++;
        } else {
            ans.unshift(rightNumSqare);
            rightIndex--;
        }
    }
    return ans;
}
const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
export {};
