function init(){
    importFruits();
}


async function fetchDataJson(){
    let response = await fetch('https://www.fruityvice.com/api/fruit/all');
    let responseAsJson = await response.json();
    console.log("responseAsJson");
}

function importFruits(){
    fetchDataJson();
}

function renderListOfFruits(){
    document.getElementById('content') = '';

    for (let i = 0; i < responseAsJson.length; i++) {
        let fruits = responseAsJson[i];
        document.getElementById('content') = /*html*/`
            <h1>fruits${i}</h1>
        `
    }
}