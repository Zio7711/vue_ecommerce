<template>
  <div>
    <!-- global component leveling menu -->
    <TypeNav />
    <ListContainer />
    <!-- <Recommend /> -->
    <!-- <Rank /> -->
    <!-- <Likes /> -->
    <!-- Floor component: it does not send any request in it, data is passed by the father component -->
    <!-- <Floor v-for="floor in floorList" :key="floor.id" :list="floor" /> -->
    <!-- <Brand /> -->
  </div>
</template>

<script>
  // none-routing component usage: define, register, usage
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
      // dispatch action for getting data for floor component
      this.$store.dispatch('getFloorList');
    },
  };
</script>

<style></style>
