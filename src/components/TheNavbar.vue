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
                    class="px-2 py-1 link"
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

<style scoped>
@import url('../assets/css/TAT_Font.css');

.header li.nav-item a {
    font-family: TATSanaChon;
    font-size: 13px;
    font-weight: bold;
    text-align: right;
    transition: .5s all ease-in-out;
}
::after {
    box-sizing: border-box;
}
@media (min-width: 576px ) {
    .navbar-light .navbar-nav .nav-link {
        color: #333333 !important;
        position: relative;
    }
    .navbar-light .navbar-nav .nav-link:hover {
        color: #213A8F !important;
    }
    .navbar-light .navbar-nav a.nav-link:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 6px;
        bottom: -8px;
        left: 0;
        background-color: #213A8F;
        visibility: hidden;
        transform: scaleX(0);
        transition: all .3s ease-in-out 0s;
    }

    .navbar-light .navbar-nav a.nav-link:hover:after {
        visibility: visible;
        transform: scaleX(1);
    }

}

button.navbar-toggler {
    border: none;
}

button:focus {
    outline: none;
}
</style>