import { createStore } from "vuex";
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
const store =createStore({
    state,
    actions,
    mutations,
    getters,
})
export default store;

// const store = createStore({
//     state() {
//       return {
//         dogs: [],
//         text: '',
//         searched: false
//       }
//     },
//     mutations: {
//       setDogs(state, dogs) {
//         state.dogs = dogs
//       },
//       setText(state, text) {
//         state.text = text
//       },
//       setSearched(state, searched) {
//         state.searched = searched
//       }
//     },
//     actions: {
//         async fetchDogData({ commit }) {
//           try {
//             const res = await fetch('https://api.thedogapi.com/v1/breeds')
//             const data = await res.json()
//             commit('setDogs', data)
//           } catch (error) {
//             console.error(error)
//           }
//         },
//         async searchForDog({ commit, state }) {
//           try {
//             const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${state.text}`)
//             const data = await res.json()
//             commit('setDogs', data)
//           } catch (error) {
//             console.error(error)
//           }
//         }
//       },
//       getters: {
//         dogs(state) {
//           return state.dogs
//         },
//         text(state) {
//           return state.text
//         },
//         searched(state) {
//           return state.searched
//         }
//       }
//     })
    
//     export default store