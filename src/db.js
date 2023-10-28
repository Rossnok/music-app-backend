const { connect } = require('mongoose')

const connectDb = async () => {
    try {
        await connect(process.env.MONGO_USER_CONNECTION)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
    }
};

module.exports = { connectDb }
