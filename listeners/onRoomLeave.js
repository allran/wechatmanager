//离开群聊 - 机器人主动踢出才会触发此事件
module.exports = async function onRoomLeave(room, leaverList) {
    const nameList = leaverList.map(c => c.name()).join(",");
    console.log(`Room ${room.topic()} lost member ${nameList}`);
}
