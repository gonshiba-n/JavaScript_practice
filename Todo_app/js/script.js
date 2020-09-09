// オブジェクトを格納する配列
const todoList = []
// JSから扱うDOM要素を扱うグローバル変数を定義
let inputForm, todoMain, tabButton, sortMenu

// DOMを変数に格納する
function registerDOM() {
    // 入力フォーム
    inputForm = document.querySelector("#input-form")
    // tbody(表示)
    todoMain = document.querySelector("#todo-main")
    // タブ(インボックス、完了したタスク)の各ボタン
    tabButton = document.querySelector("#tab").querySelectorAll("button")
    // ソートメニュー
    sortMenu = document.querySelector("#sort-menu")
}

// 初期化関数
function initialize() {
    registerDOM()
    bindEvents()
    updateTodoList()
}

// ブラウザのページ解析が終了次第、registerDOM()関数の中の変数に各HTML要素を変数に格納する
document.addEventListener("DOMContentLoaded", initialize.bind(this))

function bindEvents() {
    // 引数はイベントオブジェクト
    inputForm.addEventListener("submit", (event) => handleSubmit(event)) //アロー関数使用(ラムダ式)
}

// Todoを登録する処理
function handleSubmit(event) {
    // データ送信を伴わない為、ブラウザの挙動を停止している(リロード対策)
    event.preventDefault()
    // オブジェクトを新規作成し、入力された文字列を代入する
    const todoObj = {
        text: inputForm["input-text"].value
    }
    addTodo(todoObj)
}

// todoを保存する
function addTodo(todoObj) {
    // 一意のID(配列の長さ+1とする)
    todoObj.id = "todo-" + (todoList.length + 1)
    // 作成日(Dataオブジェクトのメソッドで日時の文字列を返す)
    todoObj.createdAt = new Date().toLocaleDateString()
    // 優先度
    todoObj.priority = 3
    // 完了フラグ
    todoObj.isDone = false
    // 編集中フラグ
    todoObj.isEdit = false
    // todoList(配列)の先頭に挿入する
    todoList.unshift(todoObj)
    // HTMLを生成する
    updateTodoList()
    // フォームを初期化する
    clearInputForm()
}

// Todo1小単位のHTML文字列を生成する
function createTodoHtmlString(todo) {
    // HTML文字列を格納する変数
    let htmlString = ""
    // HTMLのdata属性に設定する編集中を判定する内容
    const editType = todo.isEdit ? "editFixed" : "edit"
    // ボタンのラベルで編集中どうかで分岐する
    const editButtonLabel = todo.isEdit ? "編集完了" : "編集"
    // HTMLのdata属性に設定する、完了したかどうかを判定する内容
    const doneType = todo.isDone ? "inbox" : "done"
    // ボタンのラベルを未完了か、完了かで分岐する
    const doneButtonLabel = todo.isDone ? "未完了" : "完了"
    // todoテキストが入るテーブルセル HTML文字列を格納する変数
    let todoTextCell = ""
    // 優先度テキストが入るテーブルセル HTML文字列を格納する変数
    let priorityCell = ""

    // 編集中かそうでないかで分岐
    if (todo.isEdit) {
        // 編集中であればテキストフィールドを描画する
        todoTextCell =
            '<td class="cell-text"><input class="input-edit" type="text" value=' +
            todo.text +
            " /></td>"
        priorityCell =
            '<td class="cell-priority"><input class="input-priority" type="number" value=' +
            todo.priority +
            " /></td>"
    } else {
        // 編集していない場合はテキストとして表示
        todoTextCell = '<td class="cell-text">' + todo.text + "</td>"
        priorityCell = '<td class="cell-priority">' + todo.priority + "</td>"
    }
    // Todoオブジェクトは１つにつき１行のため行を生成するtrタグをまず作る
    htmlString += '<tr id="' + todo.id + '">'
    // 編集中を判定するために文字列をdata属性に埋め込んでボタンを作成。通常は編集ボタン、編集時には編集完了ボタンと変化する
    htmlString +=
        '<td class="cell-edit-button"><button data-type="' +
        editType +
        '">' +
        editButtonLabel +
        "</button></td>"
    htmlString += todoTextCell
    htmlString += '<td class="cell-created-at">' + todo.createdAt + "</td>"
    htmlString += priorityCell
    // 完了ボタンのセルを作成
    htmlString += '<td class="cell-done">'
    // Todoオブジェクトの完了状態をdata属性に埋めこむ
    htmlString += '<button data-type="' + doneType + '">'
    // 完了の有無をラベルに表示
    htmlString += doneButtonLabel
    htmlString += "</button></td>"
    htmlString += "</tr>"
    // 作成したHTMLを返す
    return htmlString
}

/** TodoListの描画を更新する */
function updateTodoList() {
    let htmlStrings = ""
    // HTMLを書き換える
    todoList.forEach(todo => {
        // 新しいHTMLを出力
        htmlStrings += createTodoHtmlString(todo)
        todoMain.innerHTML = htmlStrings
    })
    todoMain.innerHTML = htmlStrings
    todoList.forEach(todo => {
        const todoEl = document.getElementById(todo.id)
        if (todoEl){
            // 存在したらtr内のボタンタグを抽出する
            todoEl.querySelectorAll("button").forEach(btn => {
                const type = btn.dataset.type
                btn.addEventListener("click", event => {
                    // data属性がinbox若しくはdoneだったら完了/未完了ボタンなのでトグル関数を実行する
                    if (type.indexOf("inbox") >= 0 || type.indexOf("done") >= 0){
                        updateTodoState(todo, type)
                    }
                })
            })
        }
    })
}