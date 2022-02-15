(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{580:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("h2",{attrs:{id:"xxs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xxs"}},[t._v("#")]),t._v(" XXS")]),t._v(" "),a("p",[t._v("xss: 跨站脚本攻击（Cross Site Scripting）是最常见和基本的攻击 WEB 网站方法，攻击者通过注入非法的 html 标签或者 javascript 代码，从而当用户浏览该网页时，控制用户浏览器。")]),t._v(" "),a("h3",{attrs:{id:"xss的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss的分类"}},[t._v("#")]),t._v(" xss的分类")]),t._v(" "),a("ul",[a("li",[t._v("DOM XSS")]),t._v(" "),a("li",[t._v("反射型XSS（非持久型）")]),t._v(" "),a("li",[t._v("储存型XSS（持久型）")])]),t._v(" "),a("h3",{attrs:{id:"实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[t._v("#")]),t._v(" 实现原理")]),t._v(" "),a("p",[a("strong",[t._v("DOM XSS")]),t._v("：目前更流行前后端分离的项目，反射型 XSS 无用武之地。 但这种攻击不需要经过服务器，触发XSS靠的是浏览器端的DOM解析，我们知道，网页本身的 JavaScript也是可以改变 HTML 的，黑客正是利用这一点来实现插入恶意脚本。")]),t._v(" "),a("p",[a("strong",[t._v("反射型")]),t._v("：恶意 JavaScript脚本属于用户发送给网站请求中的一部分，随后网站又将这部分返回给用户，恶意脚本在页面中被执行。一般发生在前后端一体的应用中，服务端逻辑会改变最终的网页代码。")]),t._v(" "),a("p",[a("strong",[t._v("存储型")]),t._v("：又被称为持久型XSS，它是最危险的一种跨站脚本，相比反射型XSS和DOM型XSS具有更高的隐蔽性，所以危害更大，因为它不需要用户手动触发。 允许用户存储数据的web程序都可能存在存储型XSS漏洞，常见于搜索、微博、社区贴吧评论等。")]),t._v(" "),a("h3",{attrs:{id:"危害"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#危害"}},[t._v("#")]),t._v(" 危害")]),t._v(" "),a("ul",[a("li",[t._v("盗取用户 Cookie")]),t._v(" "),a("li",[t._v("未授权操作")]),t._v(" "),a("li",[t._v("修改 DOM")]),t._v(" "),a("li",[t._v("刷浮窗广告")]),t._v(" "),a("li",[t._v("发动 XSS 蠕虫攻击")]),t._v(" "),a("li",[t._v("劫持用户行为，进一步渗透内网")]),t._v(" "),a("li",[t._v("......")])]),t._v(" "),a("h3",{attrs:{id:"防御方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防御方式"}},[t._v("#")]),t._v(" 防御方式")]),t._v(" "),a("ul",[a("li",[t._v("使用转义字符，对用户输入的尖括号、引号、斜杠进行转义，阻止恶意代码的注入和实行；")]),t._v(" "),a("li",[t._v("用更安全的方法校验和保护用户的身份凭证，设置HttpOnly，使cookie字段无法通过JS获取；")]),t._v(" "),a("li",[t._v("避免使用"),a("code",[t._v("innerHTML，document.write,eval")]),t._v("等方法；")]),t._v(" "),a("li",[t._v("开启内容安全策略CSP防护，在HTTP头部设置"),a("code",[t._v("Content-Security-Policy: script-src 'self'")]),t._v("；")])]),t._v(" "),a("h2",{attrs:{id:"csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),a("p",[t._v("CSRF（Cross-site request forgery）中文名称跨站请求伪造，攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。")]),t._v(" "),a("h3",{attrs:{id:"实现方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[t._v("#")]),t._v(" 实现方式")]),t._v(" "),a("ul",[a("li",[t._v("最容易实现的是 "),a("code",[t._v("Get")]),t._v(" 请求，一般进入黑客网站后，可以通过设置 "),a("code",[t._v("img")]),t._v("的 "),a("code",[t._v("src")]),t._v(" 属性来自动发起请求；")]),t._v(" "),a("li",[t._v("在黑客的网站中，构造隐藏表单来自动发起 "),a("code",[t._v("Post")]),t._v(" 请求；")]),t._v(" "),a("li",[t._v("通过引诱链接诱惑用户点击触发请求，利用 "),a("code",[t._v("a")]),t._v(" 标签的 "),a("code",[t._v("href")]),t._v("；")])]),t._v(" "),a("h3",{attrs:{id:"csrf攻击和xss攻击有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击和xss攻击有什么区别"}},[t._v("#")]),t._v(" CSRF攻击和XSS攻击有什么区别？")]),t._v(" "),a("p",[t._v("CSRF 攻击不需要将恶意代码注入用户的页面，仅仅是利用服务器的漏洞和用户的登录状态来实施攻击。")]),t._v(" "),a("p",[t._v("CSRF 攻击成本也比 XSS 低，用户每天都要访问大量网页，无法确认每一个网页的合法性， 从用户角度来说，无法彻底防止 CSRF 攻击。")]),t._v(" "),a("h3",{attrs:{id:"防御方式-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防御方式-2"}},[t._v("#")]),t._v(" 防御方式")]),t._v(" "),a("ul",[a("li",[t._v("同源检测；")]),t._v(" "),a("li",[t._v("增加二次验证（独立的支付密码）；")]),t._v(" "),a("li",[t._v("CSRF Token；")]),t._v(" "),a("li",[t._v("设置Cookie的SameSite属性；")])]),t._v(" "),a("h2",{attrs:{id:"点击劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持"}},[t._v("#")]),t._v(" 点击劫持")]),t._v(" "),a("h3",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("ul",[a("li",[t._v("隐蔽性较高，骗取用户操作；")]),t._v(" "),a("li",[t._v('"UI-覆盖攻击"；')]),t._v(" "),a("li",[t._v("利用iframe或者其它标签的属性；")])]),t._v(" "),a("h3",{attrs:{id:"防御方式-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防御方式-3"}},[t._v("#")]),t._v(" 防御方式")]),t._v(" "),a("ul",[a("li",[t._v("X-FRAME-OPTIONS响应头防止iframe嵌套的点击劫持；")]),t._v(" "),a("li",[t._v("JavaScript防御点击劫持；")])]),t._v(" "),a("p",[t._v("js防御代码：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("click-jack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" style "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click-jack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h2",{attrs:{id:"中间人攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间人攻击"}},[t._v("#")]),t._v(" 中间人攻击")]),t._v(" "),a("p",[t._v("中间人攻击是攻击方同时与服务端和客户端建立起了连接，并让对方认为连接是安全的，但是实际上整个通信过程都被攻击者控制了。攻击者不仅能获得双方的通信信息，还能修改通信信息。")]),t._v(" "),a("p",[t._v("通常来说不建议使用公共的 Wi-Fi，因为很可能就会发生中间人攻击的情况。如果你在通信的过程中涉及到了某些敏感信息，就完全暴露给攻击方了。")]),t._v(" "),a("p",[t._v("当然防御中间人攻击其实并不难，只需要增加一个安全通道来传输信息。HTTPS 就可以用来防御中间人攻击，但是并不是说使用了 HTTPS 就可以高枕无忧了，因为如果你没有完全关闭 HTTP 访问的话，攻击方可以通过某些方式将 HTTPS 降级为 HTTP 从而实现中间人攻击。")]),t._v(" "),a("blockquote",[a("p",[t._v("参考链接：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903502968258574#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全知识 - 掘金 (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844904100945985543",target:"_blank",rel:"noopener noreferrer"}},[t._v("「前端食堂」想进大厂必须要知道的Web安全问题 - 掘金 (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6893320971462279175#heading-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("温故知新：前端安全知多少 - 掘金 (juejin.cn)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/book/6844733763675488269/section/6844733763776151565",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端面试之道 - yck - 掘金课程 (juejin.cn)"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);