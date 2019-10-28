<template>
  <div id="app">
    <the-navbar title="ชิมช็อปใช้" :menus="menus" />
    <the-banner />
  </div>
</template>

// <script>
import { fetchMenu } from './services/api'
import TheNavbar from './components/TheNavbar'
import TheBanner from './components/TheBanner'

export default {
  name: 'app',
  data() {
    return {
      menus: []
    }
  },
  components: {
    TheNavbar, TheBanner
  },
  async created() {
    const data = await fetchMenu();
    console.log(data);
    this.menus = data;
    
  },
}
</script>

<style>
</style>
