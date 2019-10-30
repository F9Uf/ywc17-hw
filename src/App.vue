<template>
  <div id="app">
    <the-navbar title="ชิมช็อปใช้" :menus="menus" />
    <the-banner />
    <the-regist :duration="duration" />
    <the-detail :detail="detail" :condition="condition"/>
  </div>
</template>

// <script>
import { fetchChimShopChai } from './services/api'
import TheNavbar from './components/TheNavbar'
import TheBanner from './components/TheBanner'
import TheRegist from './components/TheRegist'
import TheDetail from './components/TheDetail'

export default {
  name: 'app',
  data() {
    return {
      menus: [],
      duration: '',
      detail: '',
      condition: '',
    }
  },
  components: {
    TheNavbar, TheBanner, TheRegist, TheDetail
  },
  async created() {
    const data = await fetchChimShopChai();
    console.log(data);
    this.menus = data.navbarItems;
    this.duration = data.duration;
    this.detail = data.detail;
    this.condition = data.condition;
    
  },
}
</script>

<style>
</style>
