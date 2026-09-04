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
    leftButton.style.display="none";
    rightButton.style.display="none";
    timerText.style.display="none";
    //リザルト表示
    const bpm=3*score;
    scoreText.classList.add("result"); //クラスresultを付加して表示位置変更
    scoreText.textContent
    =`あなたのトリルは……BPM ${bpm} の16分相当！`;
    retry.style.display="block";
}

//入力受付

//PC入力
document.addEventListener("keydown", (event) => {
    if (event.repeat) return; //押しっぱなしを無視
    if (event.code === "KeyF" || event.code === "KeyJ") {
        press();
    }
});

//スマホ入力
leftButton.addEventListener("pointerdown", () => {
    press();
});
rightButton.addEventListener("pointerdown", () => {
    press();
});

//リトライ
retry.addEventListener("click", () => {
    location.reload();
});