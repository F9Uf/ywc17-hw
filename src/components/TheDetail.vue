<template>
    <div class="detail mt-5">
        <b-container>
            <b-row>
                <b-col lg="5" md="7">
                    <h3 class="text-danger-header detail-header">
                        มาตรการส่งเสริมการบริโภคในประเทศ 
                        <span class="nowrap">
                        "ชิมช้อปใช้"
                        </span>
                    </h3>
                </b-col>
                <b-col cols="11 mt-4">
                    <span v-html="detail" class="sub-detail"></span>
                </b-col>
                <b-col cols="12 mt-4">
                    <div class="condition-header">เงื่อนไขการเข้าร่วมมาตรการ</div>
                    <div class="mt-2">
                        <span v-html="condition" class="sub-detail"></span>
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

<style scoped>
@import url('../assets/css/TAT_Font.css');

.nowrap {
    white-space: nowrap;
    font-family: TATSanaChon;
}

.detail-header {
    font-family: TATSanaChon;
    font-weight: bold;
}

.sub-detail {
    line-height: 1.8;
}

.condition-header {
    font-weight: bold;
}

@media (max-width: 769px) {
    .detail-header {
        font-size: 24px;
        line-height: 1.3;
    }
}
</style>