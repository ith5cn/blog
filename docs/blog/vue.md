# 双向数据绑定
```
<div>
<p>sss</p>
</div>
```

# 组件化-模块化

## 组件创建、引入

## 单文件组件
webpack+vue-loader
Browserify+

# Vue实例对象
```

var my = new Vue({
    el: '#app',
    template:'<div>{{fruit}}</div>'
    compontnts: {App}
    data: {
        fruit: 'apple'
    }
})


my.fruit  // apple
```

# 生命周期
## beforeCreate
## create


# 实现一个根组件
main.js
```
import Vue from 'vue'    // 类似 require('vue')

// 全局注册
Vue.component('my-header',{
   template: '<p>this is my header</p>',
})

new Vue({
    el: '#app',
    template: "<p>hello word {{ word }}</p>",
    data: {
        // 加return 避免了引用赋值                                                          
        return {
            word: 'hello word'
        }
    },
    components: {
        // 局部注册
        'my-header':{
            template: '<p>this is my header</p>'
        }
    }
})

```
index.html
```
<!doctype html>
<html>
    <body>
        <div id="app">
        // 全局注册的组件
        <my-header></my-header>
        </div>
    </body>
</html>
```

# vue 的基本概念

## 全局API
