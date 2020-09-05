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

// プロパティの属性を設定する

// Object.defineProperty()
// オブジェクトに新しいプロパティを一つ直接定義したり、オブジェクトの既存のプロパティを変更したりして、そのオブジェクトを返す
// 構文：Object.defineProperty(オブジェクト, プロパティ, ディスクリプター)

// Object.defineProperties()
// オブジェクトに直接新しいプロパティを複数定義し、あるいは既存のプロパティを変更して、そのオブジェクトを返す
// 構文：Object.defineProperties(オブジェクト, プロパティ)

// ディスクリプター
// プロパティの内容や機能、設定を行うパラメータ。以下のキー・要素を持つハッシュオブジェクトで指定する
// value
// プロパティの値を指定する。文字列、整数などの値のほか、配列、ハッシュ、関数などのオブジェクトも渡すことができる
// writable
// true を指定するとプロパティ値の変更が可能になる。デフォルトは false なので変更不可
// set
// セッター関数を定義する。ここで指定された関数は、プロパティに値を代入する際に呼び出されて処理される
// get
// ゲッター関数を定義する。ここで指定された関数は、プロパティ値を参照、取得しようとした際に呼び出されて処理される
// enumerable
// プロパティの列挙可能性を切り替える
// console.log()などでオブジェクト内容の一覧を取得した際、このプロパティが表示されるかどうかを決める。デフォルトは false で表示されない
// configurable
// プロパティの変更の可否を設定できる１

let myThings1 = {}

Object.defineProperties(myThings1, {
    sports:{
        enumerable: true, //列挙可能とする
        writable: true, //プロパティの値の変更を可能とする
        value: "サッカー"
    },
    food: {
        enumerable: false,
        writable: false,
        value: "カレーライス"
    }
})

// enumerable属性
console.log(Object.keys(myThings1))
// ["sports"]のみ表示。["food"]はenumerable: falseのため表示されない

// writable属性
myThings1.sports = "ラグビー"
console.log(myThings1.sports)
// ラグビーと出力(writable: trueのため変更可能)

myThings1.food = "寿司"
console.log(myThings1.food)
// カレーライスと出力(writable: falseのため変更不可)

// 参考URL(MDN): https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// 参考URL: https://qiita.com/Koizumi-Greenwich/items/1b827b4304538f2f8e37

// 配列とオブジェクトを組み合わせパターン

// let students = [
//     {
//         name: "Himura",
//         language: 84,
//         maths: 62,
//         science: 50
//     },
//     {
//         name: "Sagara",
//         language: 54,
//         maths: 70,
//         science: 62
//     },
//     {
//         name: "Saito",
//         language: 84,
//         maths: 62,
//         science: 50
//     }
// ]

// for文を使って出力
// 構文: for ([初期化式]; [条件式]; [加算式])

// for (let i = 0; i < students.length; i++){
//     let student = students[i]

//     console.log(
//         "生徒の名前は"+
//         student.name +
//         "さんです"
//     )
// }

// 言語化
// for (let i = 0; i < students.length; i++) {
        // iを初期値を0として、iがstudents(配列)の長さより小さくなるまで,iに繰り返し分１を足す
//     let student = students[i]
        // iで配列のインデックス番号検索
//     console.log(
//         "生徒の名前は" +
//         student.name +
//         "さんです"
//     )
// }

// 条件にマッチするオブジェクトのみを取得　filterメソッド

// let pass = students.filter(function (student){
//     return student.language >= 80
// })

// ラムダ式
// let pass = students.filter(student => student.language >= 80)

// console.log(pass)
// 0: { name: "Himura", language: 84, maths: 62, science: 50 }
// 1: { name: "Saito", language: 84, maths: 62, science: 50 }
// length: 2
// __proto__: Array(0)

// 配列のオブジェクトから別のオブジェクトを作成する mapメソッド

// let smoothies = ["グリーン", "オレンジ", "ベリー"].map(function(name){
//     return{
//         name: name + "スムージー",
//         price: 360
//     }
// })

// ラムダ式
let smoothies = ["グリーン", "オレンジ", "ベリー"].map(name => {
    return{
        name: name + "スムージー",
        price: 360
    }
})

console.log(smoothies)
// 0: { name: "グリーンスムージー", price: 360 }
// 1: { name: "オレンジスムージー", price: 360 }
// 2: { name: "ベリースムージー", price: 360 }
// length: 3
// __proto__: Array(0)

// map,filter,forEachの３つの配列メソッドの組み合わせ
let students = [
    {
        name: "Himura",
        language: 84,
        maths: 62,
        science: 50
    },
    {
        name: "Sagara",
        language: 54,
        maths: 70,
        science: 62
    },
    {
        name: "Saito",
        language: 84,
        maths: 62,
        science: 50
    }
]

// mapメソッドを使ってtotalプロパティが含まれたオブジェクトの作成
// totalプロパティの数値を条件にしてfilterメソッドでフィルタリング
// forEachで結果を出力　
// students
//     .map(function (student) {
//         let total = student.language +
//                     student.maths +
//                     student.science
//         return{
//             name: student.name,
//             total: total
//         }
//     })
//     .filter(function (student) {
//         return student.total > 190
//     })
//     .forEach(function (student) {
//         console.log(
//             student.name +
//             "さんの合計点数は" +
//             student.total +
//             "です"
//         )
//     })

// リファクタング ラムダ式
students
    .map(student => {
        let total = student.language +
                    student.maths +
                    student.science
        return{
            name: student.name,
            total: total
        }
    })
    .filter(student =>
        student.total > 190
    )
    .forEach(student =>
        console.log(
            student.name +
            "さんの合計点数は" +
            student.total +
            "です"
        )
    )

// 配列にオブジェクトを追加する pushメソッド
// pushメソッドは引数にオブジェクトを記述する
// pushメソッドは、配列の末尾に 1 つ以上の要素を追加することができる。また戻り値として新しい配列の要素数を返す

let favorites = []

push = favorites.push({
    name: "programing",
    language: "JavaScript",
    level: "Beginner"
})
console.log(push)
// 1
console.log(favorites)
// 0: { name: "programing", language: "JavaScript", level: "Beginner" }
// length: 1
// __proto__: Array(0)

// 配列を追加　concatメソッド
students = students.concat([
    {
        name: "sinomori",
        language: 54,
        maths: 70,
        science: 50
    }
])
console.log(students)
// 0: { name: "Himura", language: 84, maths: 62, science: 50 }
// 1: { name: "Sagara", language: 54, maths: 70, science: 62 }
// 2: { name: "Saito", language: 84, maths: 62, science: 50 }
// 3: { name: "sinomori", language: 54, maths: 70, science: 50 }
// length: 4
// __proto__: Array(0)