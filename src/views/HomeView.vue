<template>
  <h3>Welcome to PictureFind !</h3>
  <SearchBar @inputUpdate="$store.dispatch('updatePictures', $event)" />
  <TagList :tagsList="$store.state.tags" />
  <div class="photos">
    <div
      v-for="photo in this.$store.state.pictures"
      class="photo"
      :key="photo.id"
      @click="showDetailPage(photo.id)"
    >
      <img :src="photo.src.medium" :alt="photo.alt" :id="photo.id" />
    </div>
    <div class="photos__error" v-if="isArrayEmpty">
      We are sorry, we could not find any photos with this key word.
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import TagList from '@/components/TagList.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    SearchBar,
    TagList,
  },
  data() {
    return {
      // isArrayEmpty: false,
    };
  },

  methods: {
    showDetailPage(event) {
      // const id = Number(event.target.id);
      // let detailPage = this.$store.pictures.find(picture => picture.id === id);
      // console.log(detailPage.id);
      this.$router.push({ name: 'about', params: { id: event.target.id } });
    },
  },
  computed: {
    ...mapGetters(['getArrayEmpty']),
    isArrayEmpty() {
      return this.getArrayEmpty;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style: none;
  padding: 0;
}
.photo {
  max-width: 500px;
}
.photo img {
  width: 100%;
}
</style>
