import axios from "axios";

const state = {
  books: {},
  book: {}
}

const actions = {
  search({ commit }, query) {
    commit('success', { key: 'books', value: {} })
    return new Promise((resolve, reject) => {
      axios.get(`search/${query}`)
        .then(response => {
          commit('success', { key: 'books', value: response.data })
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  new({ commit }) {
    commit('success', { key: 'books', value: {} })
    return new Promise((resolve, reject) => {
      axios.get(`new`)
        .then(response => {
          commit('success', { key: 'books', value: response.data })
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  books({ commit }, isbn13) {
    commit('success', { key: 'book', value: {} })
    return new Promise((resolve, reject) => {
      axios.get(`books/${isbn13}`)
        .then(response => {
          commit('success', { key: 'book', value: response.data })
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
}

const mutations = {
  success(state, { key, value }) {
    state[key] = value
  },
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
