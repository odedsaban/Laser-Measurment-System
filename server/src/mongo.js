const mongoose = require('mongoose');

class Mongo {
    constructor(connectionString) {
        this.mongo = mongoose.createConnection(connectionString);
    }

    async insert(data) {
        return await this.mongo.collection('processes').insertOne(data);
    }

    async find(data) {
        return await this.mongo.collection('processes').findOne(data);
    }

    async update(filter, data) {
        await this.mongo.collection('processes').updateOne(filter, { $set: data }, { upsert: true });
    }

}

module.exports = Mongo;