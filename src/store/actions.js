import axiosClient from '../axiosClient';

export function searchDogs({ commit }, keyword) {
    axiosClient.get(`/breeds/search?q=${keyword}`)
      .then(({ data }) => {
      
        commit('setSearchedDogs', data)
        console.log(data)
      })
  }