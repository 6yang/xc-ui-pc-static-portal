
//导入
var {add} = require("./model01");

var Vue = require("../js/vue/vue.min");

var VM = new Vue({
    el:"#app",//将上边视图部分app区域进行管理,将model数据和view进行绑定
    data:{//相当于MVVM中的model
        name:"黑马程序员",
        num1:0,
        num2:0,
        result:0,
        url:"http://www.itcast.cn"
    },
    methods:{
        change:function () {
            this.result =  add(Number.parseInt(this.num1),Number.parseInt(this.num2));
        }
    }

});