(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{575:function(t,a,e){"use strict";e.r(a);var v=e(12),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("本文转载自："),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/142311416",target:"_blank",rel:"noopener noreferrer"}},[t._v("这是前端需要的缓存知识！ - 知乎 (zhihu.com)"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("作为一名优秀的前端开发者，必须了解浏览器以及http协议中的缓存策略。因为在日常的开发中，我们会经常接触到一些性能优化的需求，那么缓存（cache）这种技术无论是在前端开发领域也好，后端开发领域也好，也是一种非常常见以及有效的方案。只是前后端之间的缓存方式不太一样，而且后端很多时候需要缓存的是数据，而前端往往需要利用浏览器和http协议去缓存数据或者文件，从而达到提升加载速度的效果。")]),t._v(" "),e("h2",{attrs:{id:"浏览器缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[t._v("#")]),t._v(" 浏览器缓存")]),t._v(" "),e("p",[t._v("浏览器的缓存是通过HTTP协议中的一些特定的字段去控制某个文件是否进行缓存，过期时间等信息，用一张简单的图去描述浏览器是如何缓存文件的。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-1bbb2c440c496bc579f0a2477b8a8f1f_720w.jpg",alt:"img"}})]),t._v(" "),e("p",[t._v("浏览器分为两种缓存策略：")]),t._v(" "),e("ol",[e("li",[t._v("强缓存")]),t._v(" "),e("li",[t._v("协商缓存")])]),t._v(" "),e("h2",{attrs:{id:"强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),e("p",[t._v("浏览器在先服务器获取资源之前，首先会查看当前的资源是否命中强缓存，如果命中了强缓存，那么将不会进行协商缓存，直接从缓存中获取资源内容进行缓存。")]),t._v(" "),e("p",[t._v("设置一个资源的强缓存一般使用Expires(http1.0)和Cache-Control(http1.1)这两个响应头属性进行设置。")]),t._v(" "),e("h3",{attrs:{id:"expires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[t._v("#")]),t._v(" Expires")]),t._v(" "),e("p",[t._v("Expires字段是http1.0的控制强缓存字段，其值是一个"),e("strong",[t._v("绝对时间")]),t._v("的GMT格式的时间字符串。代表着该资源的有效时间。但是如果服务器和客户端之间的时间偏差较大，就会出现缓存混乱等情况。")]),t._v(" "),e("h3",{attrs:{id:"cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),e("p",[t._v("Cache-Control是http1.1提出的新强缓存规范，它的值是一个相对时间，例如Cache-Control: max-age=90，代表该资源的有效时间是第一次获取资源后90秒失效。（也是现在最常用的强缓存控制字段）。Cache-Control还有一些其他值可以设置。")]),t._v(" "),e("ul",[e("li",[t._v("no-cache:：需要进行协商缓存，由服务器确认是否使用缓存。")]),t._v(" "),e("li",[t._v("no-store： 禁止使用缓存，每一次都要重新请求服务器。")]),t._v(" "),e("li",[t._v("public：可以被所有用户缓存，包括浏览器和cdn等中间代理商。")]),t._v(" "),e("li",[t._v("private：只能对客户端（如浏览器）使用缓存。")])]),t._v(" "),e("blockquote",[e("p",[t._v("为了解决兼容问题，一般Expires和Cache-Control是同时设置的。在支持Cache-Control的http协议中，Cache-Control的优先级更高。")])]),t._v(" "),e("h2",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),e("p",[t._v("协商缓存一般是强缓存没有命中，那么就会进入协商缓存，客户端将当前资源的一些信息携带在请求头的header当中，由服务器判断是否使用缓存，如果命中协商缓存，那么将返回304。")]),t._v(" "),e("h3",{attrs:{id:"last-modify-if-modify-since"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modify-if-modify-since"}},[t._v("#")]),t._v(" Last-Modify/If-Modify-Since")]),t._v(" "),e("p",[t._v("浏览器首次请求一个资源的时候，服务器会返回该资源的最后修改时间，通过在响应头的Last-Modify属性中返回最后修改时间，浏览器会将该属性值保存起来，在下一次对同样的资源发起请求的时候，会将上一次请求时获取到Last-Modify的值携带在请求头的If-Modify-Since属性中，如果服务器验证最后修改时间一致，那么将会返回304。否则就会重启响应新的资源内容以及新的最后修改时间给浏览器。")]),t._v(" "),e("p",[t._v("Last-Modify/If-Modify-Since属性有一个缺点，就是返回的值是最后修改时间进行判断的，但是如果文件在一个周期内，发生过改变，但是最后还是变回原样，那么最后修改的时间会发生变化，那么会导致协商缓存失效，导致文件内容并没有变化，但是浏览器会重新下载资源。为了解决这个问题，后来就出现了ETag/If-None-Match。")]),t._v(" "),e("h3",{attrs:{id:"etag-if-none-match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[t._v("#")]),t._v(" ETag/If-None-Match")]),t._v(" "),e("p",[t._v("ETag/If-None-Match和Last-Modify/If-Modify-Since不一样，ETag/If-None-Match返回的是该资源的唯一标识，而且是个资源的内容挂钩的，如果你多次修改文件，但是文件最终的内容还是一样，那么ETag的标识码还是一样的。这样就有效的解决了Last-Modify/If-Modify-Since的问题。")]),t._v(" "),e("p",[t._v("ETag/If-None-Match和Last-Modify/If-Modify-Since的携带方式是一样。")]),t._v(" "),e("h2",{attrs:{id:"浏览器的资源缓存策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的资源缓存策略"}},[t._v("#")]),t._v(" 浏览器的资源缓存策略")]),t._v(" "),e("p",[t._v("在通过访问浏览器获取资源后，浏览器本身也有一套缓存的文件存放机制，主要分为"),e("strong",[t._v("memory cache")]),t._v("和"),e("strong",[t._v("disk cache")]),t._v("两种方式。从名字上就很清晰知道一个是存放在内存当中，一个是存放到硬盘当中。")]),t._v(" "),e("h3",{attrs:{id:"memory-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache"}},[t._v("#")]),t._v(" memory cache")]),t._v(" "),e("p",[t._v("webkit内核将资源分为两种，一种是HTML资源，或者下载项资源。另外一种是派生资源，例如JS、CSS和图片。webkit只支持对派生资源中的JS、CSS、图片等存放在memory cache中。其他派生资源都是存放在disk cache中。进程关闭时，内存缓存将会被清除。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-1d68403bd6e9a15932549c9e96289396_720w.png",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"disk-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disk-cache"}},[t._v("#")]),t._v(" disk cache")]),t._v(" "),e("p",[t._v("如上述所说的，资源都会存放到硬盘中。进程关闭时，硬盘缓存不会清除。那么什么资源什么时候会存放到硬盘，什么时候会存放到内存呢？")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-1b995c207dd58cbf06af6d00ce95bdf3_720w.png",alt:"img"}})]),t._v(" "),e("blockquote",[e("p",[t._v("这个需要看当前的资源的大小，内存空间是否足够等因素决定。")])]),t._v(" "),e("h2",{attrs:{id:"浏览器三级缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器三级缓存"}},[t._v("#")]),t._v(" 浏览器三级缓存")]),t._v(" "),e("ul",[e("li",[t._v("内存中查找缓存资源")]),t._v(" "),e("li",[t._v("内存中没有查找到缓存资源将会在硬盘中查找")]),t._v(" "),e("li",[t._v("硬盘中查找不到资源，将会发起请求获取远程资源")]),t._v(" "),e("li",[t._v("获取到资源后根据资源的类型分别存放到内存或者硬盘中。")])]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("浏览器缓存一般又三部分组成。")]),t._v(" "),e("ul",[e("li",[t._v("强缓存")]),t._v(" "),e("li",[t._v("协商缓存")]),t._v(" "),e("li",[t._v("浏览器的三层缓存")])]),t._v(" "),e("p",[t._v("理解浏览器和http协议中控制缓存的字段对我们日后进行性能优化起到很关键的作用。")])])}),[],!1,null,null,null);a.default=_.exports}}]);