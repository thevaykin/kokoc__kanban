export default function addRowAndCells() {
    let nodes = [];
    for (let i of document.getElementById('tbody').childNodes) {
        if (i.nodeType == 3) {
            continue;
        }
        nodes.push(i);
    }
    nodes.reverse();
    let resNodes = nodes[0];

    for (let i of resNodes.childNodes) {
        if (i.childNodes.length > 0) {

            let newTr = document.createElement("tr");
            //adding cells when adding a row
            for (let j of document.getElementById('thead__tr').childNodes) {
                if (j.nodeType == 3) {
                    continue;
                }
                let newTd = document.createElement("td");
                newTd.id = 'tbody__td';
                newTr.append(newTd);
            }
            document.getElementById('tbody').append(newTr);
        }
    }
}