let list = document.querySelector('.js-list');
let input = document.querySelectorAll('input');
let content = document.querySelectorAll('.js-content');


list.addEventListener('click', (e) => {
    for (let i = 0; i <= input.length; i++) {
        let id = e.target.id;

        for (let i = 0; i <= content.length; i++) {
            let content_id = content[i].getAttribute('data-target');
            let none = content[i].classList;

            if ((id == content_id)) {
                none.toggle('d-block');

                let single_content = document.querySelector(`.js-content[data-target="${content_id}"]`);
                console.log(single_content);
                single_content.addEventListener('click', (e) => {
                    let val = e.target.getAttribute('data-val');
                    console.log(val);
                    if ((id == content_id)) {
                        let click_id = document.querySelector(`input[id="${id}"]`);
                        console.log(click_id.value);
                        click_id.value = val;
                    }
                })
            }
        }
    }
});




