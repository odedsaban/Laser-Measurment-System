const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const port = 23000;

const main = async () => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    // parse application/json
    app.use(bodyParser.json());
    app.use('/v1', router);
    app.listen(port, () => console.info(`Server is listening to port ${port}`));
}

(async () => {
    await main();
})();
