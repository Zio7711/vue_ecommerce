<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
  </div>
</template>

<script>
  import ListContainer from '@/pages/Home/ListContainer';
  import Recommend from '@/pages/Home/Recommend';
  import Rank from '@/pages/Home/Rank';

  export default {
    name: '',
    components: {
      ListContainer,
      Recommend,
      Rank,
    },
  };
</script>

<style></style>
