<template>
    <div class="header">
        <b-navbar toggleable="sm" type="light" variant="white" class="shadow-sm" fixed="top">
            <b-navbar-brand href="#" class="d-block d-sm-none d-md-none d-lg-none">
                <img src="../assets/logochim.png" :alt="title" height="45px">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="mx-auto">
                <b-nav-item 
                    :href="menu.href" 
                    v-for="(menu, index) in menus" 
                    :key="index" target="__BLANK"
                    class="px-2 py-1"
                >
                    {{ menu.label }}
                </b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        menus: {
            type: Array,
            default: [
                {label: 'Menu 1', href: '#'},
                {label: 'Menu 2', href: '#'}                
            ]
        }
    }
}
</script>

<style>
@import url('../assets/css/TAT_Font.css');
.header li.nav-item a{
    font-family: TATSanaChon;
    font-size: 13px;
    font-weight: bold;
}
.nav-item a{
    text-align: right;
}
</style>