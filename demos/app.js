let obj = {
    [Symbol.iterator]() {
        let index = 0;
        return {
            next(){
                return {value: ++index, done: false};
            }
        }
    }
}

function* idGeneratorFactory() {
    let lastId = 0;
    let result = yield 1;
    console.log(result);
    yield 2;
    yield 3;
    yield 4;
}

let idGenerator1 = 
    idGeneratorFactory();

// for(let id of idGenerator1) {
//     console.log(id);
// }

console.log(idGenerator1.next(5));
console.log(idGenerator1.next(5));
