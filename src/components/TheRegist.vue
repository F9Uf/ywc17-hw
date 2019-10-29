<template>
    <div class="regist">
        <b-container fluid class="text-center">
            <b-row>
                <b-col cols="12" class="py-2">ตั้งแต่วันที่</b-col>
                <b-col cols="12" class="py-2"><h1>{{ duration }}</h1></b-col>
                <b-col cols="12" class="py-2">
                    <b-button>
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
.regist {
    margin: 26px 0;
}
</style>