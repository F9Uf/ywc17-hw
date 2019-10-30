<template>
    <div class="detail">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h3>
                        มาตรการส่งเสริมการบริโภคในประเทศ 
                        <span class="nowrap">
                        "ชิมช้อปใช้"
                        </span>
                    </h3>
                </b-col>
                <b-col cols="12 mt-4">
                    <span v-html="detail"></span>
                </b-col>
                <b-col cols="12 mt-4">
                    <div>เงื่อนไขการเข้าร่วมมาตรการ</div>
                    <div class="mt-2">
                        <span v-html="condition"></span>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    props: {
        detail: {
            type: String
        },
        condition: {
            type: String
        }
    } 
}
</script>

<style>
.nowrap {
    white-space: nowrap;
}
</style>