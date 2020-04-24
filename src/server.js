import express from 'express';
import mongoose from 'mongoose';

import graphqlHTTP from 'express-graphql';
import { schema } from './models/graph-schema'

const app = express();
const port = 9000;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

try {
    console.log(process.env.MONGO_DB_SECRET)
    mongoose.connect(
        process.env.MONGO_DB_SECRET,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    console.log('MongoDB connected')
} catch (error) {
    throw Error(`Error while connecting MongoDB ${error}`);
}

app.get('/', (req, res) => {
    res.send('GraphQl is Amazing!')
})

app.use('/query', graphqlHTTP({
    schema,
    graphiql: true
}))




app.listen(port, () => console.log(`Server listening on port ${port}!`))
