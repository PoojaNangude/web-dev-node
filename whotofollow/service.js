const dao = require('./dao');

module.exports = (app) => {

    const findWhoToFollowList = (req, res) =>
        dao.findWhoToFollowList()
            .then(tweets => res.json(tweets));

    app.get("/rest/whotofollow", findWhoToFollowList);
}
