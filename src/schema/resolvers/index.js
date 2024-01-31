const Users = require('../../models/Users')

const resolvers = {
    Query: {
        getUsers: async () => {
            const users = await Users.find()
            return users
        },
        async findUser(_, { username }) {
            try {
                const user = await Users.findOne({
                     userName: username 
                });

                if (!user) {
                    throw new Error('user not found')
                }

                return user
            } catch (error) {
               throw error
            }
        }
    },
    Mutation: {
        createUser: async (_, { userName, password, email }, context) => {
            const newUser = new Users({ userName, password, email })
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