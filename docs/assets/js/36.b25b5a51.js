(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{576:function(t,a,s){"use strict";s.r(a);var e=s(12),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"说说你对-spa-单页面的理解-它的优缺点分别是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说说你对-spa-单页面的理解-它的优缺点分别是什么"}},[t._v("#")]),t._v(" 说说你对 SPA 单页面的理解，它的优缺点分别是什么？")]),t._v(" "),s("p",[t._v("​\t\tSPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是"),s("strong",[t._v("利用路由机制实现 HTML 内容的变换")]),t._v("，UI 与用户的交互，避免页面的重新加载。")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；")]),t._v(" "),s("li",[t._v("基于上面一点，SPA 相对对服务器压力小；")]),t._v(" "),s("li",[t._v("前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；")]),t._v(" "),s("li",[t._v("前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；")]),t._v(" "),s("li",[t._v("SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。")])]),t._v(" "),s("h2",{attrs:{id:"vue的优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的优缺点"}},[t._v("#")]),t._v(" Vue的优缺点")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("渐进式框架，轻便易用，学习成本低；")])]),t._v(" "),s("li",[s("p",[t._v("双向绑定；")])]),t._v(" "),s("li",[s("p",[t._v("组件化开发")])]),t._v(" "),s("li",[s("p",[t._v("通过指令简化了DOM操作；")])]),t._v(" "),s("li",[s("p",[t._v("虚拟DOM，利用diff算法提高DOM更新渲染的效率；")])])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("不支持低版本IE；")])]),t._v(" "),s("li",[s("p",[t._v("比较适合开发单页面应用，不适合SEO；")])])]),t._v(" "),s("h2",{attrs:{id:"vue和react的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue和react的区别"}},[t._v("#")]),t._v(" Vue和React的区别")]),t._v(" "),s("ul",[s("li",[t._v("Vue是渐进式；")]),t._v(" "),s("li",[t._v("语法差别比较大，vue更像是写原生一样，style，script，template分开写，React写在JS中，支持JSX语法；")]),t._v(" "),s("li",[t._v("vue有keep-alive，React实现比较麻烦；")]),t._v(" "),s("li",[t._v("React16.8支持hooks，Vue2没有hopoks，Vue3有hooks（Composition API）；")]),t._v(" "),s("li",[t._v("Vue会根据监听数据的变化更新UI，数据响应式；")]),t._v(" "),s("li",[t._v("社区文化不太一样，Vue生态Vuex，Vue-Router，axios有一套生态，React只有本身和脚手架，其他生态自选；")])]),t._v(" "),s("p",[t._v("Vue 的表单可以使用 "),s("code",[t._v("v-model")]),t._v(" 支持双向绑定，相比于 React 来说开发上更加方便，当然了 "),s("code",[t._v("v-model")]),t._v(" 其实就是个语法糖，本质上和 React 写表单的方式没什么区别。")]),t._v(" "),s("p",[t._v("改变数据方式不同，Vue 修改状态相比来说要简单许多，React 需要使用 "),s("code",[t._v("setState")]),t._v(" 来改变状态，并且使用这个 API 也有一些坑点。并且 Vue 的底层使用了依赖追踪，页面更新渲染已经是最优的了，但是 React 还是需要用户手动去优化这方面的问题。")]),t._v(" "),s("p",[t._v("React 需要使用 JSX，有一定的上手成本，并且需要一整套的工具链支持，但是完全可以通过 JS 来控制页面，更加的灵活。Vue 使用了模板语法，相比于 JSX 来说没有那么灵活，但是完全可以脱离工具链，通过直接编写 "),s("code",[t._v("render")]),t._v(" 函数就能在浏览器中运行。")]),t._v(" "),s("p",[t._v("在生态上来说，两者其实没多大的差距，当然 React 的用户是远远高于 Vue 的。")]),t._v(" "),s("p",[t._v("在上手成本上来说，Vue 一开始的定位就是尽可能的降低前端开发的门槛，然而 React 更多的是去改变用户去接受它的概念和思想，相较于 Vue 来说上手成本略高。")]),t._v(" "),s("h2",{attrs:{id:"前端路由-hash和历史模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端路由-hash和历史模式"}},[t._v("#")]),t._v(" 前端路由：hash和历史模式")]),t._v(" "),s("h3",{attrs:{id:"hash-默认"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash-默认"}},[t._v("#")]),t._v(" hash（默认）")]),t._v(" "),s("ul",[s("li",[t._v("hash变化会触发网页跳转，即浏览器的前进和后退。")]),t._v(" "),s("li",[t._v("hash变化不会刷新页面，SPA必须的特点；")]),t._v(" "),s("li",[t._v("hash可以改变 "),s("code",[t._v("url")]),t._v(" ，但是不会触发页面重新加载（hash的改变是记录在 "),s("code",[t._v("window.history")]),t._v(" 中），即不会刷新页面。也就是说，所有页面的跳转都是在客户端进行操作。因此，这并不算是一次 "),s("code",[t._v("http")]),t._v(" 请求，所以这种模式不利于 "),s("code",[t._v("SEO")]),t._v(" 优化。"),s("code",[t._v("hash")]),t._v(" 只能修改 "),s("code",[t._v("#")]),t._v(" 后面的部分，所以只能跳转到与当前 "),s("code",[t._v("url")]),t._v(" 同文档的 "),s("code",[t._v("url")]),t._v(" 。")]),t._v(" "),s("li",[t._v("hash通过 "),s("code",[t._v("window.onhashchange")]),t._v(" 的方式，来监听 "),s("code",[t._v("hash")]),t._v(" 的改变，借此实现无刷新跳转的功能。")]),t._v(" "),s("li",[t._v("hash永远不会提交到 "),s("code",[t._v("server")]),t._v(" 端。")])]),t._v(" "),s("h3",{attrs:{id:"history"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[t._v("#")]),t._v(" history")]),t._v(" "),s("p",[s("code",[t._v("history API")]),t._v(" 是 "),s("code",[t._v("H5")]),t._v(" 提供的新特性，允许开发者直接更改前端路由，即更新浏览器 "),s("code",[t._v("URL")]),t._v(" 地址而不重新发起请求。通过 "),s("code",[t._v("history.pushState")]),t._v(" 、 "),s("code",[t._v("window.onpopstate")]),t._v(" 来实现无刷新跳转的功能。")]),t._v(" "),s("h3",{attrs:{id:"区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),s("p",[t._v("hash 模式相比于 history 模式的优点：")]),t._v(" "),s("ul",[s("li",[t._v("兼容性更好，可以兼容到IE8")]),t._v(" "),s("li",[t._v("无需服务端配合处理非单页的url地址")])]),t._v(" "),s("p",[t._v("hash 模式相比于 history 模式的缺点：")]),t._v(" "),s("ul",[s("li",[t._v("看起来更丑。")]),t._v(" "),s("li",[t._v("会导致锚点功能失效。")]),t._v(" "),s("li",[t._v("相同 hash 值不会触发动作将记录加入到历史栈中，而 pushState 则可以。")])]),t._v(" "),s("h2",{attrs:{id:"mvc和mvvm的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvc和mvvm的区别"}},[t._v("#")]),t._v(" MVC和MVVM的区别")]),t._v(" "),s("p",[t._v("MVVM数据驱动视图")]),t._v(" "),s("p",[t._v("​\t\t整体看来，MVVM比MVC精简很多，不仅简化了业务与界面的依赖，还解决了数据频繁更新的问题，不用再用选择器操作DOM元素。因为在MVVM中，View不知道Model的存在，Model和ViewModel也观察不到View，这种低耦合模式提高代码的可重用性。")]),t._v(" "),s("p",[s("strong",[t._v("MVVM与MVC最大的区别就是")]),t._v("：")]),t._v(" "),s("p",[t._v("​\t\t它实现了View和Model的自动同步，也就是当Model的属性改变时，我们不用再自己手动操作Dom元素，来改变View的显示，而是改变属性后该属性对应View层显示会自动改变。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"v-if和v-show的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if和v-show的区别"}},[t._v("#")]),t._v(" V-if和V-show的区别")]),t._v(" "),s("p",[t._v("​\t\tv-if显示隐藏是将dom元素整个添加或删除，而v-show不管初始条件是什么，元素总是会被渲染，隐藏则是为该元素添加css--display:none，dom元素还在。")]),t._v(" "),s("p",[t._v("​\t\tv-if 适⽤于在运⾏时很少改变条件，不需要频繁切换条件的场景；v-show则适⽤于需要⾮常频繁切换条件的场景。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"v-if-与-v-for-为什么不建议一起使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if-与-v-for-为什么不建议一起使用"}},[t._v("#")]),t._v(" v-if 与 v-for 为什么不建议一起使用")]),t._v(" "),s("p",[t._v("v-for 和 v-if 不要在同一个标签中使用,因为解析时"),s("strong",[t._v("先解析 v-for 再解析 v-if")]),t._v("，会带来性能方面的浪费。（每次渲染都会先循环再进行条件判断）")]),t._v(" "),s("h2",{attrs:{id:"v-for-为什么要加-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-for-为什么要加-key"}},[t._v("#")]),t._v(" v-for 为什么要加 key")]),t._v(" "),s("ul",[s("li",[t._v("必须使用key，而且不能是index和random；")]),t._v(" "),s("li",[t._v("diff算法中通过tag和key来判断是否是sameNode；")]),t._v(" "),s("li",[t._v("减少渲染次数，提升渲染性能；")])]),t._v(" "),s("h2",{attrs:{id:"v-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-model"}},[t._v("#")]),t._v(" v-model")]),t._v(" "),s("p",[t._v("v-model本质上是一种语法糖，由v-bind和v-on两种指令组成。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 在大部分情况下，以下两种写法是等价的 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo = $event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"组件中的data为什么是函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件中的data为什么是函数"}},[t._v("#")]),t._v(" 组件中的data为什么是函数")]),t._v(" "),s("p",[t._v("组件复用时所有组件实例都会共享 "),s("code",[t._v("data")]),t._v("，如果 "),s("code",[t._v("data")]),t._v(" 是对象的话，就会造成一个组件修改 "),s("code",[t._v("data")]),t._v(" 以后会影响到其他所有组件，所以需要将 "),s("code",[t._v("data")]),t._v(" 写成函数，每次用到就调用一次函数获得新的数据。")]),t._v(" "),s("p",[t._v("当我们使用 "),s("code",[t._v("new Vue()")]),t._v(" 的方式的时候，无论我们将 "),s("code",[t._v("data")]),t._v(" 设置为对象还是函数都是可以的，因为 "),s("code",[t._v("new Vue()")]),t._v(" 的方式是生成一个根组件，该组件不会复用，也就不存在共享 "),s("code",[t._v("data")]),t._v(" 的情况了。")]),t._v(" "),s("h2",{attrs:{id:"vue-组件通讯方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件通讯方式"}},[t._v("#")]),t._v(" Vue 组件通讯方式")]),t._v(" "),s("ol",[s("li",[t._v("props 和$emit 父组件向子组件传递数据是通过 props 传递的（单向数据流），子组件传递数据给父组件是通过$emit 触发事件来做到的")]),t._v(" "),s("li",[t._v("$parent,$children（vue3中建议用$refs，不用$children） 获取当前组件的父组件和当前组件的子组件")]),t._v(" "),s("li",[t._v("$refs 获取组件实例")]),t._v(" "),s("li",[t._v("eventBus 事件总线，兄弟组件数据传递，使用$emit/$on")]),t._v(" "),s("li",[t._v("vuex 状态管理")]),t._v(" "),s("li",[t._v("provide/inject多层级组件通讯")])]),t._v(" "),s("h2",{attrs:{id:"vuex的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex的属性"}},[t._v("#")]),t._v(" Vuex的属性")]),t._v(" "),s("ul",[s("li",[t._v("State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。")]),t._v(" "),s("li",[t._v("Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。")]),t._v(" "),s("li",[t._v("Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。")]),t._v(" "),s("li",[t._v("Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作,可包含多个Mutation。")]),t._v(" "),s("li",[t._v("Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"vuex-页面刷新数据丢失怎么解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-页面刷新数据丢失怎么解决"}},[t._v("#")]),t._v(" Vuex 页面刷新数据丢失怎么解决")]),t._v(" "),s("p",[t._v("​\t\t需要做 vuex 数据持久化 一般使用本地存储的方案来保存数据 可以自己设计存储方案 也可以使用第三方插件")]),t._v(" "),s("p",[t._v("推荐使用 vuex-persist 插件，它就是为 Vuex 持久化存储而生的一个插件。不需要你手动存取 storage ，而是直接将状态保存至 cookie 或者 localStorage 中")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"computed-和-watch-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch-的区别"}},[t._v("#")]),t._v(" computed 和 watch 的区别？")]),t._v(" "),s("p",[s("strong",[t._v("computed：")]),t._v(" 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed  的值，有缓存，缓存的是计算后的值。")]),t._v(" "),s("p",[s("strong",[t._v("watch：")]),t._v(" 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；")]),t._v(" "),s("p",[s("strong",[t._v("运用场景：")])]),t._v(" "),s("ul",[s("li",[t._v("当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；")]),t._v(" "),s("li",[t._v("当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。")])]),t._v(" "),s("h2",{attrs:{id:"vue生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue生命周期"}},[t._v("#")]),t._v(" vue生命周期")]),t._v(" "),s("p",[s("strong",[t._v("beforeCreate")]),t._v(" 在实例初始化之后，执行时组件实例还未创建，数据观测(data observer) 和 event/watcher 事件配置之前被调用。在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问,"),s("strong",[t._v("通常用于插件开发中执行一些初始化任务。")])]),t._v(" "),s("p",[s("strong",[t._v("created")]),t._v(" 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。这里没有$el,如果非要想与 Dom 进行交互，可以通过 vm.$nextTick 来访问 Dom。"),s("strong",[t._v("通常用于异步获取数据")])]),t._v(" "),s("p",[s("strong",[t._v("beforeMount")]),t._v(" 未执行渲染、更新、dom未创建。")]),t._v(" "),s("p",[s("strong",[t._v("mounted")]),t._v(" 在挂载完成后发生，在当前阶段，"),s("strong",[t._v("真实的 Dom 挂载完毕，数据完成双向绑定，可以访问到 Dom 节点。")])]),t._v(" "),s("p",[s("strong",[t._v("beforeUpdate")]),t._v(" 数据更新时调用，发生在虚拟 DOM 重新渲染之前。可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程，"),s("strong",[t._v("可用于获取更新前的各种状态")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("updated")]),t._v(" 发生在更新完成之后，当前阶段组件 Dom 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新，该钩子在服务器端渲染期间不被调用。"),s("strong",[t._v("更新后，所有状态已经是最新。")])]),t._v(" "),s("p",[s("strong",[t._v("beforeDestroy")]),t._v(" 实例销毁之前调用。在这一步，实例仍然完全可用。"),s("strong",[t._v("我们可以在这时进行善后收尾工作，比如清除计时器。")])]),t._v(" "),s("p",[s("strong",[t._v("destroyed")]),t._v(" Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。")]),t._v(" "),s("h2",{attrs:{id:"vue什么时候操作dom比较合适"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue什么时候操作dom比较合适"}},[t._v("#")]),t._v(" Vue什么时候操作DOM比较合适")]),t._v(" "),s("p",[t._v("mounted和updated都不能保证子组件全部挂载完成，使用$nextTick渲染DOM。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//仅在整个视图都被渲染之后才会运行的代码")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"在哪个生命周期内调用异步请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在哪个生命周期内调用异步请求"}},[t._v("#")]),t._v(" 在哪个生命周期内调用异步请求？")]),t._v(" "),s("p",[s("strong",[t._v("可以在钩子函数 created、beforeMount、mounted")]),t._v(" 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：")]),t._v(" "),s("ul",[s("li",[t._v("能更快获取到服务端数据，减少页面 loading 时间；")]),t._v(" "),s("li",[t._v("ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；")])]),t._v(" "),s("h2",{attrs:{id:"vue3-composition-api生命周期有何区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue3-composition-api生命周期有何区别"}},[t._v("#")]),t._v(" Vue3 Composition API生命周期有何区别")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("用setup代替了beforeCreate和created；")])]),t._v(" "),s("li",[s("p",[t._v("使用Hooks函数的形式，如mounted改为onMounted()；")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ekzodia_lty/blog-image/raw/master/img/20220313231108.png",alt:""}})])])]),t._v(" "),s("h2",{attrs:{id:"ref的用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ref的用法"}},[t._v("#")]),t._v(" $ref的用法")]),t._v(" "),s("p",[t._v("1、ref 加在普通的元素上，用this.$refs.（ref值） 获取到的是dom元素")]),t._v(" "),s("p",[t._v("2、ref 加在子组件上，用this.$refs.（ref值） 获取到的是"),s("strong",[t._v("组件实例，可以使用组件的所有方法")]),t._v("。在使用方法的时候直接this.$refs.（ref值）.方法（） 就可以使用了。")]),t._v(" "),s("p",[t._v("3、如何利用 v-for 和 ref 获取一组数组或者dom 节点")]),t._v(" "),s("p",[t._v("用法一：")]),t._v(" "),s("p",[t._v("获取DOM元素，一般用document.querySelector获取这个dom节点，然后在获取input的值")]),t._v(" "),s("p",[t._v("但是用ref绑定之后，就不需要在获取dom节点了，直接在上面的input上绑定input1，然后$refs里面调用即可")]),t._v(" "),s("p",[t._v("this.$refs.input1  这样可以减少获取DOM节点的消耗。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v(" ref"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button @click"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("添加"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//this.$refs.input1  减少获取dom节点的消耗")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"996"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("h2",{attrs:{id:"nexttick的用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nexttick的用法"}},[t._v("#")]),t._v(" $nextTick的用法")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("data改变后，DOM不会立刻渲染；")])]),t._v(" "),s("li",[s("p",[t._v("$nextTick会在DOM渲染之后被处罚，以获取最新的DOM节点；")])])]),t._v(" "),s("p",[s("strong",[t._v("使用"),s("code",[t._v("Vue.nextTick()")]),t._v("是为了可以获取更新后的DOM")]),t._v("；"),s("br"),t._v("\n触发时机：在同一事件循环中的数据变化后，DOM完成更新，立即执行"),s("code",[t._v("Vue.nextTick()")]),t._v("的回调。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"vue的双向绑定原理-响应式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的双向绑定原理-响应式"}},[t._v("#")]),t._v(" Vue的双向绑定原理（响应式）")]),t._v(" "),s("p",[t._v("vue数据双向绑定是通过数据劫持结合发布-订阅模式的方式来实现的。")]),t._v(" "),s("p",[t._v("​\t\t"),s("strong",[t._v("vue是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发响应的监听回调。")])]),t._v(" "),s("p",[t._v("​\t   "),s("strong",[t._v("发布者和订阅者是互相不知道对方的存在的，发布者只需要把消息发送到订阅器里面，订阅者只管接受自己需要订阅的内容")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//obj要在其上定义属性的对象。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//prop要定义或修改的属性的名称。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//descriptor将被定义或修改的属性描述符。")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[s("strong",[t._v("Object.defineProperty()的缺点：")])]),t._v(" "),s("ul",[s("li",[t._v("深度监听，需要递归到底，一次性的计算量大；")]),t._v(" "),s("li",[t._v("无法监听新增/删除属性（Vue.set/Vue.delete）；")]),t._v(" "),s("li",[t._v("无法对数组进行监听，需要重新定义数组原型；")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"keep-alive-组件有什么作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive-组件有什么作用"}},[t._v("#")]),t._v(" keep-alive 组件有什么作用")]),t._v(" "),s("p",[t._v("如果你需要在组件切换的时候，保存一些组件的状态防止多次渲染，就可以使用 "),s("code",[t._v("keep-alive")]),t._v(" 组件包裹需要保存的组件。")]),t._v(" "),s("p",[t._v("对于 "),s("code",[t._v("keep-alive")]),t._v(" 组件来说，它拥有两个独有的生命周期钩子函数，分别为 "),s("code",[t._v("activated")]),t._v(" 和 "),s("code",[t._v("deactivated")]),t._v(" 。用 "),s("code",[t._v("keep-alive")]),t._v(" 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 "),s("code",[t._v("deactivated")]),t._v(" 钩子函数，命中缓存渲染后会执行 "),s("code",[t._v("actived")]),t._v(" 钩子函数。")]),t._v(" "),s("h2",{attrs:{id:"mixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixin"}},[t._v("#")]),t._v(" mixin")]),t._v(" "),s("ul",[s("li",[t._v("多个组件有相同的逻辑，抽离出来；")]),t._v(" "),s("li",[t._v("mixin并不是完美的解决方案，会有一些问题；")]),t._v(" "),s("li",[t._v("Vue3提出的CompositionAPI旨在解决这个问题；")])]),t._v(" "),s("p",[s("strong",[t._v("缺点：")])]),t._v(" "),s("ul",[s("li",[t._v("变量来源不明确，不利于阅读；")]),t._v(" "),s("li",[t._v("多mixin可能会造成命名冲突；")]),t._v(" "),s("li",[t._v("mixin和组件可能出现多对多的关系，复杂度较高；")])]),t._v(" "),s("h2",{attrs:{id:"mixin-和-mixins-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixin-和-mixins-区别"}},[t._v("#")]),t._v(" mixin 和 mixins 区别")]),t._v(" "),s("p",[s("code",[t._v("mixin")]),t._v(" 用于全局混入，会影响到每个组件实例，通常插件都是这样做初始化的。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...逻辑")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这种方式会影响到每个组件的 beforeCreate 钩子函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("虽然文档不建议我们在应用中直接使用 "),s("code",[t._v("mixin")]),t._v("，但是如果不滥用的话也是很有帮助的，比如可以全局混入封装好的 "),s("code",[t._v("ajax")]),t._v(" 或者一些工具函数等等。")]),t._v(" "),s("p",[s("code",[t._v("mixins")]),t._v(" 应该是我们最常使用的扩展组件的方式了。如果多个组件中有相同的业务逻辑，就可以将这些逻辑剥离出来，通过 "),s("code",[t._v("mixins")]),t._v(" 混入代码，比如上拉下拉加载数据这种逻辑等等。")]),t._v(" "),s("p",[t._v("另外需要注意的是 "),s("code",[t._v("mixins")]),t._v(" 混入的钩子函数会先于组件内的钩子函数执行，并且在遇到同名选项的时候也会有选择性的进行合并。")]),t._v(" "),s("h2",{attrs:{id:"vue初次渲染的过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue初次渲染的过程"}},[t._v("#")]),t._v(" Vue初次渲染的过程")]),t._v(" "),s("ul",[s("li",[t._v("解析模板为render函数（或在开发环境已经完成，vue-loader）；")]),t._v(" "),s("li",[t._v("触发响应式，监听data属性getter、setter；")]),t._v(" "),s("li",[t._v("执行render函数，生成vnode，patch(elem，vnode)；")])]),t._v(" "),s("h2",{attrs:{id:"更新过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新过程"}},[t._v("#")]),t._v(" 更新过程")]),t._v(" "),s("ul",[s("li",[t._v("修改data，触发setter(此前在getter中已经被监听)；")]),t._v(" "),s("li",[t._v("重新执行render函数，生成newVnode；")]),t._v(" "),s("li",[t._v("patch(vnode，newVnode)，使用diff算法算出最小差异；")])]),t._v(" "),s("h2",{attrs:{id:"模板渲染成真实dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板渲染成真实dom"}},[t._v("#")]),t._v(" 模板渲染成真实DOM")]),t._v(" "),s("p",[t._v("模板->render函数->vnode->真正的DOM")]),t._v(" "),s("h2",{attrs:{id:"vue编译过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue编译过程"}},[t._v("#")]),t._v(" Vue编译过程")]),t._v(" "),s("p",[t._v("首先直接把模板丢到浏览器中肯定是不能运行的，模板只是为了方便开发者进行开发。Vue 会通过编译器将模板通过几个阶段最终编译为 "),s("code",[t._v("render")]),t._v(" 函数，然后通过执行 "),s("code",[t._v("render")]),t._v(" 函数生成 虚拟 DOM 最终映射为真实 DOM。")]),t._v(" "),s("p",[t._v("接下来我们就来学习这个编译的过程，了解这个过程中大概发生了什么事情。这个过程其中又分为三个阶段，分别为：")]),t._v(" "),s("ol",[s("li",[t._v("将模板解析为 AST")]),t._v(" "),s("li",[t._v("优化 AST")]),t._v(" "),s("li",[t._v("将 AST 转换为 "),s("code",[t._v("render")]),t._v(" 函数")])]),t._v(" "),s("p",[t._v("在第一个阶段中，最主要的事情还是通过各种各样的正则表达式去匹配模板中的内容，然后将内容提取出来做各种逻辑操作，接下来会生成一个最基本的 AST 对象")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{\n    // 类型\n    type: 1,\n    // 标签\n    tag,\n    // 属性列表\n    attrsList: attrs,\n    // 属性映射\n    attrsMap: makeAttrsMap(attrs),\n    // 父节点\n    parent,\n    // 子节点\n    children: []\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("p",[t._v("然后会根据这个最基本的 AST 对象中的属性，进一步扩展 AST。")]),t._v(" "),s("p",[t._v("当然在这一阶段中，还会进行其他的一些判断逻辑。比如说对比前后开闭标签是否一致，判断根组件是否只存在一个，判断是否符合 HTML5 "),s("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FGuide%2FHTML%2FContent_categories",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content Model"),s("OutboundLink")],1),t._v(" 规范等等问题。")]),t._v(" "),s("p",[t._v("接下来就是优化 AST 的阶段。在当前版本下，Vue 进行的优化内容其实还是不多的。只是对节点进行了静态内容提取，也就是将永远不会变动的节点提取了出来，实现复用 Virtual DOM，跳过对比算法的功能。在下一个大版本中，Vue 会在优化 AST 的阶段继续发力，实现更多的优化功能，尽可能的在编译阶段压榨更多的性能，比如说提取静态的属性等等优化行为。")]),t._v(" "),s("p",[t._v("最后一个阶段就是通过 AST 生成 "),s("code",[t._v("render")]),t._v(" 函数了。其实这一阶段虽然分支有很多，但是最主要的目的就是遍历整个 AST，根据不同的条件生成不同的代码罢了。")]),t._v(" "),s("h2",{attrs:{id:"虚拟-dom-实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-实现原理"}},[t._v("#")]),t._v(" 虚拟 DOM 实现原理？")]),t._v(" "),s("p",[t._v("原生的DOM操作非常耗时，而JS操作是很快的，所以vdom就是用JS模拟DOM结构(vnode)来进行DOM操作；")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ekzodia_lty/blog-image/raw/master/img/20220322151059.png",alt:""}})]),t._v(" "),s("p",[t._v("虚拟 DOM 的实现原理主要包括以下 3 部分：")]),t._v(" "),s("ul",[s("li",[t._v("用 JavaScript 对象模拟真实 DOM 树，操作DOM；")]),t._v(" "),s("li",[t._v("通过diff算法比较新旧vnode的最小变化，得出最小的更新范围。")]),t._v(" "),s("li",[t._v("使用pach函数、patchVnode函数、updateChildren函数将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。")])]),t._v(" "),s("h2",{attrs:{id:"diff算法的优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#diff算法的优化"}},[t._v("#")]),t._v(" diff算法的优化：")]),t._v(" "),s("p",[t._v("从原始的n的三次方优化到O(n)")]),t._v(" "),s("ul",[s("li",[t._v("只比较同一层级，不跨层比较；")]),t._v(" "),s("li",[t._v("标签名不同，直接删除，不继续深度比较；")]),t._v(" "),s("li",[t._v("标签名相同，key相同，就认为是相同节点，不继续深度比较。（v-for加key的原因）")])]),t._v(" "),s("h2",{attrs:{id:"vue如何监听数组变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue如何监听数组变化"}},[t._v("#")]),t._v(" Vue如何监听数组变化")]),t._v(" "),s("ul",[s("li",[t._v("Object.defineProperty不能监听数组变化；")]),t._v(" "),s("li",[t._v("重新定义原型，重写push、pop等方法，实现监听；")]),t._v(" "),s("li",[t._v("Proxy可以原生支持监听数组变化；")])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"你都做过哪些-vue-的性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你都做过哪些-vue-的性能优化"}},[t._v("#")]),t._v(" 你都做过哪些 Vue 的性能优化")]),t._v(" "),s("ul",[s("li",[t._v("对象层级不要过深，否则性能就会差")]),t._v(" "),s("li",[t._v("不需要响应式的数据不要放到 data 中（可以用 Object.freeze() 冻结数据）")]),t._v(" "),s("li",[t._v("v-if 和 v-show 区分使用场景")]),t._v(" "),s("li",[t._v("computed 和 watch 区分使用场景")]),t._v(" "),s("li",[t._v("v-for 遍历必须加 key，key 最好是 id 值，且避免同时使用 v-if")]),t._v(" "),s("li",[t._v("大数据列表和表格性能优化-虚拟列表/虚拟表格")]),t._v(" "),s("li",[t._v("防止内部泄漏，组件销毁后把全局变量和事件销毁")]),t._v(" "),s("li",[t._v("图片懒加载")]),t._v(" "),s("li",[t._v("路由懒加载")]),t._v(" "),s("li",[t._v("第三方插件的按需引入")]),t._v(" "),s("li",[t._v("适当采用 keep-alive 缓存组件")]),t._v(" "),s("li",[t._v("防抖、节流运用")]),t._v(" "),s("li",[t._v("服务端渲染 SSR or 预渲染")])])])}),[],!1,null,null,null);a.default=v.exports}}]);