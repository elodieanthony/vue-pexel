<template>
  <div class="tags" v-if="this.isVisible">
    <ul class="tags__list">
      <li class="tag" v-for="tag in tagsList" :key="tag">
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TagList',
  data() {
    return {
      isVisible: true,
    };
  },
  props: ['tagsList'],
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}
li {
  margin: 0 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  min-width: 0;
}
</style>
