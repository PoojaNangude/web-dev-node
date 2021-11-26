const dao = require('./dao');

module.exports = (app) => {

    const getProfile = (req, res) =>
        dao.getProfile()
            .then(tweets => res.json(tweets));

    const updateProfile = (req, res) =>
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));

    app.get("/rest/profile", getProfile);
    app.put("/rest/profile/:id", updateProfile);
}