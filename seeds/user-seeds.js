const { User } = require('../models');

const userData = [{
        username: 'Test',
        password: 'test'

    },
    {
        username: 'User',
        password: 'user'
    },
    {
        username: 'TestUser',
        password: 'testuser'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;