


let promError = false;

function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(promError){
                reject("hat nicht geklappt");
            }else{
                resolve("hat geklappt");
            }
        }, 2000);
    });
}


async function usePromise() {
    let prom = await getPromise();
    console.log(prom);
}