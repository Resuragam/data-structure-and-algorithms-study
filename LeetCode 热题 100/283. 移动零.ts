/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let slowIndex = 0;
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[fastIndex] !== 0) {
            let temp = nums[fastIndex]
            nums[fastIndex] = nums[slowIndex]
            nums[slowIndex] = temp
            slowIndex = slowIndex + 1;
        }
    }
    console.log(nums);
}
const nums = [ 1, 0, 3];
moveZeroes(nums);
export {};
