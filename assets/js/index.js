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
            }
        }

        let content_val = document.querySelector('click',(e)=>{
            
        })
        
    }
});



