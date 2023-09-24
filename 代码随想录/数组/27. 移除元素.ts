/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
*/

function removeElement(nums: number[], val: number): number {
    let slowIndex = 0, fastIndex = 0
    while(fastIndex < nums.length) {
        if(nums[fastIndex] === val) {
            fastIndex = fastIndex + 1
        }else {
            nums[slowIndex] = nums[fastIndex]
            slowIndex = slowIndex + 1
            fastIndex = fastIndex + 1
        }
    }
    console.log(nums)
    return slowIndex 
}; 
const nums = [0,1,2,2,3,0,4,2], val = 2
console.log(removeElement(nums, val))
export {}
