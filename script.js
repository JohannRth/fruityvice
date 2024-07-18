function init(){
    importFruits();
}


async function fetchDataJson(){
    let response = await fetch('https://www.fruityvice.com/api/fruit/all');
    return response.json();
}

async function importFruits(){
    let response = await fetchDataJson();
    renderListOfFruits(response);
}

function renderListOfFruits(array){ 
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        let fruitObj = array[i];

        content.innerHTML += generateTable(fruitObj, i,)
    }
}

function generateTable(fruitObj, i,) {
    return /*html*/`
    <tr class="d-flex col">
        <td class="position-rel" onclick="handleCellClick('nestedTable${i}', 'dropdownIcon${i}')">
            <h2>${fruitObj['name']}</h2>
        </td>
        <td id="nestedTable${i}" class="d-none">
            <table>
                <tr>
                    <td class="border-left-right-0">Kohlenhydrate</td>
                    <td class="border-left-right-0">${fruitObj['nutritions']['carbohydrates']} g</td>
                </tr>
                <tr>
                    <td class="border-left-right-0">Protein</td>
                    <td class="border-left-right-0">${fruitObj['nutritions']['protein']} g</td>
                </tr>
                <tr>
                    <td class="border-left-right-0">Fett</td>
                    <td class="border-left-right-0">${fruitObj['nutritions']['fat']} g</td>
                </tr>
                <tr>
                    <td class="border-left-right-0"><b>Kalorien</b></td>
                    <td class="border-left-right-0"><b>${fruitObj['nutritions']['calories']} g</b></td>
                </tr>
            </table>
        </td>
    </tr>
`;
}