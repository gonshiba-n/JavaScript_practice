// オブジェクトとは(連想配列)

// 関連のあるデータの集合
// １つのオブジェクトは複数のプロパティを持つことができる
// プロパティ名(key)と値(value)のペアとして関連付けられていてプロパティ名を使って値にアクセスできる
// プロパティの値は関数も指定可能(メソッド)
// プロパティの値には別のオブジェクトを入れることができ、thisで自身を参照することもできる

// 例１
let myThings = {
    sports: "テニス",
    hobby: "ギター",
    eat: "焼肉"
}
// { sports: "テニス", hobby: "ギター", eat: "焼肉" }

// 値の取得

// ドット記法...簡潔に記述ができる
console.log(myThings.hobby)

// ブラケット記法...変数の値や計算結果などを渡せる
console.log(myThings["hobby"])

//例２
let foods = {
    japanese_food: "寿司"
}
let suffix = "_food"
console.log(foods["japanese" + suffix]) //足してjapanese_foodとしている
// 寿司

// ブラウザにプロパティの値を表示する(例１のmyThingsを用いる)
let div = document.querySelector("#root")

div.innerHTML =
    "好きなスポーツ:" + myThings.sports + "<br>" +
    "趣味:" + myThings.hobby + "<br>" +
    "好きな食べ物:" + myThings.eat

// innerHTMLを使用する際の注意点(要素を破壊してしまう)
// https://qiita.com/amamamaou/items/624c22adec32515e863b

// オブジェクトの値を変更する
myThings.sports = "サッカー"
// ドット記法
console.log(myThings.sports)
// ブラケット記法
myThings["hobby"] = "プログラミング"
console.log(myThings["hobby"])

// オブジェクトにプロパティを追加
myThings.coffee = "ブラック"
console.log(myThings)
// { sports: "サッカー", hobby: "プログラミング", eat: "焼肉", coffee: "ブラック" }

// オブジェクトのプロパティ名を抽出する

// Object.keyメソッドを使用する
// 引数として渡したオブジェクトのプロパティ名を配列として取得

// ・戻り値であるプロパティ名の順番は保証されない
//      →オブジェクトは配列と違って順番の概念がない。したがって順番が必要な場合は配列かMapオブジェクトを使用する
// ・取得できるプロパティは列挙可能となっている物が対象
        // →列挙可能なプロパティはオブジェクトをオブジェクトリテラル表記で初期化した場合や、プロパティの代入、追加の操作を行った場合に作られる物が対象

console.log(Object.keys(myThings))
// (4)["sports", "hobby", "eat", "coffee"]
//     0: "sports"
//     1: "hobby"
//     2: "eat"
//     3: "coffee"
// length: 4

// Object.keysで取得した配列をforEachメソッドで配列の中のプロパティ取得する


Object.keys(myThings).forEach( key =>
    console.log(key, "プロパティ名は", myThings[key], "です")
);

// sports プロパティ名は サッカー です
// hobby プロパティ名は プログラミング です
// eat プロパティ名は 焼肉 です
// coffee プロパティ名は ブラック です

// 少し寄り道
// 上記はラムダ式(アロー関数)を使用している→無名関数を簡潔に書く方法がラムダ式と呼ばれる書き方である

// // 無名関数ver
// function (num) {
//     return num * 2
// }

// // ラムダ式ver
// (num) => {
//     return num * 2
// }

// 無名関数
// Object.keys(myThings).forEach(function (key) {
//     console.log(key, "プロパティ名は", myThings[key], "です")
// });

// ラムダ式
// Object.keys(myThings).forEach((key) => {
//     console.log(key, "プロパティ名は", myThings[key], "です")
// });

// ↓引数名の(),{}を省略。returnのみならreturnも省略可能

// Object.keys(myThings).forEach(key => console.log(key, "プロパティ名は", myThings[key], "です"));



// ラムダ式参考URL: https://midolog.net/javascript-lambda-expression-tutorial

