const express = require('express');
const Mongo = require('./mongo');
const router = express.Router();

const mongo = new Mongo();

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

module.exports = router;
