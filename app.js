const config = require("./listeners/config") // 配置文件
const token = config.token
const { Wechaty } = require("wechaty")

const bot = new Wechaty({
    puppet: 'wechaty-puppet-hostie',
    puppetOptions: {
        token,
    }
});

const onScan = require("./listeners/onScan")
const onLogin = require("./listeners/onLogin")
const onRoomJoin = require("./listeners/onRoomJoin")
const onMessage = require("./listeners/onMessage")
const onFriendShip = require("./listeners/onFriendShip")
bot.on("scan", onScan) // 机器人需要扫描二维码时监听
    .on("login", onLogin) // 加入登录监听
    .on("room-join", onRoomJoin) // 加入房间监听
    .on("message", onMessage(bot)) // 消息监听
    .on("friendship", onFriendShip) // 好友添加监听
    .start()
    .then(() => console.log("开始登陆微信"))
    .catch(e => console.error(e));

module.exports = bot;
