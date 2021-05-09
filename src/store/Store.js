
import { createStore, createLogger } from 'vuex';
import user from './modules/User.';
import auth from './modules/Auth';

const debug = process.env.NODE_ENV !== 'userion'

const Store = createStore({
  modules: {
    auth,
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default Store;