
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

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);