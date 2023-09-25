function longestConsecutive(nums: number[]): number {
    let ans = 0,
    numSet = new Set(nums);
    console.log(numSet)
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num,
                currentLen = 1;
            while (numSet.has(currentNum + 1)) {
                currentLen = currentLen + 1;
                currentNum = currentNum + 1;
            }
            ans = Math.max(ans, currentLen);
        }
    }
    return ans;
}

const nums = [100, 4, 200, 1, 3, 2, 3];
console.log(longestConsecutive(nums));
export {};
