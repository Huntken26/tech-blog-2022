const User = require('./User');
const Post = require('./Post');
const Comment = require('./comment');


User.hasMany(Post, {
  foreignKey: "userID",
});
Post.belongsTo(User, {
  foreignKey: "userID",
});
Comment.belongsTo(User, {
  foreignKey: "userID",
});
Comment.belongsTo(Post, {
  foreignKey: "postID",
});
User.hasMany(Comment, {
  foreignKey: "userID",
});
Post.hasMany(Comment,{
  foreignKey: "postID",
});

module.exports = { User, Post, Comment };