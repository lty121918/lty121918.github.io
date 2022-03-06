(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{582:function(t,_,v){"use strict";v.r(_);var a=v(13),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"osi七层模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#osi七层模型"}},[t._v("#")]),t._v(" OSI七层模型")]),t._v(" "),v("ul",[v("li",[t._v("应用层（HTTP、SMTP、FTP、DNS）")]),t._v(" "),v("li",[t._v("表示层")]),t._v(" "),v("li",[t._v("会话层")]),t._v(" "),v("li",[t._v("运输层（TCP、UDP）")]),t._v(" "),v("li",[t._v("网络层（IP层）")]),t._v(" "),v("li",[t._v("链路层")]),t._v(" "),v("li",[t._v("物理层")])]),t._v(" "),v("h2",{attrs:{id:"udp和tcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#udp和tcp"}},[t._v("#")]),t._v(" UDP和TCP")]),t._v(" "),v("h3",{attrs:{id:"udp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#udp"}},[t._v("#")]),t._v(" UDP")]),t._v(" "),v("p",[t._v("UDP 协议只是数据报文的搬运工，不保证有序且不丢失的传递到对端，并且UDP 协议也没有任何控制流量的算法，总的来说 UDP 相较于 TCP 更加的轻便。")]),t._v(" "),v("h4",{attrs:{id:"udp的特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#udp的特点"}},[t._v("#")]),t._v(" UDP的特点：")]),t._v(" "),v("ul",[v("li",[t._v("面向无连接")]),t._v(" "),v("li",[t._v("不可靠性")]),t._v(" "),v("li",[t._v("高效（头部开销小，只有八个字节）")]),t._v(" "),v("li",[t._v("传输方式（一对一，一对多，多对多都支持）")])]),t._v(" "),v("h4",{attrs:{id:"udp的使用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#udp的使用场景"}},[t._v("#")]),t._v(" UDP的使用场景：")]),t._v(" "),v("ul",[v("li",[t._v("直播")]),t._v(" "),v("li",[t._v("实时性要求很高的游戏")])]),t._v(" "),v("h3",{attrs:{id:"tcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),v("h4",{attrs:{id:"tcp头部标识符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp头部标识符"}},[t._v("#")]),t._v(" TCP头部标识符")]),t._v(" "),v("ul",[v("li",[t._v("URG=1：该字段为一表示本数据报的数据部分包含紧急信息，是一个高优先级数据报文，此时紧急指针有效。紧急数据一定位于当前数据包数据部分的最前面，紧急指针标明了紧急数据的尾部。")]),t._v(" "),v("li",[t._v("ACK=1：该字段为一表示确认号字段有效。此外，TCP 还规定在连接建立后传送的所有报文段都必须把 ACK 置为一。")]),t._v(" "),v("li",[t._v("SYN=1：当SYN=1，ACK=0时，表示当前报文段是一个连接请求报文。当SYN=1，ACK=1时，表示当前报文段是一个同意建立连接的应答报文。")]),t._v(" "),v("li",[t._v("FIN=1：该字段为一表示此报文段是一个释放连接的请求报文。")])]),t._v(" "),v("h4",{attrs:{id:"滑动窗口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[t._v("#")]),t._v(" 滑动窗口")]),t._v(" "),v("p",[t._v("​\t\t在TCP中，两端其实都维护着窗口：分别为发送端窗口和接收端窗口。发送端窗口包含已发送但未收到应答的数据和可以发送但是未发送的数据。当发送端接收到应答报文后，会随之将窗口进行滑动。")]),t._v(" "),v("p",[t._v("​\t\t滑动窗口是一个很重要的概念，它帮助 TCP 实现了流量控制的功能。接收方通过报文告知发送方还可以发送多少数据，从而保证接收方能够来得及接收数据，防止出现接收方带宽已满，但是发送方还一直发送数据的情况。")]),t._v(" "),v("h4",{attrs:{id:"四次挥手过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手过程"}},[t._v("#")]),t._v(" 四次挥手过程")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ekzodia_lty/blog-image/raw/master/img/20220204233449.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"http-2-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-2-0"}},[t._v("#")]),t._v(" HTTP/2.0")]),t._v(" "),v("p",[t._v("HTTP/2 通过多路复用、二进制流、Header 压缩等等技术，极大地提高了性能，但是还是存在着问题的")]),t._v(" "),v("h2",{attrs:{id:"xss和csrf区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xss和csrf区别"}},[t._v("#")]),t._v(" XSS和CSRF区别")]),t._v(" "),v("ol",[v("li",[t._v("跨站脚本攻击（Cross Site Scripting)，为了不和层叠样式表 CSS 混淆，故将跨站脚本攻击缩写为 XSS。恶意攻击者往 Web 页面里插入恶意 Script 代码，当用户浏览该页之时，嵌入其中 Web 里面的 Script 代码会被执行，从而达到恶意攻击用户的目的。")]),t._v(" "),v("li",[t._v("跨站请求伪造（Cross-site request forgery），是伪造请求，冒充用户在站内的正常操作。我们知道，绝大多数网站是通过 cookie 等方式辨识用户身份，再予以授权的。所以要伪造用户的正常操作，最好的方法是通过 XSS 或链接欺骗等途径，让用户在本机（即拥有身份 cookie 的浏览器端）发起用户所不知道的请求。")])]),t._v(" "),v("p",[t._v("区别：")]),t._v(" "),v("ul",[v("li",[t._v("原理不同，CSRF是利用网站A本身的漏洞，去请求网站A的api；XSS是向目标网站注入JS代码，然后执行JS里的代码。")]),t._v(" "),v("li",[t._v("CSRF需要用户先登录目标网站获取cookie，而XSS不需要登录")]),t._v(" "),v("li",[t._v("CSRF的目标是用户，XSS的目标是服务器")]),t._v(" "),v("li",[t._v("XSS是利用合法用户获取其信息，而CSRF是伪造成合法用户发起请求")])]),t._v(" "),v("h2",{attrs:{id:"dns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),v("h3",{attrs:{id:"顶级域名服务器-tld"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#顶级域名服务器-tld"}},[t._v("#")]),t._v(" 顶级域名服务器（TLD）")]),t._v(" "),v("p",[t._v("com、cn、net、gov")]),t._v(" "),v("h3",{attrs:{id:"权威域名服务器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#权威域名服务器"}},[t._v("#")]),t._v(" 权威域名服务器")]),t._v(" "),v("p",[t._v("bilibili、qq、baidu")]),t._v(" "),v("h3",{attrs:{id:"dns解析过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns解析过程"}},[t._v("#")]),t._v(" DNS解析过程")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("用户主机上运行着"),v("code",[t._v("DNS")]),t._v("的客户端，就是我们的PC机或者手机客户端运行着DNS客户端了")])]),t._v(" "),v("li",[v("p",[t._v("浏览器将接收到的url中抽取出域名字段，就是访问的主机名，比如"),v("code",[t._v("http://www.baidu.com/")]),t._v(", 并将这个主机名传送给DNS应用的客户端")])]),t._v(" "),v("li",[v("p",[t._v("DNS客户机端向DNS服务器端发送一份"),v("code",[t._v("查询报文")]),t._v("，报文中包含着要访问的"),v("code",[t._v("主机名字段")]),t._v("（中间包括一些列缓存查询以及分布式DNS集群的工作）")])]),t._v(" "),v("li",[v("p",[t._v("该DNS客户机最终会收到一份"),v("code",[t._v("回答报文")]),t._v("，其中包含有该主机名对应的"),v("code",[t._v("IP地址")])])]),t._v(" "),v("li",[v("p",[t._v("一旦该浏览器收到来自DNS的IP地址，就可以向该IP地址定位的HTTP服务器发起TCP连接")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/ekzodia_lty/blog-image/raw/master/img/20220204234852.png",alt:""}})]),t._v(" "),v("h2",{attrs:{id:"cdn"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),v("p",[t._v("内容分发网络")]),t._v(" "),v("p",[t._v("加速访问、减少代码打包大小、减少网络带宽的费用")]),t._v(" "),v("p",[t._v("资源上传cdn之后，当用户访问cdn的资源地址之后会经历下面的步骤：")]),t._v(" "),v("ol",[v("li",[t._v("首先经过本地的dns解析，请求cname指向的那台cdn专用的dns服务器。")]),t._v(" "),v("li",[t._v("dns服务器返回全局负载均衡的服务器ip给用户")]),t._v(" "),v("li",[t._v("用户请求全局负载均衡服务器，服务器根据ip返回所在区域的负载均衡服务器ip给用户")]),t._v(" "),v("li",[t._v("用户请求区域负载均衡服务器，负载均衡服务器根据用户ip选择距离近的，并且存在用户所需内容的，负载比较合适的一台缓存服务器ip给用户。当没有对应内容的时候，会去上一级缓存服务器去找，直到找到资源所在的源站服务器，并且缓存在缓存服务器中。用户下一次在请求该资源，就可以就近拿缓存了。")])]),t._v(" "),v("blockquote",[v("p",[t._v("知识点是在网上整合的，有侵权请联系删除")])])])}),[],!1,null,null,null);_.default=s.exports}}]);