const dao = require('./dao')

module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));

    const createTweet = (req, res) =>
        dao.createTweet(req.body)
            .then((createdTweet) => res.json(createdTweet));

    const updateTweet = (req, res) =>
        dao.updateTweet(req.params.id, req.body)
            .then(status => res.send(status));

    app.get("/rest/tweets", findAllTweets);
    app.delete("/rest/tweets/:id", deleteTweet);
    app.post("/rest/tweets", createTweet);
    // app.get("/rest/movies/:id", findMovieById);
    app.put("/rest/tweets/:id", updateTweet);
}
