const express = require('express');
const Mongo = require('./mongo');
const router = express.Router();
const connectionString = 'mongodb+srv://username:username@cluster.a1jyk.mongodb.net/db?retryWrites=true&w=majority';

const mongo = new Mongo(connectionString);

router.get('/process', async (req, res) => {
    try {
        const {id: processId} = req.body;
        const processData = await mongo.find({processId});
        return res.status(200).send(processData);
    } catch (e) {
        console.log('Error ==>', e);
        return res.status(500);
    }
});

router.get('/all-processes', async (req, res) =>{
    try {
        const processesData = mongo.findAll();
        return res.status(200).send(processesData);
    } catch (e) {
        console.log('Error ==>', e);
        return res.status(500);

    }
});

router.post('/process', async (req, res) =>{
    try {
        const data = req.body;
        return await mongo.insert(data);
    } catch (e) {
        console.log('Error ==>', e);
        return res.status(500);
    }
});

router.post('/store-process', async (req, res) => {

})

module.exports = router;
