const { User } = require('../database/sequelize');

class UsersService {
  constructor() {
    this.table = User;
  }

  async getUsers() {
    const users = await this.table.findAll();
    return users || [];
  }

  async getUser(userId) {
    const user = await this.table.findOne({ where: { id: userId } });
    return user || {};
  }

  async createUser(user) {
    const createdUser = await this.table.create(user);
    const createdUserId = createdUser.id;
    return createdUserId;
  }

  async updateUser(idUser, user) {
    const updatedUser = await this.table.update(user, {
      where: { id: idUser },
    });
    return updatedUser;
  }
  async deleteUser(idUser) {
    const deletedUserId = await this.table.destroy({
      where: {
        id: idUser,
      },
    });
    return deletedUserId;
  }
}

module.exports = UsersService;
