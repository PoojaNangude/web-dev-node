const model = require('./model');

const findWhoToFollowList = () => model.find();

module.exports = {
    findWhoToFollowList
};
