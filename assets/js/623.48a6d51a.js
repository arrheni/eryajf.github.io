(window.webpackJsonp=window.webpackJsonp||[]).push([[623],{965:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("之前博客一直对接的百度访问统计，现在想着对接一下谷歌的访问统计，在此简单记录一下配置流程。")]),t._v(" "),s("h2",{attrs:{id:"注册账号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册账号"}},[t._v("#")]),t._v(" 注册账号")]),t._v(" "),s("p",[t._v("访问： "),s("a",{attrs:{href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://analytics.google.com/"),s("OutboundLink")],1),t._v(" 没有账号注册一个账号。")]),t._v(" "),s("p",[t._v("根据提醒添加自己的网站信息，之后会获取一个统计代码：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/04/1712499056391.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"配置插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置插件"}},[t._v("#")]),t._v(" 配置插件")]),t._v(" "),s("p",[t._v("市面上有好几款 vuepress 对接的插件，经过一番摸索，发现下边这个比较理想：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/laphets/vuepress-plugin-google-analytics-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-google-analytics-4"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("安装插件：")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-google-analytics-4\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OR npm install vuepress-plugin-google-analytics-4")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("strong",[t._v("配置插件：")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Google 统计")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'google-analytics-4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("gtag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'G-PNSZ4B1K60'")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"检查是否成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查是否成功"}},[t._v("#")]),t._v(" 检查是否成功")]),t._v(" "),s("p",[t._v("配置完毕之后，将博客重新发布，可通过如下方式检查是否配置成功。")]),t._v(" "),s("p",[t._v("方式一：打开检查，搜索 analytics，每当点击页面可以看到会发起对应的请求。")]),t._v(" "),s("p",[t._v("方式二：通过"),s("a",{attrs:{href:"https://chromewebstore.google.com/detail/deprecated-tag-assistant/kejbdjndbnbjgmefkgdddjlbokphdefk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tag Assistant Legacy"),s("OutboundLink")],1),t._v("插件进行检测。")]),t._v(" "),s("p",[t._v("方式三：一般配置成功之后，大约等个十来分钟，再回到谷歌访问统计的网站，应该就能看到有对应的检测数据了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://t.eryajf.net/imgs/2024/04/1712499085660.png",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);