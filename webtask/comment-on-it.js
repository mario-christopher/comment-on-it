'use latest';
import express from 'express';
import wt from 'webtask-tools';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

let app = new express();

let apiResponses = {
    GET: (res, data) => res.status(200).json(data),
    POST: (res, data) => res.status(201).json(data),
    BAD_REQ: (res, data) => res.status(400).send(result),
    SERVER_ERR: (res, data) => res.status(500).send(result)
}

app.get('/comments', (req, res) => {

    let appId = req.webtaskContext.query['appId'];
    let instanceId = req.webtaskContext.query['instanceId'];

    connectDb(req.webtaskContext.secrets.MONGO_URL)
        .then(db => {
            db.collection('comment-on-it').find({ 'appInfo.appId': appId, 'appInfo.instanceId': instanceId }, {}, {}).toArray((err, result) => {
                db.close();
                if (err)
                    apiResponses.SERVER_ERR(res, 'Server error.');
                apiResponses.GET(res, result);
            });
        })
        .catch(err => {
            apiResponses.SERVER_ERR(res, 'Error connecting to DB.');
        })
})

app.post('/comments', bodyParser.json(), (req, res) => {

    let comment = req.body;
    if (comment) {
        connectDb(req.webtaskContext.secrets.MONGO_URL)
            .then(db => {
                db.collection('comment-on-it').insert(comment, (err, result) => {
                    db.close();
                    if (err)
                        apiResponses.SERVER_ERR(res, 'Server error.');
                    if (result.ops.length > 0)
                        apiResponses.POST(res, result.ops[0]);
                    else
                        apiResponses.POST(res, {});
                });
            })
            .catch(err => {
                apiResponses.SERVER_ERR(res, 'Error connecting to DB.');
            })
    }
    else
        apiResponses.BAD_REQ(res, 'Bad request');
})

const connectDb = (mongoDbUrl) => {

    return new Promise((resolve, reject) => {
        MongoClient.connect(mongoDbUrl, (err, db) => {
            if (err)
                reject(err);
            else
                resolve(db);
        })
    })
}

module.exports = wt.fromExpress(app);