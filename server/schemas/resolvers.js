const { deleteBook } = require('../controllers/user-controller');
const { bookSchema, User } = require('../models');

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
        createUser: async (parent, args) => {
            const newUser = await User.create(args);
            return newUser;
        },
        login: async (parent, args) => {
            const newLogin = await User.findOne(args);
            return newLogin;
        },
        saveBook: async (parent, { user, body}) => {
            return User.findOneAndUpdate(
                { _id: user },
                {
                    $addToSet: { savedBook: { body } },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        deleteBook: async (parent, { user, body }) => {
            return User.findByIdAndUpdate(
                { _id: user },
                { $pull: { savedBooks: { bookId: body.bookId } } },
                { new: true },
            );
        }

    }
};

module.exports = resolvers;