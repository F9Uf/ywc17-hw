<template>
  <div id="app">
    <the-navbar title="ชิมช็อปใช้" :menus="menus" />
    <the-banner />
    <the-regist :duration="duration" />
    <the-detail :detail="detail" :condition="condition"/>
    <the-contact />
    <the-ktc />
    <the-nav-foot />
    <the-footer :menus="menus2" />
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
      menus2: []
    }
  },
  components: {
    TheNavbar, TheBanner, TheRegist, TheDetail, TheContact, TheKtc,
    TheNavFoot, TheFooter
  },
  async created() {
    const data = await fetchChimShopChai();
    this.menus = data.navbarItems;
    this.duration = data.duration;
    this.detail = data.detail;
    this.condition = data.condition;
    const temp = Array.from(data.navbarItems);
    temp[1] = Object.assign({}, temp[1]);
    temp[1].label += 'ทั้งหมด';
    temp[2] = Object.assign({}, temp[2]);
    temp[2].label = `รายชื่อ${ temp[2].label }รายการ`;
    this.menus2 = temp;
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
