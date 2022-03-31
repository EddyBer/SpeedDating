const { users } = require('./db');
const uuid = require('uuid');
const {User} = require('../models/user.model')

exports.getUsers = () => users;

exports.getUserByFirstName = async (firstName) => {

    const user = await User.findOne({
        where: {
          firstName: firstName
        }
      })
    return user
};

exports.createUser = async (body) => {

    await User.create({pseudo:body.pseudo,
                        firstName:body.firstName,
                        lastName:body.lastName,
                        password:body.password,
                        role:body.roles})
};

exports.updateUser = (id, data) => {
  const foundUser = users.find((user) => user.id == id);

  if (!foundUser) {
    throw new Error('User not found');
  }

  foundUser.firstName = data.firstName || foundUser.firstName;
  foundUser.lastName = data.lastName || foundUser.lastName;
  foundUser.password = data.password || foundUser.password;
};

exports.deleteUser = async (id) => {
  const userIndex = users.findIndex((user) => user.id == id);

  if (userIndex === -1) {
    throw new Error('User not foud');
  }
  await User.destroy({
    where: {
      id: id
    }
  });

  users.splice(userIndex, 1);
}
