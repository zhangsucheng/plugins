<template>
    <div class="wrap">
        <div class="auto-resize">
            <img alt="" src="../assets/logo.png">
        </div>

        <div class="pineapple">
            <div class="img-container">
                <span class="detail">正常</span>
                <img alt="" src="../assets/pineapple.jpg">
            </div>

            <div class="img-container">
                <span class="detail">模糊</span>
                <img alt="" class="blur" src="../assets/pineapple.jpg">
            </div>

            <div class="img-container">
                <span class="detail">高亮负数</span>
                <img alt="" class="brightness" src="../assets/pineapple.jpg">
            </div>

            <div class="img-container">
                <span class="detail">高亮两倍</span>
                <img alt="" class="brightness2" src="../assets/pineapple.jpg">
            </div>

            <div class="img-container">
                <span class="detail">两倍对比</span>
                <img alt="" class="constrast" src="../assets/pineapple.jpg">
            </div>

            <div class="img-container">
                <span class="detail">0.1对比</span>
                <img alt="" class="constrast0" src="../assets/pineapple.jpg">
            </div>

            <div class="img-container">
                <span class="detail">灰色</span>
                <img alt="" class="grayscale" src="../assets/pineapple.jpg">
            </div>

            <div class="img-container">
                <span class="detail">色彩旋转</span>
                <img alt="" class="hue-rotate" src="../assets/pineapple.jpg">
            </div>

            <div class="img-container">
                <span class="detail">倒置</span>
                <img alt="" class="invert" src="../assets/pineapple.jpg">
            </div>

            <div class="img-container">
                <span class="detail">透明度</span>
                <img alt="" class="opacity" src="../assets/pineapple.jpg">
            </div>

            <div class="img-container">
                <span class="detail">饱和度</span>
                <img alt="" class="saturate" src="../assets/pineapple.jpg">
            </div>

            <div class="img-container">
                <span class="detail">饱和度</span>
                <img alt="" class="sepia" src="../assets/pineapple.jpg">
            </div>

            <div class="img-container">
                <span class="detail">阴影</span>
                <img alt="" class="drop-shadow" src="../assets/pineapple.jpg">
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "img11"
    }
</script>

<style scoped>
    .wrap {

    }

    .auto-resize {
        resize: both;
        width: 300px;
        height: 340px;
        border: 1px solid #f90;
        overflow: auto;
    }

    .auto-resize img {
        width: 100%;
        height: auto;
    }

    .pineapple {
        margin-top: 30px;
        position: relative;
    }

    .detail {
        position: absolute;
        left: 10px;
        top: -30px;
        font-size: 18px;
        font-weight: bold;
        color: #1482f0;
    }

    .img-container {
        width: 20%;
        float: left;
        position: relative;
        margin-bottom: 50px;
    }

    .pineapple img {
        height: auto;
        max-width: 235px;
    }

    .blur {
        filter: blur(2px);
    }

    .brightness {
        filter: brightness(50%);
    }

    .brightness2 {
        filter: brightness(150%);
    }

    .constrast {
        filter: contrast(200%);
    }

    .constrast0 {
        filter: contrast(10%);
    }

    .grayscale {
        filter: grayscale(300%);
    }

    .hue-rotate {
        filter: hue-rotate(180deg);
    }

    .invert {
        filter: invert(100%);
    }

    .opacity {
        filter: opacity(0.4);
    }

    .saturate {
        filter: saturate(4);
    }

    .sepia{
        filter:sepia(800%);
    }
    .drop-shadow{
        filter:drop-shadow(8px 8px 10px green);
    }
</style>