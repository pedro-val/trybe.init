const arr = [1,2,3,4,5,'foo','bar','baz']

console.log(JSON.stringify(arr));
console.log(JSON.stringify(arr, null, 2));
console.log(arr.toString());
console.log(`${arr}`);
console.log(arr.join('\n'));