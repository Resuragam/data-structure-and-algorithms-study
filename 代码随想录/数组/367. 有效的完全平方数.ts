/**
 * 给你一个正整数 num 。如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 * 完全平方数 是一个可以写成某个整数的平方的整数。换句话说，它可以写成某个整数和自身的乘积。
 * 不能使用任何内置的库函数，如  sqrt 。
 */
function isPerfectSquare(num: number): boolean {
    let currentNum = 0;
    while (currentNum * currentNum <= num) {
        if(currentNum * currentNum === num) {
            return true
        }
        currentNum = currentNum + 1;
    }
    return false
}
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(8));
export {};
