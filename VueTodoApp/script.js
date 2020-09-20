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
                    done: false //タスクが完了したかどうかのフラグ
                },
                {
                    id: 2,
                    text: "郵便物を出す",
                    createdAt: 1567940003455,
                    done: false
                },
                {
                    id: 3,
                    text: "2km走る",
                    createdAt: 1567940003455,
                    done: true
                }
            ]
        },
        computed:{
            // フィルター "inbox"か"completed"でフィルター
            filterTodos: function () {
                const filter = this.filter
                return this.todos.filter(function (todo) {
                    return filter === "completed" ? todo.done : !todo.done
                })
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