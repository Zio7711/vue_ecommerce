<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Likes />
    <Floor />
    <Floor />
  </div>
</template>

<script>
  import ListContainer from '@/pages/Home/ListContainer';
  import Recommend from '@/pages/Home/Recommend';
  import Rank from '@/pages/Home/Rank';
  import Likes from '@/pages/Home/Likes';
  import Floor from '@/pages/Home/Floor';

  export default {
    name: '',
    components: {
      ListContainer,
      Recommend,
      Rank,
      Likes,
      Floor,
    },
  };
</script>

<style></style>
