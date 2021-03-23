import axios from 'axios'
import Vue from 'vue'
import Vuex, {
  Store
} from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    chats: [],
    currentUserChat: {},
    profile: {}
  },
  mutations: {
    SET_CONTACTS_TO_STORE(state, contacts) {
      state.contacts = contacts;
    },
    SET_USER_TO_HEADER(state, user) {
      if (user) {
        state.currentUserChat = user;
      }
    },
    SET_CHATS_TO_STORE(state, chats) {
      state.chats = chats;
    },
    SET_PROFILE_TO_STORE(state, profile) {
      state.profile = profile;
    },
  },
  actions: {
    FETCH_CONTACTS({
      commit
    }) {
      return axios.get('http://localhost:3000/chats')
        .then((contacts) => {
          commit('SET_CONTACTS_TO_STORE', contacts.data)
        })
    },
    FETCH_PROFILE({
      commit
    }) {
      return axios.get('http://localhost:3000/profile')
        .then((profile) => {
          commit('SET_PROFILE_TO_STORE', profile.data)
        })
    },
    USER_TO_HEADER({
      commit
    }, user) {
      commit('SET_USER_TO_HEADER', user)
    },
    FETCH_CHATS({
      commit
    }) {
      return axios.get('http://localhost:3000/chats')
        .then((chats) => {
          commit('SET_CHATS_TO_STORE', chats.data)
        })
    },
    SET_MESSEGE_TO_CHAT({commit}, {userId, user}){
      return axios.put('http://localhost:3000/chats/'+userId, user)
      .then((response) => {
        return response;
      })
    }
  },
  modules: {}
})