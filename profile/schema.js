const mongoose = require('mongoose');
const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    handle: String,
    profilePicture: String,
    bannerPicture: String,
    bio: String,
    website: String,
    website: String,
    dateOfBirth: String,
    dateJoined: String,
    followingCount: String,
    followersCount: String,
    numberOfTweets: String,
    profileImage: String,
    backgroundImage: String
}, {collection: "profile"});
module.exports = schema;