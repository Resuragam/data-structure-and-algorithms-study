/**
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 */

function searchRange(nums: number[], target: number): number[] {
    function searchLeftBorder(nums: number[], target: number): number {
        let left = 0,
            right = nums.length - 1,
            leftBorder = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                leftBorder = mid
                right = mid - 1;
            }
        }
        return leftBorder;
    }

    function searchRightBorder(nums: number[], target: number): number {
        let left = 0,
            right = nums.length - 1,
            rightBorder = -1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                rightBorder = mid
                left = mid + 1
            }
        }
        return rightBorder;
    }

    let leftBorder = searchLeftBorder(nums, target)
    let rightBorder = searchRightBorder(nums, target)
    // console.log(leftBorder, rightBorder)
    if(leftBorder === -1 && rightBorder === -1) {
        return [-1, -1]
    }else {
        return [leftBorder, rightBorder]
    }
}
const nums = [5, 7, 7, 8, 8, 10],
    target = 8;
console.log(searchRange(nums, target));
export {};
