const QrcodeTerminal = require("qrcode-terminal");
const { ScanStatus } = require("wechaty-puppet");

//扫码登录
module.exports = function onScan(qrcode, status) {
    if (status === ScanStatus.Waiting) {
        QrcodeTerminal.generate(qrcode, {
            small: true
        })
    }
}
