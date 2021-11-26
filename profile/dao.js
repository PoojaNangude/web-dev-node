const model = require('./model');

const getProfile = () => model.find();

const updateProfile = (id, profile) =>
    model.updateOne({_id: id},
        {$set: profile});

module.exports = {
    getProfile, updateProfile
};
