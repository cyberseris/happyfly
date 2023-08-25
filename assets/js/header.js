const dropdown = document.querySelectorAll('.dropdown');


for(let d=0;d< dropdown.length;d++){

    const a=dropdown[d].children[0];
    const ul = dropdown[d].children[1];
    console.log('a',a);
    console.log('ul',ul);

    a.addEventListener('click', () => {
    
        if (ul.classList.contains('show')) {
            ul.classList.remove('show');
        } else {
            ul.classList.add('show');
        }
    
    });

    document.addEventListener('click',(e)=>{

        if(!(ul.contains(e.target)||a.contains(e.target))){
            ul.classList.remove('show');
        }
    
    });
}
// 處理點擊非選單及人頭像，使得ul消失
