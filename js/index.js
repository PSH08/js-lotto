const btn_start = document.querySelectorAll('.btn_list li');
// const btn_list = document.querySelectorAll('.btn_list');
const btn_pick = document.querySelector('.lotto_pick');
const btn_save = document.querySelector(".btn_save")
const result = document.querySelector('.result');
const lotto_save = document.querySelector('.lotto_save');
const save = document.querySelector('.btn_save');
let globalLotto = []; 


btn_pick.addEventListener('click',function () {
    result.innerHTML="";
    const lotto = [];
    for(let i = 0; i < 6; i++) {
        const rand = Math.floor(Math.random()* 60) + 1;
        if(lotto.indexOf(rand) === -1){
            lotto.push(rand)
        }else {
            i--
        }
    }
    lotto.sort((a,b)=> a-b)
    globalLotto = lotto;
    // result.append(lotto)
    for(let i = 0; i < lotto.length; i++){
        const li = document.createElement("li")
        li.innerHTML=lotto[i];
        result.append(li)
    }
})


btn_save.addEventListener('click',function () {
    console.log('before')
    // lotto_save.innerHTML="";
    if(globalLotto.length === 0) return;
    console.log("after")
    globalLotto.sort((a,b)=> a-b)
    for(let i = 0; i < globalLotto.length; i++){
        const li = document.createElement("li")
        li.innerHTML=globalLotto[i];
        lotto_save.append(li)
    }
})





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