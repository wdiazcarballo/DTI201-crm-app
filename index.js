import express from 'express';
import routes from './src/routes/crmRoutes.js';  // Updated path

const app = express();
const PORT = 3000;

// Add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
