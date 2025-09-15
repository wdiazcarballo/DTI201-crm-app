import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';  // Not used but can be useful for extended parsing
import routes from './src/routes/crmRoutes.js';  // Updated path

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/crmDB', { useNewUrlParser: true, useUnifiedTopology: true });  

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
