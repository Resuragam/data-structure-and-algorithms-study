/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */
function search(nums: number[], target: number) {
    // 如果数组是无序的，需要先进行排序（默认从小到大进行排序）
    nums.sort((a, b) => a - b);
    // 左右指针判断
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            // 中间值较大，直接移动右指针
            right = mid - 1;
        } else if (nums[mid] < target) {
            // 中间值较小，移动左指针
            left = mid + 1;
        }
    }
    return -1;
}

const nums = [-1, 0, 3, 5, 9, 12],
    target = 9;
console.log(search(nums, target));
export {}
