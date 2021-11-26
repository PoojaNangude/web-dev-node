const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('WhoToFollowModel', schema);
module.exports = model;