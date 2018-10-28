function rec(level, arr, obj) {
  if (arr.length < level + 1) arr.push([]);
  arr[level].push(obj.value);
  if ('left' in obj) rec(level + 1, arr, obj.left);
  if ('right' in obj) rec(level + 1, arr, obj.right);
}

module.exports = function recursion(tree) {
  const arr = [[]];
  const level = 0;
  rec(level, arr, tree);
  return arr;
};
