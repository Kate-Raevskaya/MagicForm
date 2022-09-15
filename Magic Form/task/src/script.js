const nodeList = document.querySelectorAll("input");

function update() {
    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i].value !== localStorage.getItem(nodeList[i].id)) {
            nodeList[i].value = localStorage.getItem(nodeList[i].id);
        }
    }
}

update();
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener("input", () => {
        localStorage.setItem(nodeList[i].id, nodeList[i].value);
    });
}

setInterval(update, 100);

let history = localStorage.getItem("history");
if (history === null) {
    history = [];
} else {
    history = JSON.parse(history);
}

let form = document.getElementById("form");
form.addEventListener('submit', () => {
    let flag = false;
    for (let j = 0; j < nodeList.length; j++) {
        if (nodeList[j].value !== "") {
            flag = true;
            break;
        }
    }
    if (flag) {
        history.push({
            firstName: nodeList[0].value,
            lastName: nodeList[1].value,
            email: nodeList[2].value,
            phone: nodeList[3].value,
            company: nodeList[4].value,
            address: nodeList[5].value
        });
        localStorage.setItem("history", JSON.stringify(history));
        for (let i = 0; i < nodeList.length; i++) {
            localStorage.setItem(nodeList[i].id, "");
        }
    }
});



