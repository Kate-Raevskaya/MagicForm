let historyString = localStorage.getItem("history");
let history = [];
if (historyString !== null) {
    history = JSON.parse(historyString);
}

let container = document.getElementById("history-container");

function addChild(parent, childClass, name, value) {
    if (value !== "") {
        let flagName = document.createElement("p");
        flagName.className = "label";
        flagName.innerText = name;
        let flagValue = document.createElement("p");
        flagValue.className = `${childClass} userInput`;
        flagValue.innerText = value;
        parent.appendChild(flagName);
        parent.appendChild(flagValue);
    }
}

for (let i = 0; i < history.length; i++) {
    let historyCard = document.createElement("div");
    historyCard.className = "submit-history-card";
    addChild(historyCard,"card-first-name", "First Name", history[i].firstName);
    addChild(historyCard,"card-last-name", "Last Name", history[i].lastName);
    addChild(historyCard,"card-email", "Email", history[i].email);
    addChild(historyCard,"card-phone", "Phone", history[i].phone);
    addChild(historyCard,"card-company", "Company", history[i].company);
    addChild(historyCard,"card-address", "Address", history[i].address);
    let current = history[i];
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        historyCard.remove();
        let index = history.indexOf(current);
        history.splice(index, 1);
        localStorage.setItem("history", JSON.stringify(history));
    });
    historyCard.appendChild(deleteButton);
    container.appendChild(historyCard);
}
