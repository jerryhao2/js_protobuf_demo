let person = require('./person.json');

let protobufRoot = require('protobufjs').Root;

let root = protobufRoot.fromJSON(person);

let loveGame = root.lookupType('user.LoveGame');
let userInfo = root.lookupType('user.UserInfo');

//序列化
let infoData = {};
let game = {};
game.name = 'lol';
game.type = 'MOBA';
infoData.game = [game];
infoData.name = 'ezLeo';
infoData.age = 24;
infoData.sex = 0;
let infoEncodeMessage = userInfo.encode(userInfo.create(infoData)).finish();

//反序列化
let infoUnSerialized = userInfo.decode(infoEncodeMessage);
console.log("unserialized info message:");
console.log(infoUnSerialized);