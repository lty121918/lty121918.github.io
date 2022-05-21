(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{577:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"事件机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件机制"}},[t._v("#")]),t._v(" 事件机制")]),t._v(" "),a("h3",{attrs:{id:"事件触发的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件触发的过程"}},[t._v("#")]),t._v(" 事件触发的过程")]),t._v(" "),a("ul",[a("li",[t._v("捕获阶段：事件从根节点流向目标节点，途中流经各个DOM节点，在各个节点上触发捕获事件，直到达到目标节点；")]),t._v(" "),a("li",[t._v("目标阶段：事件到达目标节点时，就到了目标阶段，事件在目标节点上被触发；")]),t._v(" "),a("li",[t._v("冒泡阶段：事件在目标节点上触发后，不会终止，一层层向上冒泡，回溯到根节点；")])]),t._v(" "),a("h3",{attrs:{id:"注册事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册事件"}},[t._v("#")]),t._v(" 注册事件")]),t._v(" "),a("p",[t._v("通常我们使用 addEventListener注册事件，该函数的第三个参数是布尔值，默认是false，时间句柄在冒泡阶段执行。")]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("element")]),t._v(".addEventListener(event, function, useCapture);")])]),t._v(" "),a("h3",{attrs:{id:"事件代理-事件委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件代理-事件委托"}},[t._v("#")]),t._v(" 事件代理（事件委托）")]),t._v(" "),a("p",[t._v("JavaScript中常用绑定事件的常用技巧。顾名思义，“事件代理”即是把原本需要绑定在子元素的响应事件（click、keydown......）委托给父元素，让父元素担当事件监听的职务。事件代理的原理是DOM元素的事件冒泡。")]),t._v(" "),a("p",[t._v("事件代理的方式相较于直接给目标注册事件来说，有以下优点：")]),t._v(" "),a("ul",[a("li",[t._v("节省内存，管理的函数变少了。不需要为每个元素都添加监听函数；")]),t._v(" "),a("li",[t._v("不需要给子节点注销事件；")]),t._v(" "),a("li",[t._v("可以方便地动态添加和修改元素，不需要因为元素的改动而修改事件绑定；")]),t._v(" "),a("li",[t._v("JavaScript和DOM节点之间的关联变少了，这样也就减少了因循环引用而带来的内存泄漏发生的概率。")])]),t._v(" "),a("h3",{attrs:{id:"js实现事件代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js实现事件代理"}},[t._v("#")]),t._v(" JS实现事件代理")]),t._v(" "),a("p",[t._v("Event对象提供了一个属性叫target，可以返回事件的目标节点，我们成为事件源，也就是说，target就可以表示为当前的事件操作的dom，但是不是真正操作dom。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myLinks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("goSomewhere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Go somewhere"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doSomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Do something"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sayHi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Say hi"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" item1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"goSomewhere"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" item2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doSomething"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" item3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sayHi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doSomething"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"事件委托"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"goSomewhere"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.baidu.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sayHi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br")])]),a("h2",{attrs:{id:"跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),a("p",[t._v("涉及面试题：什么是跨域？为什么浏览器要使用同源策略？你有几种方式可以解决跨域问题？了解预检请求嘛？")]),t._v(" "),a("h3",{attrs:{id:"什么是跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是跨域"}},[t._v("#")]),t._v(" 什么是跨域")]),t._v(" "),a("p",[t._v("因为浏览器出于安全考虑，有同源策略。也就是说，如果协议、域名或者端口有一个不同就是跨域，Ajax 请求会失败。")]),t._v(" "),a("p",[a("strong",[t._v("那么是出于什么安全考虑才会引入这种机制呢？")]),t._v(" 其实主要是用来防止 CSRF 攻击的。简单点说，CSRF 攻击是利用用户的登录态发起恶意请求。")]),t._v(" "),a("p",[a("strong",[t._v("跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了")]),t._v("。")]),t._v(" "),a("p",[t._v("也就是说，没有同源策略的情况下，A 网站可以被任意其他来源的 Ajax 访问到内容。如果你当前 A 网站还存在登录态，那么对方就可以通过 Ajax 获得你的任何信息。当然跨域并不能完全阻止 CSRF，因为请求毕竟是发出去了。")]),t._v(" "),a("h3",{attrs:{id:"同源策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[t._v("#")]),t._v(" 同源策略")]),t._v(" "),a("p",[t._v("最早由网景公司提出，是浏览器的一种安全策略。")]),t._v(" "),a("p",[t._v("同源：协议、域名、端口号必须相同。")]),t._v(" "),a("h3",{attrs:{id:"解决跨域问题的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决跨域问题的方式"}},[t._v("#")]),t._v(" 解决跨域问题的方式")]),t._v(" "),a("h4",{attrs:{id:"jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[t._v("#")]),t._v(" JSONP")]),t._v(" "),a("p",[a("strong",[t._v("JSONP只支持GET请求，JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。")])]),t._v(" "),a("p",[t._v("有三个标签是允许跨域加载资源：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<img src=XXX>")])]),t._v(" "),a("li",[a("code",[t._v("<link href=XXX>")])]),t._v(" "),a("li",[a("code",[t._v("<script src=XXX>")])])]),t._v(" "),a("p",[a("strong",[t._v("利用 "),a("code",[t._v("<script>")]),t._v(" 标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的 JSON 数据。JSONP请求一定需要对方的服务器做支持才可以。")])]),t._v(" "),a("p",[t._v("JSONP优点是简单兼容性好，可用于解决主流浏览器的跨域数据访问的问题。"),a("strong",[t._v("缺点是仅支持get方法具有局限性,不安全可能会遭受XSS攻击。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://domain/api?param1=a&param2=b&callback=jsonp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jsonp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" CORS")]),t._v(" "),a("p",[a("strong",[t._v("CORS支持所有类型的HTTP请求，是跨域HTTP请求的根本解决方案，CORS需要浏览器和后端同时支持")]),t._v("。")]),t._v(" "),a("p",[t._v("浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。")]),t._v(" "),a("p",[t._v("服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。")]),t._v(" "),a("p",[t._v("虽然设置 CORS 和前端没什么关系，但是通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为"),a("strong",[t._v("简单请求")]),t._v("和"),a("strong",[t._v("复杂请求")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"_1-简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单请求"}},[t._v("#")]),t._v(" 1) 简单请求")]),t._v(" "),a("p",[t._v("只要同时满足以下两大条件，就属于简单请求")]),t._v(" "),a("p",[t._v("条件1：使用下列方法之一：")]),t._v(" "),a("ul",[a("li",[t._v("GET")]),t._v(" "),a("li",[t._v("HEAD")]),t._v(" "),a("li",[t._v("POST")])]),t._v(" "),a("p",[t._v("条件2：Content-Type 的值仅限于下列三者之一：")]),t._v(" "),a("ul",[a("li",[t._v("text/plain")]),t._v(" "),a("li",[t._v("multipart/form-data")]),t._v(" "),a("li",[t._v("application/x-www-form-urlencoded")])]),t._v(" "),a("h4",{attrs:{id:"_2-复杂请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-复杂请求"}},[t._v("#")]),t._v(" 2) 复杂请求")]),t._v(" "),a("p",[t._v('不符合以上条件的请求就肯定是复杂请求了。 复杂请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求,该请求是 option 方法的，通过该请求来知道服务端是否允许跨域请求。')]),t._v(" "),a("h3",{attrs:{id:"node中间件代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node中间件代理"}},[t._v("#")]),t._v(" Node中间件代理")]),t._v(" "),a("p",[t._v("实现原理："),a("strong",[t._v("同源策略是浏览器需要遵循的标准，而如果是服务器向服务器请求就无需遵循同源策略。")]),t._v(" 代理服务器，需要做以下几个步骤：")]),t._v(" "),a("ul",[a("li",[t._v("接受客户端请求 。")]),t._v(" "),a("li",[t._v("将请求 转发给服务器。")]),t._v(" "),a("li",[t._v("拿到服务器 响应 数据。")]),t._v(" "),a("li",[t._v("将 响应 转发给客户端。")])]),t._v(" "),a("h3",{attrs:{id:"websocket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" websocket")]),t._v(" "),a("p",[t._v("Websocket是HTML5的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案。WebSocket和HTTP都是应用层协议，都基于 TCP 协议。但是 "),a("strong",[t._v("WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据")]),t._v("。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。")]),t._v(" "),a("h3",{attrs:{id:"nginx反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx反向代理"}},[t._v("#")]),t._v(" nginx反向代理")]),t._v(" "),a("p",[t._v("实现原理类似于Node中间件代理，需要你搭建一个中转nginx服务器，用于转发请求。")]),t._v(" "),a("p",[t._v("使用nginx反向代理实现跨域，是最简单的跨域方式。只需要修改nginx的配置即可解决跨域问题，支持所有浏览器，支持session，不需要修改任何代码，并且不会影响服务器性能。")]),t._v(" "),a("p",[t._v("实现思路：通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。")]),t._v(" "),a("h3",{attrs:{id:"其他方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方法"}},[t._v("#")]),t._v(" 其他方法")]),t._v(" "),a("ul",[a("li",[t._v("postMessage")]),t._v(" "),a("li",[t._v("windows.name+iframe")]),t._v(" "),a("li",[t._v("location.hash+iframe")]),t._v(" "),a("li",[t._v("document.domain+iframe")])]),t._v(" "),a("h2",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("ul",[a("li",[t._v("减少页面体积，提升网络加载\n"),a("ul",[a("li",[t._v("静态资源的压缩合并（JS 代码压缩合并、CSS 代码压缩合并、雪碧图）")]),t._v(" "),a("li",[t._v("静态资源缓存（资源名称加 MD5 戳）")]),t._v(" "),a("li",[t._v("使用 CDN 让资源加载更快")])])]),t._v(" "),a("li",[t._v("优化页面渲染\n"),a("ul",[a("li",[t._v("CSS 放前面，JS 放后面")]),t._v(" "),a("li",[t._v("懒加载（图片懒加载、下拉加载更多）")]),t._v(" "),a("li",[t._v("减少DOM 查询，对 DOM 查询做缓存")]),t._v(" "),a("li",[t._v("减少DOM 操作，多个操作尽量合并在一起执行（"),a("code",[t._v("DocumentFragment")]),t._v("）")]),t._v(" "),a("li",[t._v("事件节流")]),t._v(" "),a("li",[t._v("尽早执行操作（"),a("code",[t._v("DOMContentLoaded")]),t._v("）")]),t._v(" "),a("li",[t._v("使用 SSR 后端渲染，数据直接输出到 HTML 中，减少浏览器使用 JS 模板渲染页面 HTML 的时间")])])])]),t._v(" "),a("h2",{attrs:{id:"回流-reflow-和重绘-repaint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回流-reflow-和重绘-repaint"}},[t._v("#")]),t._v(" 回流（reflow）和重绘（repaint）")]),t._v(" "),a("h3",{attrs:{id:"什么叫回流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么叫回流"}},[t._v("#")]),t._v(" 什么叫回流？")]),t._v(" "),a("p",[t._v("当我们render tree中的一些元素的结构或者尺寸等发生改变，浏览器重新渲染部分或者全部文档的过程就叫做回流。")]),t._v(" "),a("h3",{attrs:{id:"会导致回流的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#会导致回流的操作"}},[t._v("#")]),t._v(" 会导致回流的操作？")]),t._v(" "),a("ul",[a("li",[t._v("页面的首次渲染")]),t._v(" "),a("li",[t._v("浏览器窗口大小发生变化")]),t._v(" "),a("li",[t._v("内容变换")]),t._v(" "),a("li",[t._v("添加或者删除节点")]),t._v(" "),a("li",[t._v("激活CSS伪类")]),t._v(" "),a("li",[t._v("clinentWidth")])]),t._v(" "),a("h3",{attrs:{id:"什么是重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是重绘"}},[t._v("#")]),t._v(" 什么是重绘？")]),t._v(" "),a("p",[t._v("当前页面中的元素样式改变不影响它在文档流中的位置，浏览器会将新样式赋予给元素，这个过程叫做重绘。")]),t._v(" "),a("h3",{attrs:{id:"导致重绘的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导致重绘的操作"}},[t._v("#")]),t._v(" 导致重绘的操作？")]),t._v(" "),a("ul",[a("li",[t._v("background")]),t._v(" "),a("li",[t._v("visibility")])]),t._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("回流一定会引起重绘，重绘不一定能引起回流。")]),t._v(" "),a("p",[t._v("回流的性能消耗要比重绘大。")]),t._v(" "),a("h2",{attrs:{id:"从输入-url-到页面加载完成的过程中都发生了什么事情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-到页面加载完成的过程中都发生了什么事情"}},[t._v("#")]),t._v(" 从输入 URL 到页面加载完成的过程中都发生了什么事情？")]),t._v(" "),a("h2",{attrs:{id:"垃圾回收机制gc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收机制gc"}},[t._v("#")]),t._v(" 垃圾回收机制GC")]),t._v(" "),a("p",[t._v("JS内存垃圾回收使用的算法：")]),t._v(" "),a("ul",[a("li",[t._v("引用计数（之前，会有循环引用的问题）")]),t._v(" "),a("li",[t._v("标记清除（现在）")])]),t._v(" "),a("h2",{attrs:{id:"进程和线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[t._v("#")]),t._v(" 进程和线程")]),t._v(" "),a("p",[t._v("进程，OS进行资源分配和调度的最小单位，有独立内存空间；")]),t._v(" "),a("p",[t._v("线程，OS进行匀速那调度的最小单位，共享进程内存空间；")]),t._v(" "),a("p",[t._v("JS是单线程的，但可以开启多进程执行，如WebWorker；")]),t._v(" "),a("h2",{attrs:{id:"cookie和token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie和token"}},[t._v("#")]),t._v(" cookie和token")]),t._v(" "),a("p",[a("strong",[t._v("cookie")])]),t._v(" "),a("ul",[a("li",[t._v("HTTP无状态，每次请求都要带cookie，以帮助识别身份；")]),t._v(" "),a("li",[t._v("服务端也可以向客户端set-cookie，cookie大小限制为4k；")]),t._v(" "),a("li",[t._v("默认有跨域限制：不可跨域共享、传递cookie；")]),t._v(" "),a("li",[t._v("HTML5之前常被用于本地储存，之后推荐使用localStorage和sessionStorage；")])]),t._v(" "),a("p",[a("strong",[t._v("cookie和session")])]),t._v(" "),a("ul",[a("li",[t._v("cookie用于登陆验证，存储用户标识（如userId）")]),t._v(" "),a("li",[t._v("session在服务端，存储用户详细信息，和cookie信息一一对应；")]),t._v(" "),a("li",[t._v("cookie+session是常见的登陆验证解决方案；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/ekzodia_lty/blog-image/raw/master/img/d774a34a76d006cd4d86d0c701049e8.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("现代浏览器开始禁止第三方cookie")])]),t._v(" "),a("ul",[a("li",[t._v("和跨域限制不同，这里是：禁止网页引入第三方JS设置cookie；")]),t._v(" "),a("li",[t._v("打击第三方广告，保护用户隐私；")]),t._v(" "),a("li",[t._v("新增SameSite：Strict/Lax/None;值可自己选择。")])]),t._v(" "),a("p",[a("strong",[t._v("token VS cookie")])]),t._v(" "),a("ul",[a("li",[t._v("cookie是HTTP规范，而token是自定义传递；")]),t._v(" "),a("li",[t._v("cookie会默认被浏览器存储，而token需自己储存；")]),t._v(" "),a("li",[t._v("token默认没有跨域限制；")])]),t._v(" "),a("p",[a("strong",[t._v("JWT（JSON Web Token）")])]),t._v(" "),a("ul",[a("li",[t._v("可以代替cookie+session的方案；")]),t._v(" "),a("li",[t._v("前端发起登录，后端验证成功之后，返回一个加密的token；")]),t._v(" "),a("li",[t._v("前端自行存储token（其中包含了被加密的用户信息）；")]),t._v(" "),a("li",[t._v("以后访问服务端接口，都携带这个token作为用户信息；")])]),t._v(" "),a("p",[a("strong",[t._v("JWT的优点")])]),t._v(" "),a("ul",[a("li",[t._v("不占用服务端内存；")]),t._v(" "),a("li",[t._v("多进程、多服务器不受影响；")]),t._v(" "),a("li",[t._v("没有跨域限制；")])]),t._v(" "),a("p",[a("strong",[t._v("JWT的缺点")])]),t._v(" "),a("ul",[a("li",[t._v("用户信息储存在客户端，无法快速封禁某用户；")]),t._v(" "),a("li",[t._v("万一服务端密钥被泄露，则用户数据全部丢失；")]),t._v(" "),a("li",[t._v("token体积一般大于cookie，会增加请求的数量；")])]),t._v(" "),a("h2",{attrs:{id:"localstorage-和-sessionstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localstorage-和-sessionstorage"}},[t._v("#")]),t._v(" localStorage 和 sessionStorage")]),t._v(" "),a("ul",[a("li",[t._v("HTML5 专门为存储来设计的，最大可存 5M。")]),t._v(" "),a("li",[t._v("API 简单易用， setItem getItem。")]),t._v(" "),a("li",[t._v("不会随着 http 请求被发送到服务端。")])]),t._v(" "),a("p",[a("strong",[t._v("区别：")])]),t._v(" "),a("ul",[a("li",[t._v("localStorage 数据会永久存储，除非代码删除或手动删除。")]),t._v(" "),a("li",[t._v("sessionStorage 数据只存在于当前会话，浏览器关闭则清空。")]),t._v(" "),a("li",[t._v("一般用 localStorage 会多一些。")])]),t._v(" "),a("blockquote",[a("p",[t._v("参考链接：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_38128179/article/details/86293394",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript事件代理（事件委托）_越努力，越幸运！-CSDN博客_事件委托"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://fex.baidu.com/blog/2014/05/what-happen/",target:"_blank",rel:"noopener noreferrer"}},[t._v("从输入 URL 到页面加载完成的过程中都发生了什么事情？ - FEX (baidu.com)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6981588276356317214#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("「硬核JS」你真的了解垃圾回收机制吗 - 掘金 (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/fs0196/p/12685254.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器事件机制中 事件触发的三个阶段 - DAVENEE - 博客园 (cnblogs.com)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_38128179/article/details/86293394",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript事件代理（事件委托）_越努力，越幸运！-CSDN博客_事件委托"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903767226351623#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("九种跨域方式实现原理（完整版） - 掘金 (juejin.cn)"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);