import ApiService from '../common/api.service'
import TokenService from '../common/token.service'
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH, UPDATE_USER } from './action-types.js';
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from './mutation-types.js';
// //
const state = {
  count: 0,
  errors: null,
  user: {},
  isAuthenticated: true
}
//
// const getters = {
//   currentUser (state) {
//     return state.user
//   },
//   isAuthenticated (state) {
//     return state.isAuthenticated
//   }
// }
//
const actions = {
  [LOGIN] (context, credentials) {
    return new Promise((resolve) => {
      ApiService
        .post('users/login', {user: credentials})
        .then(({data}) => {
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({response}) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },

  [LOGOUT] (context) {
    context.commit(PURGE_AUTH)
  },
  [REGISTER] (context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService
        .post('users', {user: credentials})
        .then(({data}) => {
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({response}) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [CHECK_AUTH] (context) {
    if (TokenService.getToken()) {
      ApiService.setHeader()
      ApiService
        .get('user')
        .then(({data}) => {
          context.commit(SET_AUTH, data.user)
        })
        .catch(({response}) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    } else {
      context.commit(PURGE_AUTH)
    }
  }
}

//   [UPDATE_USER] (context, payload) {
//     const {email, username, password, image, bio} = payload
//     const user = {
//       email,
//       username,
//       bio,
//       image
//     }
//     if (password) {
//       user.password = password
//     }
//
//     return ApiService
//       .put('user', user)
//       .then(({data}) => {
//         context.commit(SET_AUTH, data.user)
//         return data
//       })
//   }
// }
//
const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error
  },
  [SET_AUTH] (state, user) {
    state.isAuthenticated = true
    state.user = user
    state.errors = {}
    TokenService.saveToken(state.user.token)
  },
  [PURGE_AUTH] (state) {
    state.isAuthenticated = false
    state.user = {}
    state.errors = {}
    TokenService.destroyToken()
  }
}
//

export default {
  state,
  actions,
  mutations,
  // getters
}
