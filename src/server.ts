import express from 'express';
import bodyParser from 'body-parser';
import { IndexRouter } from './controllers/v0/index.router';

(async () => {
    // Init the Express application
    const app = express();

    // Set the network port
    const port = process.env.PORT || 8082;

    // Use the body parser middleware for post requests
    app.use(bodyParser.json());

    // you can use the api with the versions;
    app.use('/api/v0/', IndexRouter);

    // by default we will serve latest api at the root level.
    // Right now v0 is the latest
    app.use('/', IndexRouter);

    // Root Endpoint
    // Displays a simple message to the user
    app.get('/', async (req, res) => {
        res.send('try GET /filteredimage?image_url={{}}');
    });

    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
})();
