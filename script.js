let tbody = document.querySelector("tbody");
let oRows = Array.from(tbody.querySelectorAll("tr"));


function filterChamps() {
    let tbody = document.querySelector("tbody");
    let rows = Array.from(tbody.querySelectorAll("tr"));
    
    if (oRows.length === 0) {
        
        oRows = rows.slice();
    }

    if(document.getElementById('Qualified').checked){

        for (let i = 0; i < rows.length; i++) {
        tbody.removeChild(rows[i]);
        }

        for (let i = 0; i < 5; i++) {
        tbody.appendChild(rows[i]);
        }

    }else{

        normalState(tbody,oRows);

    }

}

function normalState(tbody,oRows){

    for (let i = 0; i < oRows.length; i++) {
        tbody.appendChild(oRows[i]);
    }
}


function sortUpToDown() {
    let tbody = document.querySelector("tbody");
    let rows = Array.from(tbody.querySelectorAll("tr"));
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows.length - i - 1; j++) {
            let currentRowPts = Number(rows[j].getElementsByTagName('td')[7].innerText);
            let nextRowPts = Number(rows[j + 1].getElementsByTagName('td')[7].innerText);

            if (currentRowPts < nextRowPts) {
                let temp = rows[j];
                rows[j] = rows[j + 1];
                rows[j + 1] = temp;
            }
        }
    }



    for (let i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
        }

}

function sortDownToUp() {
    let tbody = document.querySelector("tbody");
    let rows = Array.from(tbody.querySelectorAll("tr"));
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows.length - i - 1; j++) {
            let currentRowPts = Number(rows[j].getElementsByTagName('td')[7].innerText);
            let nextRowPts = Number(rows[j + 1].getElementsByTagName('td')[7].innerText);

            if (currentRowPts > nextRowPts) {
                let temp = rows[j];
                rows[j] = rows[j + 1];
                rows[j + 1] = temp;
            }
        }
    }

    
    for (let i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
        }

}

const checkbox = document.getElementById('Qualified');
checkbox.addEventListener("click", filterChamps);

const up = document.getElementById('sortup');
up.addEventListener("click", sortUpToDown);

const down = document.getElementById('sortdown');
down.addEventListener("click", sortDownToUp);