
export function editForCard(e, form) {

    document.getElementById('blackout').style.display = 'block';
    form.style.display = 'flex';
    document.getElementById('btnSubmit').innerHTML = 'Редактировать';
    form.elements.name.value = e.target.childNodes[0].innerHTML;
    form.elements.desc.value = e.target.childNodes[1].innerHTML;
    form.elements.color.value = e.target.style.background;

    form.onsubmit = (event) => {
        event.preventDefault();

        e.target.childNodes[0].innerHTML = form.elements.name.value;
        e.target.childNodes[1].innerHTML = form.elements.desc.value;
        e.target.style.background = form.elements.color.value;

        document.getElementById('blackout').style.display = 'none';
        form.style.display = 'none';
    }
}

export function editForClickInnerCard(e, form) {
    
    document.getElementById('blackout').style.display = 'block';
    form.style.display = 'flex';
    document.getElementById('btnSubmit').innerHTML = 'Редактировать';
    form.elements.name.value = e.target.parentNode.childNodes[0].innerHTML;
    form.elements.desc.value = e.target.parentNode.childNodes[1].innerHTML;
    form.elements.color.value = e.target.parentNode.style.background;

    form.onsubmit = (event) => {
        event.preventDefault();
        e.target.parentNode.childNodes[0].innerHTML = form.elements.name.value;
        e.target.parentNode.childNodes[1].innerHTML = form.elements.desc.value;
        e.target.parentNode.style.background = form.elements.color.value;

        document.getElementById('blackout').style.display = 'none';
        form.style.display = 'none';
    }

}
