import API from './api';

const UserService = {
  getAllUsers: (data) => {
    return API.get('/admin/users')
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
