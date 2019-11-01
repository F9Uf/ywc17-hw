<template>
    <div class="ktc">
        <b-container>
            <b-row class="px-sm-5 px-md-1">
                <b-col md="2" cols="4" sm="4" >
                    <img src="../assets/ktc/CGD.png" alt="">
                </b-col>
                <b-col md="2" cols="4" sm="4" >
                    <img src="../assets/ktc/FPO.png" alt="">
                </b-col>
                <b-col md="2" cols="4" sm="4" >
                    <img src="../assets/ktc/Krungthai.png" alt="">
                </b-col>
                <b-col md="2" cols="4" sm="4" >
                    <img src="../assets/ktc/MOF.png" alt="">
                </b-col>
                <b-col md="2" cols="4" sm="4" >
                    <img src="../assets/ktc/MOTS.png" alt="">
                </b-col>
                <b-col md="2" cols="4" sm="4" >
                    <img src="../assets/ktc/TAT.png" alt="">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
.ktc {
    text-align: center;
}
.ktc img {
    width: 102px;
}

.ktc img:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: .5s all ease-in-out;
}

@media (max-width: 577px) {
    .ktc img {
        width: 56px;
    }
}
</style>