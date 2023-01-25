const API_KEY = "p278PTx-vzXx4KAA4eXfspZuTCo";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const reponse = await fetch(queryString);

    const data = await reponse.json();

    if (reponse.ok) {
        displayStatus(data)
    } else {
        throw new Error(data.error)
    }
}

function displayStatus(data) {
    let heading = "API Key Status";
    let results = `<div>Your key is valid until</div>`;
    results += `<div class="key-status">${data.expiry}</div>`

    document.getElementById("resultsModalTitle").innerHTML = heading
    document.getElementById("results-content").innerHTML = results

    resultModal.show();
}