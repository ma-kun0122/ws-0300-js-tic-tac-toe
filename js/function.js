//ここにJSを入れていく

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


//各マスのid取得
const table0 = document.getElementById(0)
const table1 = document.getElementById(1)
const table2 = document.getElementById(2)
const table3 = document.getElementById(3)
const table4 = document.getElementById(4)
const table5 = document.getElementById(5)
const table6 = document.getElementById(6)
const table7 = document.getElementById(7)
const table8 = document.getElementById(8)


//各マスのイベント指定
table0.addEventListener('click', function(){
    if(document.getElementById(0).innerHTML !==""){
        return;
    }//→要素が入ってる場合、更新させない機構
    if(countTurn() == 0){
        table0.innerHTML ="○";
    }else if(countTurn()%2 == 0){
        table0.innerHTML ="○";
    }else if(countTurn()%2 !== 0){
        table0.innerHTML ="×";
    }
}, false);

table1.addEventListener('click', function(){
    if(document.getElementById(1).innerHTML !==""){
        return;
    }//→要素が入ってる場合、更新させない機構
    if(countTurn() == 0){
        table1.innerHTML ="○";
    }else if(countTurn()%2 == 0){
        table1.innerHTML ="○";
    }else if(countTurn()%2 !== 0){
        table1.innerHTML ="×";
    }
}, false);

table2.addEventListener('click', function(){
    if(document.getElementById(2).innerHTML !==""){
        return;
    }//→要素が入ってる場合、更新させない機構
    if(countTurn() == 0){
        table2.innerHTML ="○";
    }else if(countTurn()%2 == 0){
        table2.innerHTML ="○";
    }else if(countTurn()%2 !== 0){
        table2.innerHTML ="×";
    }
}, false);

table3.addEventListener('click', function(){
    if(document.getElementById(3).innerHTML !==""){
        return;
    }//→要素が入ってる場合、更新させない機構
    if(countTurn() == 0){
        table3.innerHTML ="○";
    }else if(countTurn()%2 == 0){
        table3.innerHTML ="○";
    }else if(countTurn()%2 !== 0){
        table3.innerHTML ="×";
    }
}, false);

table4.addEventListener('click', function(){
    if(document.getElementById(4).innerHTML !==""){
        return;
    }//→要素が入ってる場合、更新させない機構
    if(countTurn() == 0){
        table4.innerHTML ="○";
    }else if(countTurn()%2 == 0){
        table4.innerHTML ="○";
    }else if(countTurn()%2 !== 0){
        table4.innerHTML ="×";
    }
}, false);

table5.addEventListener('click', function(){
    if(document.getElementById(5).innerHTML !==""){
        return;
    }//→要素が入ってる場合、更新させない機構
    if(countTurn() == 0){
        table5.innerHTML ="○";
    }else if(countTurn()%2 == 0){
        table5.innerHTML ="○";
    }else if(countTurn()%2 !== 0){
        table5.innerHTML ="×";
    }
}, false);

table6.addEventListener('click', function(){
    if(document.getElementById(6).innerHTML !==""){
        return;
    }//→要素が入ってる場合、更新させない機構
    if(countTurn() == 0){
        table6.innerHTML ="○";
    }else if(countTurn()%2 == 0){
        table6.innerHTML ="○";
    }else if(countTurn()%2 !== 0){
        table6.innerHTML ="×";
    }
}, false);

table7.addEventListener('click', function(){
    if(document.getElementById(7).innerHTML !==""){
        return;
    }//→要素が入ってる場合、更新させない機構
    if(countTurn() == 0){
        table7.innerHTML ="○";
    }else if(countTurn()%2 == 0){
        table7.innerHTML ="○";
    }else if(countTurn()%2 !== 0){
        table7.innerHTML ="×";
    }
}, false);

table8.addEventListener('click', function(){
    if(document.getElementById(8).innerHTML !==""){
        return;
    }//→要素が入ってる場合、更新させない機構
    if(countTurn() == 0){
        table8.innerHTML ="○";
    }else if(countTurn()%2 == 0){
        table8.innerHTML ="○";
    }else if(countTurn()%2 !== 0){
        table8.innerHTML ="×";
    }
}, false);
//・・・各マス指定ここまで


//ターン交代の下線入れ替え関数
function changeUnderLine(){
    if(countTurn() % 2== 0){
        const circleLine = document.querySelector('.circle')
        circleLine.classList.remove('.cross');
        circleLine.classList.add('.circle');
    }else if(countTurn() % 2 !== 0){
        const crossLine = document.querySelector('.cross')
            crossLine.classList.remove('.circle');
            crossLine.classList.add('.cross');
};
}
changeUnderLine();
//・・・ここまで



//勝敗判定
//(js-state-messageが、「○win!」,「×win!」,「draw」の 種類に変化
// →決着後は、追加で押せないようにする)
//決着時挙動(js-state-messageが、「○win!」,「×win!」,「draw」の 種類に変化)

  //○が勝利パターン


  //×が勝利パターン


  //drawパターン



//RESTARTボタンで、スタート画面に戻る
function reset() {
    document.querySelector('.js-restart').addEventListener('click',function(){
        location.reload();
    });
}
reset();