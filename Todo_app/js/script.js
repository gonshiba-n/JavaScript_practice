// JSから扱うDOM要素を扱うグローバル変数を定義
let inputForm, todoMain, tabButton, sortMenu

// DOMを変数に格納する
function registerDOM() {
    inputForm = document.querySelector("#input-form")
    todoMain = document.querySelector("#todo-main")
    tabButton = document.querySelector("#tab").querySelectorAll("button")
    sortMenu = document.querySelector("#sort-menu")
}

// 初期化関数
function initialize() {
    registerDOM()
    bindEvents()
}

// ブラウザのページ解析が終了次第、registerDOM()関数の中の変数に各HTML要素を変数に格納する
document.addEventListener("DOMContentLoaded", initialize.bind(this))

function bindEvents() {
    inputForm.addEventListener("submit", (event) => handleSubmit(event)) //アロー関数使用(ラムダ式)
}

function handleSubmit(event) {
    event.preventDefault()
    const todoObj = {
        text: inputForm["input-text"].value
    }
    addTodo(todoObj)
}