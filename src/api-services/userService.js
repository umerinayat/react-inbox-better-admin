import API from './api';

const UserService = {
  getAllUsers: () => {
    return API.get('/admin/users')
      .then(({data}) => {
        return data;
      })
      .catch((err) => {
        console.log('User service err', err);
        throw err;
      });
  },

  addNewUser: (data) => {
    return API.post('/admin/users', data)
      .then(({data}) => {
        return data;
      })
      .catch((err) => {
        console.log('User service err', err);
        throw err;
      });
  },
};

export default UserService;
