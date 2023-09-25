function totalFruit(fruits: number[]): number {
    let n = fruits.length,
        ans = 0,
        left = 0;
    const cnt = new Map();
    for(let i = 0; i < n; i++) {
        cnt.set(fruits[i], (cnt.get(fruits[i]) || 0) + 1)
        while(cnt.size > 2) {
            cnt.set(fruits[left], (cnt.get(fruits[left])) - 1)
            if(cnt.get(fruits[left]) === 0) {
                cnt.delete(fruits[left])
            }
            left = left + 1
        }
        ans = Math.max(ans, i - left + 1) 
    }
    return ans
}

const fruits = [1, 2, 1, 2, 3];
console.log(totalFruit(fruits));
export {};
