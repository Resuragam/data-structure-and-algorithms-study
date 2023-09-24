/**
 * @description 
 * 给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。
 * 如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。
 * 返回 合并后的字符串 。
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const m = word1.length, n = word2.length;
    const ans = [];
    let i = 0, j = 0;
    while(i < m || j < n) {
        if(i < m) {
            ans.push(word1[i]);
            i++;
        }
        if(j < n) {
            ans.push(word2[j]);
            j++;
        }
    }
    return ans.join('');
};
