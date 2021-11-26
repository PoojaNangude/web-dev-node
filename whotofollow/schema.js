const mongoose = require('mongoose');
const schema = mongoose.Schema({
    avatarIcon: String,
    userName: String,
    handle: String
}, {collection: "whotofollow"});
module.exports = schema;
