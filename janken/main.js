'use strict';
// 各手の数値を配列のインデックスで取得する
const jyankenHand = ["グー", "チョキ", "パー"];
// ユーザーの出目(value属性で取得)
let playerHand = 0;
console.log(playerHand)

function setButtonAction () {
    // 各ボタンを変数に格納
    const rock = document.getElementById('rock');
    const scissors = document.getElementById("scissors");
    const paper = document.getElementById("paper");
    const restart = document.getElementById("restart");

    // クリックされたらユーザーの手をHTMLのvalue属性からとcpの手をランダム(0~2)で取得
    function onClick (event) {
        const myHand = Number(event.target.value);
        const cpHand = Math.round(Math.random() * 2);
        gameJuge(myHand, cpHand, jyankenHand)
    }

    // イベント発火
    rock.addEventListener('click', onClick);
    scissors.addEventListener('click', onClick);
    paper.addEventListener('click', onClick);

    // もういちどっボタンが押されたらブラウザを更新してリセット
    restart.addEventListener('click', function () {
        window.location.reload();
    });
}

function gameJuge(player, cp, hand) {
    let result = document.getElementById('result')

    if(player == cp){
        result.innerHTML ='<p>あいこだっ!<br>リセットしてね</p>'
    } else if ((player == 0 && cp == 1) || (player == 1 && cp == 2) || (player == 3 && cp == 0)){
        result.innerHTML = '<p>あなたの勝ちだっ！!<br>あなたの手は${hand[player]}<br>相手の手は${hand[cps]}</p>'
    }
}

setButtonAction()

// ボタンロック追加
// HTMLへ渡す際の変数展開を考える