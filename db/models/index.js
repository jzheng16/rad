'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const OAuth = require('./oauth');
const Item = require('./item');
const Order = require('./order');
const OrderItem = require('./order-item');
const Category = require('./category');
const Review = require('./review');


OAuth.belongsTo(User);
User.hasOne(OAuth);


Item.belongsTo(User, {as: 'seller'});
//User.hasMany(Item, {as: 'seller'});

Review.belongsTo(Item);
Review.belongsTo(User, {as: 'reviewer'});

Order.belongsTo(User, {as: 'buyer'});
Item.belongsToMany(Order, { through: OrderItem});
Order.belongsToMany(Item, { through: OrderItem});

module.exports = {User, Item, Order, Category, Review, OAuth, OrderItem};
