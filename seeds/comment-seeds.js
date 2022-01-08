const { Comment } = require('../models');

const commentData = [{
        comment_text: "This is test content for Test Comment I.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "This is test content for Test Comment II.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "This is test content for Test Comment III.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;