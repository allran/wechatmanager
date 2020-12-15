[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/chatie/wechaty)
[![Wechaty开源激励计划](https://img.shields.io/badge/Wechaty-开源激励计划-green.svg)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

#### 前言
这是一个介绍wechaty实际使用案例的项目，功能正在不断完善中...

#### 安装
请按照如下步骤安装使用：
```bash
git clone https://github.com/allran/wechatmanager.git
cd wechatmanager
npm install
npm start
```

### 目录结构
- `config`文件夹存放公共配置文件以及`superagent`请求相关配置
- `imgs`存放相关图片
- `listeners`存放机器人初始化后一系列事件处理(分模块)
  - `onFriendship.js` 处理好友请求
  - `onLogin.js` 处理登录
  - `onMessage.js` 处理用户消息、群消息
  - `onScan.js` 处理登录二维码
- `schedule` 对定时任务`node-schedule`库进行了封装
- `superagent` 存放所有的数据请求、接口封装都在此
- `utils` 公用方法的封装
- `app.js` 入口文件

### 如何使用

1. 修改`config`配置
   打开`listeners/config.js` 文件，将里面的配置改为自己的。
2. 修改天行接口配置
   天行 api 官网 ：[https://tianapi.com/](https://tianapi.com/)  
    注册成功后，申请以下接口：

   - [每日英语一句话](https://www.tianapi.com/apiview/62)
   - [神回复](https://www.tianapi.com/apiview/39)

   注册后请打开`superagent/index.js`，将顶部`APIKEY`改为自己天行 api 的`key`即可

其他免费接口可随意申请，不想用天行的接口可以删掉对应的关键字。

然后就可以运行了

终端会出现一个二维码，扫码登录即可。

注意：有时会出现使用个人微信无法登录的情况，请确认wechaty的token是否支持个人微信。
