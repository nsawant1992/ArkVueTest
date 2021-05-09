import users from '../../data/users.js'
// initial state
const state = () => ({
  users: [],
  usersPaginatedData: null,
  user: null,
  isLoading: false,
  isCreating: false,
  createdData: null,
  isUpdating: false,
  updatedData: null,
  isDeleting: false,
  deletedData: null
})

// getters
const getters = {
  userList: state => state.users,
  usersPaginatedData: state => state.usersPaginatedData,
  user: state => state.user,
  isLoading: state => state.isLoading,
  isCreating: state => state.isCreating,
  isUpdating: state => state.isUpdating,
  createdData: state => state.createdData,
  updatedData: state => state.updatedData,

  isDeleting: state => state.isDeleting,
  deletedData: state => state.deletedData
};

// actions
const actions = {
  async fetchAllUsers({ commit }) {
    commit('setUserIsLoading', true);
    commit('setUsers', users);
    commit('setUsersPaginated', users);
    commit('setUserIsLoading', false);
  },

  async fetchDetailUser({ commit }, id) {
    commit('setUserIsLoading', true);
    commit('setUserDetail', users[id]);
    commit('setUserIsLoading', false);
  },

  async updateUser({ commit }) {
    commit('setUserIsUpdating', true);
    //logic to save it in database
    commit('setUserIsUpdating', false);
  },
  updateUserInput({ commit }, e) {
    commit('setUserDetailInput', e);
  }
}

// mutations
const mutations = {
  setUsers: (state, users) => {
    state.users = users
  },

  setUsersPaginated: (state, usersPaginatedData) => {
    state.usersPaginatedData = usersPaginatedData
  },

  setUserDetail: (state, user) => {
    state.user = user
  },

  setDeleteUser: (state, id) => {
    state.usersPaginatedData.data.filter(x => x.id !== id);
  },

  setUserDetailInput: (state, e) => {
    let user = state.user;
    user[e.target.name] = e.target.value;
    state.user = user
  },

  saveUpdatedUser: (state, user) => {
    state.users.unshift(user)
    state.updatedData = user;
  },

  setUserIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },

  setUserIsUpdating(state, isUpdating) {
    state.isUpdating = isUpdating
  },
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}