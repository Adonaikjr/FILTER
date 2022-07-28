//tirar numero par !==
//usar numero par ===

function filterPares(array) {
    return array.filter(callback)
};

function callback(item){
    return item % 2 !== 0;
}
const myArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(filterPares(myArray));