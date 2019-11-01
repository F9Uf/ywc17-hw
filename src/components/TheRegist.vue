<template>
    <div class="regist">
        <b-container fluid class="text-center">
            <b-row>
                <b-col cols="12" class="py-2 since">ตั้งแต่วันที่</b-col>
                <b-col cols="12" class="py-2 duration text-danger"><h1>{{ duration }}</h1></b-col>
                <b-col cols="12" class="py-2">
                    <b-button variant="primary" class="btn-regist">
                        ลงทะเบียน2<br>
                        ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.<br>
                        (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)<br>
                    </b-button>
                    <hr>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    props: {
        duration: {
            type: String
        }
    }
}
</script>

<style>
@import url('../assets/css/TAT_Font.css');

.regist {
    margin: 26px 0;
}
.since {
    font-family: TATSanaChon;
    font-weight: bold;
    font-size: 14px;
}

.duration h1{
    font-family: TATSanaChon;
    font-weight: bold;
    font-size: 45px;
}
.btn.btn-regist {
    font-family: TATSanaChon;
    font-weight: bold !important;
    font-size: 24px;
    padding: 10px 15px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 0px 15px 30px 0 rgba(28, 78, 132, 0.4);
    background-color: #213A8F;
}

@media (max-width: 769px) {
    .duration h1 {
        font-size: 36px;
    }
    .btn.btn-regist {
        font-size: 18px;
    }
}

@media (max-width: 577px) {
    .duration h1 {
        font-size: 30px;
    }
    .btn.btn-regist {
        font-size: 18px;
    }
}

</style>