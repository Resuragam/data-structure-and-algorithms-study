function groupAnagrams(strs: string[]): string[][] {
    const res:string[][] = []
    const idx = new Map()
    strs.map((item,index) => {
        const transItems = item.split('').sort().join('')
        if(idx.has(transItems)) {
            res[idx.get(transItems)].push(strs[index])
        } else {
            idx.set(transItems, res.length)
            res.push([strs[index]])
        }
    })
    return res
};


const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
export {};
