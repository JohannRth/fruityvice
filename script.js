function init(){
    importFruits();
}


async function fetchDataJson(){
    let response = await fetch('https://www.fruityvice.com/api/fruit/all');
    let responseAsJson = await response.json();
    console.log("hat geklappt");
}

function importFruits(){
    fetchDataJson();
}