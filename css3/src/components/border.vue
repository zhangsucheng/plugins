<template>
    <div class="wrap">
        <div id="border-round">
            图像平铺（重复）来填充该区域。
        </div>

        <div id="border-stretch">
            图像被拉伸以填充该区域
        </div>
    </div>
</template>

<script>
    export default {
        name: "border"
    }
</script>

<style scoped>
    .wrap div{
        width: 300px;
        height: 120px;
        margin-bottom: 30px;
        border:15px solid transparent;
    }
    #border-round{
        /*border-image: url("../assets/border.png") 30 30 round;*/
        border-image-source: url("../assets/border.png");
        border-image-slice: 30;
        border-image-width: 15px;
        /*border-image-outset:0;*/
        border-image-repeat: round;
    }
    #border-stretch{
        border-image: url("../assets/border.png") 30 30 stretch;
    }
</style>