const friendDataBase = {}

class Friend {
    constructor(id, { firstName, lastName, gender, age, email, contacts }) {
        this.id = id;
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
        this.email = email
        this.contacts = contacts
    }
}

//resolver map
export const resolvers = {
    Query: {
        getFriend: ({ id }) => {
            return new Friend(id, friendDataBase[id])
        },
    },

    Mutation: {
        createFriend: ({ input }) => {
            let id = require('crypto').randomBytes(10).toString('hex');
            friendDataBase[id] = input;
            return new Friend(id, input)
        }
    }

}
