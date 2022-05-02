import addRowAndCells from "./addRowAndCells.js";

export default function dragAndDrop(card) {
    card.onmousedown = function (event) {

        let mouseCoord = {
            x: event.clientX,
            y: event.clientY
        }

        let shiftX = event.clientX - card.getBoundingClientRect().left;
        let shiftY = event.clientY - card.getBoundingClientRect().top;

        card.style.position = 'absolute';
        card.style.zIndex = 20;

        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            card.style.left = pageX - shiftX + 'px';
            card.style.top = pageY - shiftY + 'px';
        }

        let currentDroppable = null;

        function onMouseMove(event) {

            moveAt(event.pageX, event.pageY);

            card.hidden = true;
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            card.hidden = false;    

            if (!elemBelow) return;


            let droppableBelow = elemBelow.closest('#tbody__td');

            if (currentDroppable != droppableBelow) {

                if (currentDroppable) {
                    currentDroppable.style.background = '';
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    currentDroppable.style.background = 'pink';
                }
            }
        }

        document.addEventListener('mousemove', onMouseMove);

        card.onmouseup = function () {

            document.removeEventListener('mousemove', onMouseMove);
            currentDroppable.append(card);
            card.style.position = 'static';
            card.parentNode.style.background = '';
            addRowAndCells();
        };

    };

    card.ondragstart = function () {
        return false;
    };
}