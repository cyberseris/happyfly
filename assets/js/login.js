let pwd = document.querySelector('.pwd');
let account = document.querySelector('.account');
let pwdAgain = document.querySelector('.pwd-again');


if (pwd !== null) {
    let pwdInput = pwd.parentNode.querySelectorAll('input')[0];
    pwd.addEventListener('click', function (e) {
        let icon = pwd.children[0];

        if (icon.innerText === 'visibility_off') {
            icon.innerText = 'visibility';
            pwdInput.type = 'text';
        } else {
            icon.innerText = 'visibility_off';
            pwdInput.type = 'password';
        }
    });
};
if (account !== null) {
    let accountInput = account.parentNode.querySelectorAll('input')[0];
    account.addEventListener('click', function (e) {
        let icon = account.children[0];

        if (icon.innerText === 'visibility_off') {
            icon.innerText = 'visibility';
            accountInput.type = 'text';
        } else {
            icon.innerText = 'visibility_off';
            accountInput.type = 'password';
        }
    });
}

if(pwdAgain!==null){
    let pwdInput = pwdAgain.parentNode.querySelectorAll('input')[0];
    pwdAgain.addEventListener('click', function (e) {
        let icon = pwdAgain.children[0];

        if (icon.innerText === 'visibility_off') {
            icon.innerText = 'visibility';
            pwdInput.type = 'text';
        } else {
            icon.innerText = 'visibility_off';
            pwdInput.type = 'password';
        }
    });
}



