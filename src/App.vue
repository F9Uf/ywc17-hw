<template>
  <div id="app">
    <the-navbar title="ชิมช็อปใช้" :menus="menus" />
    <the-banner />
    <the-regist :duration="duration" />
    <the-detail :detail="detail" :condition="condition"/>
    <the-contact />
    <the-ktc />
    <the-nav-foot />
    <the-footer :menus="menus" />
  </div>
</template>

// <script>
import { fetchChimShopChai } from './services/api'
import TheNavbar from './components/TheNavbar'
import TheBanner from './components/TheBanner'
import TheRegist from './components/TheRegist'
import TheDetail from './components/TheDetail'
import TheContact from './components/TheContact'
import TheKtc from './components/TheKtc'
import TheNavFoot from './components/TheNavFoot'
import TheFooter from './components/TheFooter'

export default {
  name: 'app',
  data() {
    return {
      menus: [],
      duration: '',
      detail: '',
      condition: '',
      menus2: [],
    }
  },
  components: {
    TheNavbar, TheBanner, TheRegist, TheDetail, TheContact, TheKtc,
    TheNavFoot, TheFooter
  },
  async created() {
    const data = await fetchChimShopChai();
    console.log(data);
    this.menus = data.navbarItems;
    this.duration = data.duration;
    this.detail = data.detail;
    this.condition = data.condition;
    this.menus2 = data.navbarItems;
    this.menus2[1].label += 'ทั้งหมด';
    this.menus2[2].label = 'รายชื่อร้านค้าที่เข้าร่วมรายการ';
    
  },
}
</script>

<style>
@import url('./assets/css/TAT_Font.css');

* {
  font-family: TATSanaSuksa ;
}
.text-danger-header {
  color: #E6332A;
}
</style>
