const mongoose = require('mongoose');
const collection = 'processes';
class Mongo {
    constructor(connectionString) {
        this.mongo = mongoose.createConnection(connectionString);
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