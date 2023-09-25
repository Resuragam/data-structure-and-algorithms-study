/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 注意：
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 */

function minWindow(s: string, t: string): string {
    const map = new Map<string, number>();
    let left = 0,
        right = 0,
        count = t.length,
        minLen = Infinity,
        minStart = 0;

    // 初始化 map，记录 t 中每个字符出现的次数
    for (const ch of t) {
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }

    // 移动右指针，找到包含 t 中所有字符的子串
    while (right < s.length) {
        const ch = s[right];
        if (map.has(ch)) {
            if (map.get(ch)! > 0) {
                count--;
            }
            map.set(ch, map.get(ch)! - 1);
        }
        right++;

        // 移动左指针，缩小窗口
        while (count === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minStart = left;
            }
            const ch = s[left];
            if (map.has(ch)) {
                if (map.get(ch)! === 0) {
                    count++;
                }
                map.set(ch, map.get(ch)! + 1);
            }
            left++;
        }
    }

    return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
}

const s = 'ADOBECODEBANC',
    t = 'ABBC';
console.log(minWindow(s, t));
export {};
