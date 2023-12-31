/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 */
function searchInsert(nums: number[], target: number): number {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] > target) {
            right = mid - 1
        }else if(nums[mid] < target) {
            left = mid + 1
        }else {
            return mid
        }
    }
    return left
}

const nums = [1, 3, 5, 6],
    target = 7;
console.log(searchInsert(nums, target));

export {};
