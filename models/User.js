module.exports = (sequelize, type) => {
  const User = sequelize.define(
    'user',
    {
      email: {
        type: type.STRING,
      },
      user: {
        type: type.STRING,
      },
      password: {
        type: type.STRING,
      },
    },
    { timestamps: true }
  );
  return User;
};
