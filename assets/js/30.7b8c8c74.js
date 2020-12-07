(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{81:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"初级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初级"}},[s._v("#")]),s._v(" 初级")]),s._v(" "),e("h2",{attrs:{id:"入门教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#入门教程"}},[s._v("#")]),s._v(" 入门教程")]),s._v(" "),e("h3",{attrs:{id:"搭建本地开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建本地开发环境"}},[s._v("#")]),s._v(" 搭建本地开发环境")]),s._v(" "),e("p",[s._v("1 . 确保你安装了较新版本的 Node.js,可以检查是否安装了node.js,代码如下:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("node -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2 . Vue环境安装(前提是安装了npm,这个如果没安装,"),e("a",{attrs:{href:"https://www.cnblogs.com/jianguo221/p/11487532.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm安装"),e("OutboundLink")],1),s._v("),由于在国内使用npm是非常慢的，所以在这里我们推荐使用淘宝npm镜像，使用")]),s._v(" "),e("p",[s._v("淘宝的cnpm命令管理工具可以代替默认的npm管理工具：")]),s._v(" "),e("blockquote",[e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ npm install -g cnpm --registry=https://registry.npm.taobao.org\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("淘宝镜像安装成功之后，我们就可以全局使用vue-cli脚手架，输入命令：cnpm install --global vue-cli  回车；验证是否安装成功，在命令输入vue，出来vue的信息，及说明安装成功；"),e("br"),s._v(" "),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/1191178/201707/1191178-20170704152758800-1665979529.png",alt:"RUNOOB 图标"}})])]),s._v(" "),e("p",[s._v("搭建完手脚架之后，我们要开始建一个新项目，这个时候我建议，尽量不要装在C盘，因为vue下载下来的文件比较大，如果要改盘的话，直接输入D：回车就可以直接改盘，")]),s._v(" "),e("p",[s._v("然后我们开始创建新的项目输入命令：vue init webpack my-project  回车，my-project是我自己的文件夹的名字，是基于webpack的项目，输入之后就一直回车，直到出现是否要安装vue-router，")]),s._v(" "),e("p",[s._v("这个我们在项目要用到，所以就输入y 回车"),e("br"),s._v(" "),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/1191178/201707/1191178-20170704153050409-72562233.png",alt:"RUNOOB 图标"}}),e("br"),s._v("\n4. 下面会出现是否需要js语法检测，这个我们暂时用不到，就可以直接输入no，后面的都可以直接输入no，都是我们暂时用不到的"),e("br"),s._v(" "),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/1191178/201707/1191178-20170704153558159-1180218633.png",alt:"RUNOOB 图标"}}),e("br"),s._v("\n5. 文件夹已经下载好了，现在就可以进入文件夹，输入： cd my-project 回车，因为各个模板之间都是相互依赖的，所以现在我们要安装依赖,输入命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install     \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("出现:\n"),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/1191178/201707/1191178-20170704154051925-788102572.png",alt:"RUNOOB 图标"}}),e("br"),s._v("\n6. 已经安装好之后，现在要来测试一下我们下载好的模板能不能正常的运行，在命令行输入：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm run dev     \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("回车即可"),e("br"),s._v("\n7. 8080是默认的端口，要访问的话，直接在浏览器输入localhost:8080就可以打开默认的模板了(不会自动打开浏览器,在webpackjson配置文件的serve后加 --open 即可)"),e("br"),s._v(" "),e("img",{attrs:{src:"https://images2015.cnblogs.com/blog/1191178/201707/1191178-20170704155058378-1865109875.png",alt:"RUNOOB 图标"}})]),s._v(" "),e("blockquote",[e("h4",{attrs:{id:"注意："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意："}},[s._v("#")]),s._v(" 注意：")]),s._v(" "),e("p",[s._v("不要删除整个 src 文件夹，删除里面的源文件。我们会在接下来的步骤中使用示例代码"),e("br"),s._v("\n替换默认源文件。")])]),s._v(" "),e("h2",{attrs:{id:"vue的v指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue的v指令"}},[s._v("#")]),s._v(" Vue的v指令")]),s._v(" "),e("h3",{attrs:{id:"vue的v指令使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue的v指令使用"}},[s._v("#")]),s._v(" Vue的v指令使用")]),s._v(" "),e("h3",{attrs:{id:"_1-v-bind-绑定元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-v-bind-绑定元素"}},[s._v("#")]),s._v(" 1. v-bind (绑定元素)")]),s._v(" "),e("h4",{attrs:{id:"部分view代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部分view代码"}},[s._v("#")]),s._v(" 部分view代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<p v-bind:title="message">测试哈哈</p>   \n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"部分js代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部分js代码"}},[s._v("#")]),s._v(" 部分js代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<script>\n   var vm=new Vue({ //创建了一个Vue实例对象--启动一个vue应用 \n       el:"#app", //reactDOM.render(组件,挂载点)\n       data:{//this.state={message:"hello world!"}\n          message:"hello World!",\n          seen:false,\n          stus:[\n              {id:"10001",name:"tom",age:19,sex:"男"},\n              {id:"10002",name:"jarry",age:21,sex:"男"},\n              {id:"10003",name:"susan",age:23,sex:"女"},\n              {id:"10004",name:"赵四",age:35,sex:"男"},\n              {id:"10005",name:"刘能",age:37,sex:"男"},\n          ]\n      }\n    }   \n    <\/script>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h3",{attrs:{id:"_2-v-for-遍历数组对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-v-for-遍历数组对象"}},[s._v("#")]),s._v(" 2. v-for(遍历数组对象)")]),s._v(" "),e("p",[s._v('用法: v-for="元素 in 数组"'),e("br"),s._v("\n例如遍历一个数组到li中:")]),s._v(" "),e("h4",{attrs:{id:"部分view代码-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部分view代码-2"}},[s._v("#")]),s._v(" 部分view代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<ul>\n            <li v-for="value in stus" v-bind:key="value.id">\n               编号: {{value.id}}\n               姓名:{{value.name}}\n               性别:{{value.sex}}\n               年龄:{{value.age}}\n            </li>\n/ul>    \n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h4",{attrs:{id:"部分js代码-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部分js代码-2"}},[s._v("#")]),s._v(" 部分js代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<script>\n   var vm=new Vue({ //创建了一个Vue实例对象--启动一个vue应用 \n       el:"#app", //reactDOM.render(组件,挂载点)\n       data:{//this.state={message:"hello world!"}\n          message:"hello World!",\n          seen:false,\n          stus:[\n              {id:"10001",name:"tom",age:19,sex:"男"},\n              {id:"10002",name:"jarry",age:21,sex:"男"},\n              {id:"10003",name:"susan",age:23,sex:"女"},\n              {id:"10004",name:"赵四",age:35,sex:"男"},\n              {id:"10005",name:"刘能",age:37,sex:"男"},\n          ]\n       },\n       methods:{\n           changeMessage(){\n               //实例对象代理了data上方法\n               console.log("当前实例对象 this",this)\n               this.message="你好吗"\n           }\n       }\n   })\n\n   console.log("vm",vm);\n <\/script>   \n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("h3",{attrs:{id:"_3-v-on-绑定vue事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-v-on-绑定vue事件"}},[s._v("#")]),s._v(" 3. v-on 绑定vue事件")]),s._v(" "),e("h4",{attrs:{id:"部分view代码-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部分view代码-3"}},[s._v("#")]),s._v(" 部分view代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('button v-on:click="changeMessage">点击改变message</button>   \n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"部分js代码-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部分js代码-3"}},[s._v("#")]),s._v(" 部分js代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(' <script>\n   var vm=new Vue({ //创建了一个Vue实例对象--启动一个vue应用 \n       el:"#app", //reactDOM.render(组件,挂载点)\n       data:{\n          message:"hello World!",\n       },\n     methods:{\n           changeMessage(){\n               this.message="你好吗"\n           }\n       }\n   })\n  <\/script>    \n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h3",{attrs:{id:"_4-v-if-从dom中移除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-v-if-从dom中移除"}},[s._v("#")]),s._v(" 4. v-if 从DOM中移除")]),s._v(" "),e("p",[s._v("v-if 为true DOM添加到现有DOM  ,"),e("br"),s._v("\n为false从现有DOM中移除")]),s._v(" "),e("h4",{attrs:{id:"部分view代码-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部分view代码-4"}},[s._v("#")]),s._v(" 部分view代码")]),s._v(" "),e("pre",[e("code",[s._v('   ````   \n   <p v-if="seen">天道酬勤</p>   \n   ````   \n')])]),s._v(" "),e("h4",{attrs:{id:"部分js代码-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部分js代码-4"}},[s._v("#")]),s._v(" 部分js代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<script>\n   var vm=new Vue({ //创建了一个Vue实例对象--启动一个vue应用 \n       el:"#app", //reactDOM.render(组件,挂载点)\n       data:{\n          seen:false\n          }\n     })\n<\/script>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"_5-v-model-将表单项的value值绑定到变量上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-v-model-将表单项的value值绑定到变量上"}},[s._v("#")]),s._v(" 5. v-model 将表单项的value值绑定到变量上")]),s._v(" "),e("h4",{attrs:{id:"部分js代码-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部分js代码-5"}},[s._v("#")]),s._v(" 部分js代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<p v-bind:title="message">测试</p>   \n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"部分js代码-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部分js代码-6"}},[s._v("#")]),s._v(" 部分js代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<sceipt>\nvar vm=new Vue({ //创建了一个Vue实例对象--启动一个vue应用 \n       el:"#app", //reactDOM.render(组件,挂载点)\n       data:{\n            this.state={message:"hello world!"\n            }\n          }\n          \n    })\n<\/script>   \n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h3",{attrs:{id:"mvvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[s._v("#")]),s._v(" MVVM")]),s._v(" "),e("p",[s._v("M--\x3eV--\x3eV--\x3eM  数据和DOM是绑定，数据改变DOM自动刷新"),e("br"),s._v("\n--\x3e可以将开发中从大量的DOM操作中解放出来，使开发人员只关注数据处理和业务逻辑")])])}),[],!1,null,null,null);a.default=t.exports}}]);