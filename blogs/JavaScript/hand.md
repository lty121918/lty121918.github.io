---
title: JS常见手写题
date: 2022-02-28
tags:
 - 手写
sidebar: 'auto'
categories:
 - JavaScript
---

## 手写深拷贝

```js
function deepClone(obj) {
  let result;
  if (typeof obj != "object" || obj === null) {
    return obj;
  };
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      result[k] = deepClone(obj[k]);
    }
  }
  return result;
}
let obj = {
  name: {
    fileds: 'lalal'
  },
  age: 10
}
let newobj = deepClone(obj);
obj.name.fileds = 'qeqwe'
console.log(obj);
console.log(newobj);
```

## 数组去重

### 利用indexOf(includes同理）

```js
function unique(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        }
    }
    console.log(res);
    return res;
}
```

### set与解构赋值去重

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    return [...new Set(arr)]
  //return Array.from(new Set(arr))
}
```

### 相邻元素去重

这种方法首先调用了数组的排序方法sort()，然后根据排序后的结果进行遍历及相邻元素比对，如果相等则跳过改元素，直到遍历结束。

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    arr = arr.sort()
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            res.push(arr[i])
        }
    }
    return res
}
```

### 双循环去重

```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    let res = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        let flag = true
        for (let j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                flag = false;
                break
            }
        }
        if (flag) {
            res.push(arr[i])
        }
    }
    return res
}
```

## 防抖

防止抖动，啥时候停了再执行下一步。

应用场景：一个搜索输入框，输入停止之后，再触发搜索。

```js
function debounce(fn, delay = 200) {
    let timer = 0;

    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = 0
        }, delay);
    }
}
```

## 节流

```js
function throttle(fn, delay = 100) {
  let timer = 0;

  return function () {
    if (timer) return;

    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = 0
    }, delay);
  }
}
```

## 反转字符串

```js
function reverseString(str) {
  var array = [];
  array = str.split('');
  array = array.reverse();
  str = array.join('');
  return str;
}

reverseString("hello");
```



## 手写bind

 ```js
 Function.prototype.bind1=function(){
     //将参数解析为数组
     const args=Array.prototype.slice.call(arguments);
     //获取this（取出数组第一项，数组剩余的就是传递的参数）
     const t=args.shift();
     const self = this//当前函数
     //返回一个函数
     return function(){
         //执行原函数，并返回结果
         return self.apply(t,args);
         }
     }
 ```



