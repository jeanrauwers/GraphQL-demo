import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema'
import resolvers from './resolvers'

const app = express();


app.get('/', (req, res) => {
    res.send('GraphQl is Amazing!')
})

const root = resolvers

app.use('/query', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))




app.listen(9000, () => console.log('Running server on http://localhost:9000'))