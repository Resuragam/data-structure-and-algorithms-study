/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其总和大于等于 target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。
 * 如果不存在符合条件的子数组，返回 0 。
 */
function minSubArrayLen(target: number, nums: number[]): number {
    let leftIndex = 0, // 窗口起始位置
        sum = 0,
        subLength = Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        while (sum >= target) {
            let currentSize = i - leftIndex + 1;
            subLength = subLength >= currentSize ? currentSize : subLength
            sum = sum - nums[leftIndex]
            leftIndex = leftIndex + 1
            // console.log(sum)
        }
    }
    return subLength === Infinity ? 0 : subLength
}

const target = 7,
    nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
export {};
