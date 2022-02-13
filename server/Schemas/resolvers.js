const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolver = {
    Query: {
        me: async () => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id });
            }
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password })
            const token = signToken(user);
            return { user, token };
        },
        saveBook: async (parent, { bookdata }, context) => {
            if (context.user) {
                return await User.findOneAndUpdate(
                    { _id: context._id },
                    { $pull: { savedBooks: { bookdata } } },
                    { new: true, runValidators: true }
                )
            }
        },
        login: async (parent, {email, password }) => {
            const user = await User.findOne({ email })
            if (!user) {
                throw new AuthenticationError('Wrong email word' );
            }
            const correctPw = await user.isCorrectPassword({password});

            if (!correctPw) {
                throw new AuthenticationError('Wrong p word' );
            }
            const token = signToken(user);
            res.json({ token, user });
        },
    }
}

module.exports = resolver;