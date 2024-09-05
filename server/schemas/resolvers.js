const { deleteBook } = require('../controllers/user-controller');
const { bookSchema, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // bookSchema: async () => {
        //     return bookSchema.find({});
        // },
        user: async (parent, { _id }) => {
            const params = id ? { _id } : {};
            return User.find(params);
        },
    },
    Mutation: {
        signUp: async (parent, args) => {
            const user = await User.create(args);
            console.log(user);
            const token = signToken(user);
            return {user, token};
        },
        login: async (parent, args) => {
            const newLogin = await User.findOne(args);
            return newLogin;
        },
        saveBook: async (parent,  args) => {
            return User.findOneAndUpdate(
                { _id: user },
                {
                    $addToSet: { savedBooks: { body } },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        deleteBook: async (parent, args) => {
            return User.findByIdAndUpdate(
                { _id: user },
                { $pull: { savedBooks: { bookId: body.bookId } } },
                { new: true },
            );
        }

    }
};

module.exports = resolvers;