function wait(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("GRESHKA");
            resolve(seconds + 1);
        }, seconds * 1000);
    })
}

// wait(1)
//     .then(() => {
//         console.log(1);
//         return wait(2);
//     })
//     .then(() => console.log(2))
//     .then(() => console.log(3))
//     .then(() => console.log(4));

async function run() {
    try {
    let result = await wait(1);
    } catch(err) {
        console.log(err);
    }
    
    console.log("asd");
}

run();

