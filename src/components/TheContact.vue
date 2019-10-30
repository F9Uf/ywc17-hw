<template>
    <div class="contact my-5">
        <b-container>
            <b-row>
                <b-col md="4" sm="12">
                    <a href="#">
                        <img src="../assets/contact1.png" alt="">
                    </a>
                </b-col>
                <b-col md="4" sm="12">
                    <a href="#">
                        <img src="../assets/contact2.png" alt="">
                    </a>
                </b-col>
                <b-col md="4" sm="12">
                    <a href="#">
                        <img src="../assets/contact3.png" alt="">
                    </a>
                </b-col>
                
            </b-row>
        </b-container>
    </div>
</template>

<style>
.contact img {
    width: 100%;
    height: 100%;
}

@media (max-width: 576px ) {
    .contact img {
        width: 80%;
    }
}
.contact {
    text-align: center;
}
</style>