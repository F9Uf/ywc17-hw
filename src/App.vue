<template>
  <div id="app">
    <the-navbar title="ชิมช็อปใช้" :menus="menus" />
    <the-banner />
    <the-regist :duration="duration" />
  </div>
</template>

// <script>
import { fetchChimShopChai } from './services/api'
import TheNavbar from './components/TheNavbar'
import TheBanner from './components/TheBanner'
import TheRegist from './components/TheRegist'

export default {
  name: 'app',
  data() {
    return {
      menus: [],
      duration: ''
    }
  },
  components: {
    TheNavbar, TheBanner, TheRegist
  },
  async created() {
    const data = await fetchChimShopChai();
    console.log(data);
    this.menus = data.navbarItems;
    this.duration = data.duration;
    
  },
}
</script>

<style>
</style>
