import { createStore } from 'vuex';

export default createStore({
  state: {
    tags: [],
    pictures: [],
  },
  getters: {
    getArrayEmpty(state) {
      return state.isArrayEmpty;
    },
  },
  mutations: {
    SET_PICTURES(state, pictures) {
      state.pictures = pictures;
    },

    SET_TAGS(state, tags) {
      state.tags = tags;
    },

    SET_ARRAY_EMPTY(state, value) {
      state.isArrayEmpty = value;
    },
  },
  actions: {
    async updatePictures({ commit }, searchValue) {
      // add new search value in tags array
      commit('SET_TAGS', [...this.state.tags, searchValue]);

      // convert array to string
      let tagsString = this.state.tags.join('%20');

      // Show loader
      // Fetch new datas from this array
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${tagsString}&size="medium"`,
        {
          headers: {
            Authorization:
              'xu2ekSigCAGY14XYc56Tre4pph6xaZj0lrPLf1xTlZ1R8v3kskvv9nXv',
          },
        }
      );
      const data = await response.json();
      commit('SET_PICTURES', data.photos);
      // Hide loader
      // if no photos return by the api show error message
      !this.state.pictures.length
        ? commit('SET_ARRAY_EMPTY', true) && commit('SET_TAGS', [])
        : commit('SET_ARRAY_EMPTY', false);
    },
  },
  modules: {},
});
