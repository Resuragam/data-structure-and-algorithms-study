/**
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5
 */
function mySqrt(x: number): number {
    let ans = 0
    while(ans * ans <= x) {
        ans = ans + 1
    }
    return ans - 1
};
const x = 8
console.log(mySqrt(x))
export {};
