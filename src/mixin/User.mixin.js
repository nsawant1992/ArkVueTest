import { users } from '../data/users.js'

var UserDataMixin = {
    data: function () {
        return users;
    }
}


export default UserDataMixin;