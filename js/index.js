const btn_start = document.querySelectorAll('.btn_list li');
const btn_list = document.querySelectorAll('.btn_list');
const result = document.querySelector('.result');
const lotto_save = document.querySelector('.lotto_save')
const save = document.querySelector('.btn_save');
for(let i = 0; i < btn_list.length; i++) {
    btn_list[i].addEventListener('click',(e) => {
        e.preventDefault();
        for(let j = 0; j < btn_list.length; j++) {
            btn_list[j].classList.add('active')
        }
        btn_list[i].classList.remove('active')
    });
}

for(let i = 0; i < btn_start.length; i++) {
    btn_start[i].addEventListener('click',function () {
        let lotto = [];
        for(let i = 0; i < 6; i++) {
            let rand = Math.floor(Math.random()* 60) + 1;
            if(lotto.indexOf(rand) === -1){
                lotto.push(rand)
            }else {
                i--
            }
            console.log(rand)
        }
    })
    //클릭시 result에 나타남
    result.append(lotto)
}

save.addEventListener('click',function () {
    //로또세이브에 나타남
    // result.value='';
});





// let lotto = [];
// for(let i = 0; i < 6; i++) {
//     let rand = Math.floor(Math.random()* 60) + 1;
//     if(lotto.indexOf(rand) === -1){
//         lotto.push(rand)
//     }else {
//         i--
//     }
//     console.log(rand)
// }