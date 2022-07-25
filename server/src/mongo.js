const mongoose = require('mongoose');
const collection = 'processes';
class Mongo {
    constructor() {
        this.mongo = mongoose.createConnection('mongodb+srv://username:username@cluster.a1jyk.mongodb.net/db?retryWrites=true&w=majority');
    }

    async insert(data) {
        return await this.mongo.collection(collection).insertOne(data);
    }

    async find(data) {
        return await this.mongo.collection(collection).findOne(data);
    }

    async findAll() {
        return this.mongo.collection(collection).find({});
    }

    async update(filter, data) {
        await this.mongo.collection(collection).updateOne(filter, { $set: data }, { upsert: true });
    }

}

module.exports = Mongo;