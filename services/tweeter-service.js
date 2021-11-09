const tweets = require('../data/tweets.json');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweets);
    }

    const createTweet = (req, res) => {
        const newTweet = {
            "_id": (new Date()).getTime(),
            "topic": "Web Development",
            "userName": "jQuery",
            "verified": false,
            "handle": "jQuery",
            "title": "jQuery",
            "time": "last week",
            "logo-image": "https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png",
            "avatar-image": "../../../images/jquery.png",
            "tweets": "122K",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body
        }
        res.json(newTweet, ...tweets);
    }

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        tweets.filter(tweet => tweet._id !== id);
        res.sendStatus(200);
    }

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }

    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', createTweet);
    app.get('/api/tweets', findAllTweets);
};
