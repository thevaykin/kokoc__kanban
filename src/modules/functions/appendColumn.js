
export default function appendColumn() {
    let plus = document.getElementById('append__thead-tr');
    plus.style.cursor = 'pointer';
    plus.onclick = () => {
        let theadTd = document.createElement("td");
        theadTd.id = 'thead__td';
        theadTd.innerHTML = "New column";
        document.getElementById('thead__tr').append(theadTd);

        //adding cells when adding a column
        for (let i of document.getElementById('tbody').childNodes) {
            if (i.nodeType == 3) {
                continue;
            }
            let newTd = document.createElement("td");
            newTd.id = 'tbody__td';
            i.append(newTd);
        }
    }
}