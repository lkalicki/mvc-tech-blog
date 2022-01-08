const { Post } = require('../models');

const postData = [{
        title: 'Test Post I',
        content: 'This is test content for Test Post I.',
        user_id: 1

    },
    {
        title: 'Test Post II',
        content: 'This is test content for Test Post II.',
        user_id: 2
    },
    {
        title: 'Test Post III',
        content: 'This is test content for Test Post III.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;