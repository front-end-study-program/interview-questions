# XSS 跨站脚本攻击

> 跨站脚本攻击（cross site scripting），简称 XSS 攻击。其原理就是攻击者将恶意代码嵌入到用户访问的网页中。当用户访问时，浏览器是无法分辨哪些代码是可信的，导致恶意代码执行。发起恶意攻击如劫持用户会话、插入恶意内容、重定向用户、获取用户信息发起恶意请求等手段。

## 攻击方式

### 一. 反射型 XSS 攻击 （非持久型 XSS）

> 反射型 XSS 攻击，其原理就是攻击者创建特殊的 URL 链接，诱导用户访问。当用户访问后会将其 URL 中恶意参数拼接到网页返回的 html 内容当中，达到攻击的手段。反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。

#### 模拟场景

> [反射型 XSS 操场](https://github.com/front-end-study-program/interview-questions/tree/main/playground/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/XSS/%E5%8F%8D%E5%B0%84%E5%9E%8BXSS)演示了这种攻击手段

![反射型XSS](https://raw.githubusercontent.com/front-end-study-program/interview-questions/main/playground/%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8/XSS/%E5%8F%8D%E5%B0%84%E5%9E%8BXSS/public/xss.png)

1. 攻击者给出恶意 URL 链接
2. 用户登录拿到用户信息
3. 用户访问恶意链接
4. 攻击者携带用户信息进行攻击

### 二.存储型 XSS 攻击

> 存储型 XSS 攻击其原理就是通过各种途径将恶意代码存储到数据库中，用户访问网页时就会加载并执行恶意代码。这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等

模拟场景

> 存储型 XSS 操场演示了这种攻击手段

1. 攻击者通过各种途径将恶意代码存入数据库中
2. 用户访问页面时从数据库中获取到恶意代码并解析执行

## 防御手段

1. 针对用户 cookie 信息可以通过服务端设置 httpOnly 来阻止浏览器脚本访问 cookie
2. 服务端和客户端针对数据做一个转义处理
3. csp
