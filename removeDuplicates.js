const removeDuplicates= (arrValue)=>{
    const  arr=[...new Set(arrValue)];
    return arr;
}

console.log(removeDuplicates([1, 0, 1, 1, 'sid', 'sid', 0]));