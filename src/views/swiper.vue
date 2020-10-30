<template>
  <div class="index">
    <v-nav></v-nav>
    <v-swiper></v-swiper>
  </div>
</template>

<script>
import nav from '@/components/tabItem/nav';
import swiper from '@/components/tabItem/swiper';

export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    'v-nav': nav,
    'v-swiper': swiper
  },
  methods: {

  }
}
</script>

<style lang='less' scoped>
</style>

