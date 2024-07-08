


let promError = false;

function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1");
            if(promError){
                reject("hat nicht geklappt");
            }else{
                resolve("hat geklappt");
            }
        }, 1000);
    });
}

function getPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2");
            if(!promError){
                reject("hat nicht geklappt");
            }else{
                resolve("hat geklappt");
            }
        }, 1000);
    });
}

function getPromise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3");
            if(promError){
                reject("hat nicht geklappt");
            }else{
                resolve("hat geklappt");
            }
        }, 1000);
    });
}


async function usePromise() {
    try {
        await getPromise();
        await getPromise2();
        await getPromise3();
        console.log("juhuuuu");
    } catch (error) {
        console.error(error);
    }
    console.log("ende");
}