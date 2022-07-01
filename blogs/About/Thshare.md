---
title: 使用axios调用Tushare大数据社区接口数据
date: 2022-01-31
tags:
 - axios
sidebar: 'auto'
categories:
 - 前端相关
---

个人社区ID：482010
## 前言

​		因为毕业设计要使用一些股票的数据,所以选择了Tushare大数据社区的接口,社区里对股票的数据还是很齐全的,让我们一起来看一下我是怎么在vue项目里使用axios对社区的接口进行调用来获取股票信息的.欢迎大家批评指正.

### 什么是axios

引用文档中的话:

> Axios 是一个基于 *[promise](https://javascript.info/promise-basics)* 网络请求库，作用于[`node.js`](https://nodejs.org/) 和浏览器中。 它是 *[isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js `http` 模块, 而在客户端 (浏览端) 则使用XMLHttpRequests。

### axios文档

[Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js | Axios 中文文档 | Axios 中文网 (axios-http.cn)](https://www.axios-http.cn/)

## axios调用接口

以社区中的指数基本信息为例:

![](https://gitee.com/ekzodia_lty/blog-image/raw/master/img/20220131173333.png)

根据axios文档中的post请求示例,我们这样写

```js
axios
    .post("http://api.tushare.pro", {
        api_name: "stock_basic",//接口名称
        token: "xxxxxxxxxxx",//社区中自己的token
    	//参数的位置(如果有)	
    	//params:{
        //   xxx:xxx
       	//}
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```

执行这段代码,在控制台查看数据,我们就可以得到:

![](https://.com/ekzodia_lty/blog-image/raw/master/img/20220131173637.png)

这样使用axios进行了一次简单的请求.

## 简单封装axios之后调用接口

因为要调用不止一个接口,所以在每次请求的时候,比如基础网址就要重复写很多次,所以我们进行一些简单的封装.

![](https://gitee.com/ekzodia_lty/blog-image/raw/master/img/20220131174807.png)

创建一个request文件,下面分别写了两个js文件.

request.js负责写一些基础配置和请求拦截相应拦截.

```js
import axios from 'axios'

let instance = axios.create({
    baseURL: "http://api.tushare.pro",
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}

});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//请求拦截
instance.interceptors.request.use(config => {
    return config;
}, err => {
    console.log('请求失败');
    return Promise.reject(err);
})
// 响应拦截
instance.interceptors.response.use(config => {
    return config;
}, err => {
    console.log('响应失败');
    return Promise.reject(err);
})
// 整体导出
export default instance;
```



api.js导出要使用的api

```js
// 将request.js整体导入
import request from './request'

// 按需导出每个请求，也就是按需导出每个api
// 请求首页数据
export const GetHomeAPI = (params) => request.get('/',  {params});

export const PostHomeAPI = (params) => request.post('/', params);

export const PostDaily = (params) => request.post('/', params);
```



在项目中请求接口,调用请求的方法,即可得到相同的数据.

```js
PostDaily({
    token: "2aa6079a53c04ee96881c2a69ad751d938b3e8828569cea247615cdc",
    api_name: "index_basic",
})
    .then((res) => {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });
```

> 欢迎批评指正




