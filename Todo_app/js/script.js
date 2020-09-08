// JSから扱うDOM要素を扱うグローバル変数を定義
let inputForm, todoMain, tabButton, sortMenu

// DOMを変数に格納する
function registerDOM() {
    inputForm = document.querySelector("#input-form")
    todoMain = document.querySelector("#todo-main")
    tabButton = document.querySelector("#tab").querySelectorAll("button")
    sortMenu = document.querySelector("#sort-menu")
}

// 初期化
function initialize() {
    registerDOM()
}

document.addEventListener("DOMContentLoaded", initialize.bind(this))
