const adjustModalSize = () => {
    const modalDialog = document.querySelector('.modal-dialog');
    if (window.innerWidth < 768) {
        modalDialog.classList.add('modal-sm');
    } else {
        modalDialog.classList.remove('modal-sm');
    }
}
adjustModalSize();
window.addEventListener('resize', adjustModalSize);