let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let restChances = document.getElementById("rest-chances");
let chances = 5;
let gameOver = false;
let history=[];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){
    userInput.value = ""});

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100 ) + 1;
    console.log("정답", computerNum)
}

function play(){
    let userValue = userInput.value;
    
    if(userValue < 1 || userValue > 100 || userValue ===""){
        resultArea.textContent = "1 ~ 100 사이 숫자만 입력해주세요";
        return 0;
    }
    if(history.includes(userValue)){
        resultArea.textContent = "중복된 숫자입니다, try new input";
        return 0;
    }

    chances--;
    restChances.textContent = `남은기회 ${chances} 번`;
    if(userValue < computerNum){
        resultArea.textContent = "Up";
    }else if(userValue > computerNum){
        resultArea.textContent = "Down";
    }else{
        resultArea.textContent = "정답";
        gameOver = true;
    }

    history.push(userValue);
    
    if(chances < 1)
    {
        gameOver = true;
    }

    if(gameOver == true)
    {
        playButton.disabled = true;
        resultArea.textContent = "정답: " + computerNum;
    }
}

function reset(){
    userInput.value = "";
    pickRandomNum();
    gameOver = false;
    chances = 5;
    restChances.textContent = `남은기회: ${chances}`;
    history = [];
    playButton.disabled = false;
    resultArea.textContent = "다시 시작";    
}

pickRandomNum();