const btn_start = document.querySelector('.btn .btn1');
const result = document.querySelector('.result');
btn_start.addEventListener('click',function () {
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
    result.innerHTML(rand)
});