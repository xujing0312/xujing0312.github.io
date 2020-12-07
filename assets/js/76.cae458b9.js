(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{121:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_10-let、const、var-的区别有哪些？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-let、const、var-的区别有哪些？"}},[t._v("#")]),t._v(" 10.let、const、var 的区别有哪些？")]),t._v(" "),s("h2",{attrs:{id:"声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#声明"}},[t._v("#")]),t._v(" 声明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("声明方式")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("变量提升")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("暂存性死区")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("重复声明")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("块级作用域")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("var")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("存在")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("不存在")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("不存在")])]),t._v(" "),s("tr",[s("td",[t._v("let")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不存在")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("存在")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("存在")])]),t._v(" "),s("tr",[s("td",[t._v("const")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不存在")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("存在")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不可以")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("存在")])])])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("let/const 定义的变量不会出现变量提升，而 var 定义的变量会提升。")])]),t._v(" "),s("li",[s("p",[t._v("相同作用域中，let 和 const 不允许重复声明，var 允许重复声明。")])]),t._v(" "),s("li",[s("p",[t._v("const 声明变量时必须设置初始值")])]),t._v(" "),s("li",[s("p",[t._v("const 声明一个只读的常量，这个常量不可改变。")])])]),t._v(" "),s("p",[t._v("这里有一个非常重要的点即是：在JS中，复杂数据类型，存储在栈中的是堆内存的地址，存在栈中的这个地址是不变的，但是存在堆中的值是可以变得。有没有相当常量指针/指针常量~")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xx"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//22")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);