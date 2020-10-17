const a0 =document.getElementById("0").innerText;
const a1 =document.getElementById("1").innerText;
const a2 =document.getElementById("2").innerText;
const a3 =document.getElementById("3").innerText;
const a4 =document.getElementById("4").innerText;
const a5 =document.getElementById("5").innerText;
const a6 =document.getElementById("6").innerText;
const a7 =document.getElementById("7").innerText;
const a8 =document.getElementById("8").innerText;

const stateMessage = document.querySelector('.js-state-message')
let winner = null;



//○×交代の関数→各マスが何個埋まっているかで○×を決めようとしている
function countTurn(){
    let number =0;
    for(let i = 0; i<=8; i++){
        if(document.getElementById(i).innerHTML !=""){
            number = number +1;
        }
        };
    return number;
}



//文言を変更する関数

function winnerJudge(){
    if(a0 === a1 && a1 === a2　&& a0 === a2 && a0 !="" && a1 !="" && a2 !=""){
        winner = a0;
        stateMessage.innerText=winner+" win!"
    }
    if(a3 === a4 && a4 === a5 && a3 ===a5 && a3 !="" && a4 !="" && a5 !=""){
        winner = a3;
        stateMessage.innerText=winner+" win!"
    }
    if(a6 === a7 && a7 === a8 && a6 === a8 && a6 !="" && a7 !="" && a8 !=""){
        winner = a6;
        stateMessage.innerText=winner+" win!"
    }
    if(a0 === a3 && a3 === a6 && a0 ===a6 && a0 !="" && a3 !="" && a6 !=""){
        winner = a0;
        stateMessage.innerText=winner+" win!"
    }
    if(a1 === a4 && a4 === a7 && a1 ===a7 && a1 !="" && a4 !="" && a7 !=""){
        winner = a1;
        stateMessage.innerText=winner+" win!"
    }
    if(a2 === a5 && a5 === a8 && a2 === a8 && a2 !="" && a5 !="" && a8 !=""){
        winner = a2;
        stateMessage.innerText=winner+" win!"
    }
    if(a0 === a4 && a4 === a8 && a0 === a8 && a0 !="" && a4 !="" && a8 !=""){
        winner = a0;
        stateMessage.innerText=winner+" win!"
    }
    if(a2 === a4 && a4 === a6 && a2 ===a6 && a2 !="" && a4 !="" && a6 !=""){
        winner = a2;
        stateMessage.innerText=winner+" win!"
    }else if(countTurn() === 9){
        stateMessage.innerText="draw"
    }
}



//各マスクリック時の挙動
const cells = document.querySelectorAll('.js-cell')
cells.forEach(item => {
  item.addEventListener('click', () => {
    changeUnderLine()
    winnerJudge()
    if(item.innerHTML !==""){
        return;
    }
    if(countTurn() % 2 === 0){
        item.innerHTML="○";
    }else if(countTurn()%2 !== 0){
        item.innerHTML="×";
    }
  })
})



//ターン交代の下線入れ替え関数
function changeUnderLine(){
    const circleLine = document.querySelector('.circle')
    const crossLine = document.querySelector('.cross')

    if(countTurn() % 2== 0){
        circleLine.classList.remove('active');
        crossLine.classList.add('active');
    }else if(countTurn() % 2 !== 0){
        crossLine.classList.remove('active');
        circleLine.classList.add('active');
    };
  }


//リセットする関数
function reset() {
    document.querySelector('.js-restart').addEventListener('click',function(){
        location.reload();
    });
}
reset();