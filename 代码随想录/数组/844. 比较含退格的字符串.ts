/**
 * 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。
 * 注意：如果对空文本输入退格字符，文本继续为空。
 */
function backspaceCompare(s: string, t: string): boolean {
    function toStr(str: string) {
        let index = str.length - 1,
            flag = 0,
            ans = '';
        while (index >= 0) {
            if (str[index] === '#') {
                flag = flag + 1;
                index = index - 1;
            } else {
                if (flag === 0) {
                    ans = str[index] + ans;
                    index = index - 1
                }else {
                    index = index - 1
                    flag = flag - 1
                }
            }
        }
        return ans;
    }
    console.log(toStr(s));
    console.log(toStr(t));
    return toStr(s) === toStr(t);
}
const s = 'aaa#b##',
    t = 'c#p#';
console.log(backspaceCompare(s, t));
export {};
