import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './schema'

const app = express();


app.get('/', (req, res) => {
    res.send('GraphQl is Amazing!')
})

app.use('/query', graphqlHTTP({
    schema,
    graphiql: true
}))




app.listen(9000, () => console.log('Running server on http://localhost:9000'))