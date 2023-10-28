require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express') //extiende el servidor de express

const { typeDefs } = require('./typedefs')
const {resolvers} = require('./schema/resolvers')

const {connectDb} = require('./db')

const app = express()
connectDb()

app.get('/', (req, res) => res.send('bienvenido a mi api')) 
module.exports = app

async function start() {
    const server = new ApolloServer({
            typeDefs,
            resolvers,
        }
    );

    await server.start()

    server.applyMiddleware({ app })

    

    app.listen(process.env.SERVER_PORT, () => {
        console.log('Server on port', process.env.SERVER_PORT)
    })
}

start()