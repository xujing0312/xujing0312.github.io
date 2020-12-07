(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{93:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"taro学习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#taro学习"}},[s._v("#")]),s._v(" Taro学习")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("官网给的介绍")]),s._v(" "),t("p",[s._v("👽 Taro['tɑ:roʊ]，泰罗·奥特曼，宇宙警备队总教官，实力最强的奥特曼 "),t("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/README.html"}},[s._v("官网")])])]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("前言: 废话一下,taro是一个多端应用的框架,这里面只是介绍一下"),t("strong",[s._v("他们的坑")]),s._v(",API的使用就直接去官网看就好了")])]),s._v(" "),t("li",[t("p",[s._v("作用: 一套代码,产生多端 (不能使用npm,没有less和scss没有状态管理)")])]),s._v(" "),t("li",[t("p",[s._v("历史: 伴随微信小程序的多端的框架发展历史")])])]),s._v(" "),t("ol",[t("li",[s._v("wepy\n"),t("ol",[t("li",[s._v("腾讯出的,用vue写小程序,还要学习他的语法,实现不是特别好")])])]),s._v(" "),t("li",[s._v("mpvue\n"),t("ol",[t("li",[s._v("完全的vue体验,使用vue脚手架,完全的vue方法")]),s._v(" "),t("li",[s._v("mpvue刚出的时候,小程序基本没有自己的组件化 再加上当时mpvue长期没有更新,所以不是特别推荐")])])]),s._v(" "),t("li",[s._v("taro(React)\n"),t("ol",[t("li",[s._v("这是一个基于React语法的多端框架")])])]),s._v(" "),t("li",[s._v("uni-app(vue)\n"),t("ol",[t("li",[s._v("这是基于vue语法的多端框架")])])])]),s._v(" "),t("ul",[t("li",[s._v("总结: 其实由于微信原⽣⼩程序开发⾃⼰玩了⼀套⾃⼰的语法，所以早早就有⽤vuejs来开发⼩程序的框架，⽐如webpy和mpvue，但是基本都是单纯的开发微信⼩程序，现在基本对多端⽀持⾜够好的，就是taro和uni-app了，分别是使⽤React和Vue的语法来开发⼩程序⽣态")])]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 npm 安装 CLI")]),s._v("\nnpm install "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("g @tarojs/cli\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR 使用 yarn 安装 CLI")]),s._v("\nyarn global add @tarojs/cli\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OR 安装了 cnpm，使用 cnpm 安装 CLI")]),s._v("\ncnpm install "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("g @tarojs/cli\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("项目初始化")])]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[s._v("taro init myApp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"问题所在"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题所在"}},[s._v("#")]),s._v(" 问题所在!")]),s._v(" "),t("p",[s._v("默认不支持同时编辑多个端,需要自己配置解决")]),s._v(" "),t("p",[s._v("跨端并不代表一次开发,就完全一致了,有很多地方是跨端框架做不到的事情")]),s._v(" "),t("p",[s._v("比如:")]),s._v(" "),t("ol",[t("li",[s._v("登录\n"),t("ol",[t("li",[s._v("微信有微信登录")]),s._v(" "),t("li",[s._v("支付宝有支付宝登录")]),s._v(" "),t("li",[s._v("百度有百度登录等等")])])]),s._v(" "),t("li",[s._v("支付\n"),t("ol",[t("li",[s._v("微信只能微信支付")]),s._v(" "),t("li",[s._v("支付宝只能支付宝支付")]),s._v(" "),t("li",[s._v("百度可以微信和支付宝还有百度收银台")])])])]),s._v(" "),t("h2",{attrs:{id:"taro配合taro-ui使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#taro配合taro-ui使用"}},[s._v("#")]),s._v(" taro配合taro-ui使用")]),s._v(" "),t("ul",[t("li",[s._v("安装")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("cnpm install taro"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ui "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("配置")])]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("config")]),s._v("中,把"),t("code",[s._v("index.js")]),s._v("添以下配置")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("h5"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  esnextModules"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'taro-ui'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("使用")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// page.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" AtButton "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'taro-ui'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 除了引入所需的组件，还需要手动引入组件样式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'taro-ui/dist/style/index.scss'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局引入一次即可")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);