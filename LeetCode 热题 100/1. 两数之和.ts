function twoSum(nums: number[], target: number): number[] {
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if(map.get(diff) || map.get(diff) === 0) {
            return [i, map.get(diff)]
        }else {
            map.set(nums[i], i)
        }
    }
    console.log(map)
    return []
}

const nums = [2, 7, 11, 15],
    target = 9;
console.log(twoSum(nums, target));

export {};
