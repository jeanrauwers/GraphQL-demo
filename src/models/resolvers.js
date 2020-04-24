import mongoose from 'mongoose';
import { Friends } from './mongo-schema';

//resolver map
export const resolvers = {
    Query: {
        getFriend: async (root, { id }) => {
            try {
                const friend = await Friends.findById(id)
                return friend
            } catch (error) {
                return error
            }
        },
    },

    Mutation: {
        createFriend: async (root, { firstName, lastName, gender, email, language, age, contact }) => {
            try {
                const newFriend = await Friends.create({
                    firstName,
                    lastName,
                    gender,
                    language,
                    email,
                    age,
                    contact
                })
                return newFriend
            } catch (error) {
                return error
            }
        }
    }

}
