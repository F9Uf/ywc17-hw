<template>
    <div class="banner">
        <b-container fluid>
            <b-row>
                <b-col class="cover1 "></b-col>
                <b-col class="cover2 ">
                    <b-row class="h-100">
                        <b-col align-self="center">
                            <img src="https://www.ชิมช้อปใช้.com/img/logo/banner.png" alt="" class="logo-box">
                        </b-col>
                    </b-row>
                </b-col>
                <b-col class="cover3 "></b-col>
            </b-row>
        </b-container>
        
    </div>
</template>
<style>
.banner {
    margin: 50px 0 0 0;
}
@media (max-width: 530px) {
    .banner {
        margin: 70px 0 0 0; 
    }
}
.cover1 {
    height: 50vw;
    max-height: 320px;
    background: url('../assets/banner/banner-left.png') no-repeat;
    background-size: cover;
}
.cover2 {
    height: 50vw;
    max-height: 320px;
    background: url('../assets/banner/banner-center.png') no-repeat;
    background-size: cover;
}
.cover3 {
    height: 50vw;
    max-height: 320px;
    background: url('../assets/banner/banner-right.png') no-repeat;
    background-size: cover;
}
.logo-box {
    display: block;
    position: relative;
    margin: auto;
    height: 30vw;
    max-height: 250px;
    cursor: pointer;
    top: 0px;
    transition: .3s all;
}
.logo-box:hover {
    animation: .3s upDown linear;
    top: 7px;
}
@keyframes upDown {
    0% {
        top: 0px;
    }
    100% {
        top: 7px;
    }
}
</style>