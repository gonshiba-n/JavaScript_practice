// vue関数を用いたvueインスタンス作成
new Vue({
    //オプション
    el: "#app",
    data: {
        message: "Hello, Vue.js",
        link: "https://jp.vuejs.org/v2/guide/",
        isFoo: true,
        isBar: false,
        bazClass: ["baz", "baz2"],
        instock: 5,
        items: ["みかん", "牛乳", "みりん"],
        count: 0,
        twoCountUp: 0
    },
    methods: {
        addTwoCountUp: function(){
            this.twoCountUp = this.twoCountUp + 2
        }
    }
})