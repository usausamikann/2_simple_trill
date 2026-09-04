//html要素取得
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("timer");
const retry = document.getElementById("retry");

//状態
let score = 0;
let timeLeft = 5;
let started = false;
let finished=false;

//各種関数
function press(){ //入力処理
    if(finished) return;
    if(!started){
        startGame();
    }
    score++;
    scoreText.textContent = `Score: ${score}`; //クリックごとにスコア更新
}

function startGame(){ //ゲーム開始
    started=true;
    const timerId= setInterval(()=>{
        timeLeft--;
        timerText.textContent = `Time : ${timeLeft}`;
        if(timeLeft<=0){
            clearInterval(timerId);
            endGame();
        }
    },1000);
}

function endGame(){ //ゲーム終了
    finished=true;
    //オブジェクト非表示
    leftButton.display="none";
    rightButton.display="none";
    timerText.display="none";
    //リザルト表示
    let bpm=3*score;
    scoreText.textContent
    =`あなたのトリルは……BPM ${bpm} の16分相当！`;
    retry.style.display="block";
}