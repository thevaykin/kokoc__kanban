
export default function editColName() {

    let targ = document.getElementById('thead__tr');

    targ.addEventListener('click', (e) => {
        
        let colNamePre = e.target.innerHTML;
        let input = document.createElement('input');
        input.id = 'thead__td-input';
        input.value = colNamePre;
        e.target.innerHTML = '';
        e.target.append(input);
        
        input.focus();
        input.onblur = (e) => {
            let colNameNext = input.value;
            e.target.parentNode.innerHTML = colNameNext;
        }
    });
}