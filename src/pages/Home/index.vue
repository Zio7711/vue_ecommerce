<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Likes />
  </div>
</template>

<script>
  import ListContainer from '@/pages/Home/ListContainer';
  import Recommend from '@/pages/Home/Recommend';
  import Rank from '@/pages/Home/Rank';
  import Likes from '@/pages/Home/Likes';

  export default {
    name: '',
    components: {
      ListContainer,
      Recommend,
      Rank,
      Likes,
    },
  };
</script>

<style></style>
