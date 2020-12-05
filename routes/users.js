const express = require('express');
const UsersService = require('../services/users');

function userApi(app) {
  const router = express.Router();
  const usersService = new UsersService();

  app.use('/api/users', router);

  router.get('/', async (req, res, next) => {
    try {
      const users = await usersService.getUsers();

      res.status(200).json({
        data: users,
        message: 'users listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:userId', async (req, res, next) => {
    const { userId } = req.params;
    try {
      const user = await usersService.getUser(userId);
      res.status(200).json({
        data: user,
        message: 'user retrieved',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async (req, res, next) => {
    const user = req.body;
    try {
      const idUser = await usersService.createUser(user);

      res.status(200).json({
        data: idUser,
        message: 'user created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:userId', async (req, res, next) => {
    const { userId } = req.params;
    const user = req.body;
    try {
      const idUser = await usersService.updateUser(userId, user);
      res.status(200).json({
        data: idUser,
        message: 'User updates',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:userId', async (req, res, next) => {
    const { userId } = req.params;

    try {
      const deletedUserId = await usersService.deleteUser(userId);
      res.status(200).json({
        data: deletedUserId,
        message: 'user deleted',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = userApi;
