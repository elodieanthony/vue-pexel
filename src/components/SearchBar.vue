<template>
  <div class="search">
    <div class="search__form">
      <label for="search-bar">Search Picture</label>
      <input
        class="search__input"
        type="text"
        id="search-input"
        name="search-bar"
        placeholder="tape here..."
        v-model="inputTerm"
        @keyup.enter="updateTerm"
      />
      <button @click="updateTerm">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      inputTerm: '',
    };
  },

  methods: {
    // Get search term on button click or keyup.enter on the input
    updateTerm() {
      // send input value to parent component
      this.$emit('inputUpdate', this.inputTerm);
      // Clear input
      this.inputTerm = '';
    },
  },
};
</script>

<style scoped>
.search {
  padding: 1rem;
  border: 1px solid rgb(194, 189, 189);
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(143, 141, 141);
}
.search__form {
  display: flex;
  flex-direction: column;
}

input {
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid rgb(184, 181, 181);
}
button {
  padding: 0.5rem;
  border: none;
  color: #ffff;
  font-size: 1rem;
  background-color: rgb(41, 151, 215);
  cursor: pointer;
}
</style>
