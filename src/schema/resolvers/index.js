const Users = require('../../models/Users')

const resolvers = {
    Query: {
        hello: () => 'hello world',
        getUsers: async () => {
            const users = await Users.find()
            return users
        },
        async getUser(_, { id }) {
            const user = await Users.findById(id);
            return user
        }
    },
    Mutation: {
        createUser: async (_, { name, password }, context) => {
            const newUser = new Users({ name, password })
            await newUser.save()
            return newUser
        },
        async deleteUser(_, { id }, context) {
            await Users.findByIdAndDelete(id)
            return 'Usuario eliminado correctamente'
        },
        async updateUser(_, { id, name, password }, context) {
            const updatedUser = await Users.findByIdAndUpdate(id, { name, password })
            return 'User Updated!!!'
        }
    }
}

module.exports = { resolvers }