function createApp() {
    new Vue({
        // Vueインスタンスに紐付け
        el: "#wrapper",

        data: {
            // フィルターの初期値はinbox(未完了),完了はcompleted
            filter: "inbox",
            // Vueインスタンスのデータとしてtodoリストを配列で登録
            todos:[
                {
                    id: 1, //識別用の一意のID
                    text: "みかんを買う", //todo本文
                    createdAt: 1567940003455, //登録日時
                    done: false, //タスクが完了したかどうかのフラグ
                    isEditing: false //編集中フラグ
                },
                {
                    id: 2,
                    text: "郵便物を出す",
                    createdAt: 1567940003455,
                    done: false,
                    isEditing: false
                },
                {
                    id: 3,
                    text: "2km走る",
                    createdAt: 1567940003455,
                    done: true,
                    isEditing: false
                }
            ],
            text: ""
        },

        computed:{
            todosLength: function () {
                return this.todos.length
            },
            // フィルター "inbox"か"completed"でフィルター
            filterTodos: function () {
                const filter = this.filter
                return this.todos.filter(function (todo) {
                    return filter === "completed" ? todo.done : !todo.done
                })
            },

            // テキストフィールドが空であればボタンを押せなくする
            disabled: function() {
                return this.text === ""
            }
        },

        // 登録日のフォーマット
        methods: {
            formatDate: function (timestamp) {
                // 引数のtimestampからDataオブジェクトを生成
                const date = new Date(timestamp)

                // dateから年、月、日を取得
                const year = date.getFullYear()
                const month = date.getMonth() + 1
                const day = date.getDate()

                return year + "." + month + "." + day
            },

            // フィルター切り替えメソッド
            setFilter: function(filter){
                this.filter = filter
            },

            // todoの完了、未完了トグルメソッド
            toggleTodo: function(id) {
                this.todos = this.todos.map(function(todo){
                    if(todo.id === id){
                        todo.done = !todo.done
                    }
                    return todo
                })
            },

            handleSubmit: function(event){
                // submitされた時のデフォルトの挙動を停止(リロードを停止)
                // event.preventDefault() Vue.jsを用いて省略する
                // テキストフィールドの内容をもとに、todoに追加
                this.addTodo(this.text)
                // テキストフィールドを空にする
                this.text = ""
            },

            addTodo: function addTodo(text) {
                this.todos.push({
                    id: this.todosLength + 1,
                    text: text,
                    createdAt: Date.now(),
                    done: false,
                    isEditing: false
                })
            },

            editTodo: function(id){
                this.todos = this.todos.map(function(todo){
                    // 引数のidを持つtodoを編集中にする
                    if(todo.id === id){
                        todo.isEditing = true
                    }
                    return todo
                })
            },

            // 編集保存
            saveTodo: function (id) {
                this.todos = this.todos.map(function(todo){
                    if(todo.id === id){
                        todo.isEditing = false
                    }
                    return todo
                })
            }
        }
    })
};

// 初期化
function initialize() {
    createApp()
};
// 初期化の実行
document.addEventListener("DOMContentLoaded", initialize.bind(this));