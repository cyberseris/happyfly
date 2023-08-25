
const idAry = ['buy', 'pay', 'member', 'pay-list', 'cancel'];

const checkScreenWidth = () => {
    for (let i = 0; i < idAry.length; i++) {

        const div = document.getElementById(`${idAry[i]}`);

        if (window.innerWidth < 768) {
            div.classList.remove('show');
        } else {
            div.classList.add('show');
        }
    }
}

window.addEventListener('resize', checkScreenWidth);

const changeIcon = () => {
    const btn = document.querySelectorAll('.btn');
    // const test=document.querySelectorAll('.btn > span');
    for (let b = 0; b < btn.length; b++) {

        const span = btn[b].querySelector('span');
        
        btn[b].addEventListener('click', () => {
            if (span.innerText === 'keyboard_arrow_down') {
                span.innerText = 'keyboard_arrow_up'
            } else {
                span.innerText = 'keyboard_arrow_down'
            }
        })
    }
};

changeIcon();



