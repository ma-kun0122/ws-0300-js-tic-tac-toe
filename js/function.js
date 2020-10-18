
//○×交代の関数→各マスが何個埋まっているかで○×を決定
function countTurn(){
    let number =0;
    for(let i = 0; i<=8; i++){
        if(document.getElementById(i).innerHTML !=""){
            number = number +1;
        }
        };
    return number;
}


//決着時に文言を変更する関数
function winnerJudge(){
    let a0 =document.getElementById("0").innerHTML;
    let a1 =document.getElementById("1").innerHTML;
    let a2 =document.getElementById("2").innerHTML;
    let a3 =document.getElementById("3").innerHTML;
    let a4 =document.getElementById("4").innerHTML;
    let a5 =document.getElementById("5").innerHTML;
    let a6 =document.getElementById("6").innerHTML;
    let a7 =document.getElementById("7").innerHTML;
    let a8 =document.getElementById("8").innerHTML;
    let winner = null;
    const stateMessage = document.querySelector('.js-state-message')

    if(a0 === a1 && a1 === a2 && a0 === a2 && a0 !=""){
        winner = a0
        debugger
        stateMessage.innerHTML=winner+" win!"
        return;
    }else if(a3 === a4 && a4 === a5 && a3 === a5 && a3 !=""){
        winner = a3;
        stateMessage.innerHTML=winner+" win!"
        return;
    }else if(a6 === a7 && a7 === a8 && a6 === a8 && a6 !=""){
        winner = a6;
        stateMessage.innerHTML=winner+" win!"
        return;
    }else if(a0 === a3 && a3 === a6 && a0 === a6 && a0 !=""){
        winner = a0;
        stateMessage.innerHTML=winner+" win!"
        return;
    }else if(a1 === a4 && a4 === a7 && a1 === a7 && a1 !=""){
        winner = a1;
        stateMessage.innerHTML=winner+" win!"
        return;
    }else if(a2 === a5 && a5 === a8 && a2 === a8 && a2 !=""){
        winner = a2;
        stateMessage.innerHTML=winner+" win!"
        return;
    }else if(a0 === a4 && a4 === a8 && a0 === a8 && a0 !=""){
        winner = a0;
        stateMessage.innerHTML=winner+" win!"
        return;
    }else if(a2 === a4 && a4 === a6 && a2 === a6 && a2 !=""){
        winner = a2;
        stateMessage.innerHTML=winner+" win!"
        return;
    }else if(countTurn() === 9){
        stateMessage.innerHTML="draw"
        return;
    }
}



//各マスクリック時の挙動
const cells = document.querySelectorAll('.js-cell')
cells.forEach(item => {
  item.addEventListener('click', () => {
    if(item.innerHTML ==""){
        changeUnderLine()
    }
    //マスに既に入っている時
    if(item.innerHTML !==""){
        return;
    }
    //決着後に○×記入できない処理
    if(document.querySelector('.js-state-message').innerText !="starting..."){
        return;
    }
    //○記入
    if(countTurn() % 2 === 0){
        debugger
        item.innerHTML="○";
    //×記入
    }else if(countTurn()%2 !== 0){
        item.innerHTML="×";
    }
    //勝敗判定
    winnerJudge()
  })
})



//ターン交代の下線入れ替え関数
function changeUnderLine(){
    const circleLine = document.querySelector('.circle')
    const crossLine = document.querySelector('.cross')
    if(countTurn() % 2 == 0 ){
        debugger
        circleLine.classList.remove('active');
        crossLine.classList.add('active');
    }else if(countTurn() % 2 !== 0){
        crossLine.classList.remove('active');
        circleLine.classList.add('active');
    }
  }


//リセットする関数
function reset() {
    document.querySelector('.js-restart').addEventListener('click',function(){
        location.reload();
    });
}
reset();