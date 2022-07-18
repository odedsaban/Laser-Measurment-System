const express = require('express');
const Mongo = require('./mongo');
const router = express.Router();
const connectionString = 'mongodb+srv://username:username@cluster.a1jyk.mongodb.net/db?retryWrites=true&w=majority';

const mongo = new Mongo(connectionString);

router.get('/process', async (req, res) => {
    const {id: processId} = req.body;
    return await mongo.find({processId})
});

router.get('/all-processes', async (req, res) =>{

});

router.post('/process', async (req, res) =>{

});


router.post('/', async (req, res) =>{

});

module.exports = router;
