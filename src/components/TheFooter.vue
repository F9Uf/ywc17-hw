<template>
    <footer class="footer px-5 py-1">
        <b-container>
            <b-row>
                <b-col md="3" sm="12" class="py-3">
                    Copyright © 2003-2019
                </b-col>
                <b-col 
                    md="3"
                    sm="12" 
                    class="py-3"
                    v-for="(menu, index) in menus" 
                    :key="index"
                >
                    <a :href="menu.href" target="__BLANK">{{ menu.label }}</a>    
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>


<script>
export default {
    props: {
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

footer.footer {
    font-family: TATSanaChon;
    background-color: #213a8f;
    color: white;
    font-weight: bold;
    font-size: 14px;
}

footer.footer a {
    color: white;
    text-decoration: none;
    font-family: TATSanaChon;
}
</style>