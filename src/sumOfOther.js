module.exports =
function sumOfOther(arr) {
    const sum = arr.reduce((acc, item) => acc+item, 0);
    return arr.map(x => sum-x);
}