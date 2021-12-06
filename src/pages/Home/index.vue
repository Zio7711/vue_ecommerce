<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Likes />
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>

<script>
  import ListContainer from '@/pages/Home/ListContainer';
  import Recommend from '@/pages/Home/Recommend';
  import Rank from '@/pages/Home/Rank';
  import Likes from '@/pages/Home/Likes';
  import Brand from '@/pages/Home/Brand';
  import Floor from '@/pages/Home/Floor';
  import { mapState } from 'vuex';

  export default {
    name: 'Home',
    components: {
      ListContainer,
      Recommend,
      Rank,
      Likes,
      Floor,
      Brand,
    },
    computed: {
      ...mapState({
        floorList: (state) => state.home.floorList,
      }),
    },
    mounted() {
      this.$store.dispatch('getFloorList');
    },
  };
</script>

<style></style>
