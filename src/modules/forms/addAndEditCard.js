import { editForCard, editForClickInnerCard } from "./editCard.js";
import dragAndDrop from "../functions/dragAndDrop.js";
import addRowAndCells from "../functions/addRowAndCells.js";

export default function addAndEditCard() {
    let targ = document.getElementById('table');
    let form = document.forms[0];

    targ.onclick = (e) => {

        if (e.target.tagName == 'TD' && e.target.id == 'thead__td') {
            return;
        }

        if (e.target.tagName == 'TABLE') {
            return;
        }

        if (e.target.tagName == 'TD' && e.target.childNodes.length > 0) {
            return;
        }

        if (e.target.id == 'thead__td-input') {
            return;
        }

        //editingCards
        if (e.target.id == 'card') {
            editForCard(e, form);
        } else if (e.target.id == 'nameCard' || e.target.id == 'descCard') {
            editForClickInnerCard(e, form);
        } else {

            //addingCards
            document.getElementById('blackout').style.display = 'block';
            form.style.display = 'flex';
            document.getElementById('btnSubmit').innerHTML = 'Создать';

            form.onsubmit = (event) => {
                event.preventDefault();

                let card = document.createElement('div');
                let description = document.createElement('p');
                description.id = 'descCard';
                let name = document.createElement('h2');
                name.id = 'nameCard';
                card.append(name, description);
                name.innerHTML = form.elements.name.value;
                description.innerHTML = form.elements.desc.value;
                card.style.width = '150px';
                card.style.height = '150px';
                card.style.background = form.elements.color.value;
                card.style.overflowX = 'hidden';
                card.style.cursor = 'pointer';
                card.draggable = true;
                card.id = 'card';
                name.style.margin = '5px';
                description.style.margin = '5px';

                e.target.append(card);

                //realize dragAndDrop for each of cards
                dragAndDrop(card);
                
                //adding rows under prerows
                addRowAndCells();

                document.getElementById('blackout').style.display = 'none';
                form.style.display = 'none';

            }
        }
    }
    // }
}
