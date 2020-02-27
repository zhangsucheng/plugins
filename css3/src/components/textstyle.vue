<template>
    <div class="wrap">
        <div class="text-shadow">
            text-shadow
        </div>
        <div class="box-shadow">
            box-shadow
        </div>
        <div class="box-shadow-after">
            ::after
        </div>
        <div class="text-overflow">
            text-overflowtext-overflowtext-overflowtext-overflowtext-overflow
        </div>
        <div class="text-overflow-clip">
            text-overflow:clip
        </div>
        <div class="text-aline-last">
            text-aline-last text-aline-lasttext-aline-lasttext-aline-lasttext-aline-last
        </div>
        <div class="text-justify">
            text-justfity text-justfity  text-justfity text-justfity text-justfity text-justfity
        </div>
    </div>
</template>

<script>
    export default {
        name: "textstyle"
    }
</script>

<style scoped>
    .wrap {
        font-size: 20px;
        width: 40vw;
        height: auto;
    }
    .wrap div{
        margin:20px;
    }
    .text-shadow{
        text-shadow: 5px 5px 5px #ff9900;
    }
    .box-shadow{
        width: 30vw;
        height: 10vh;
        box-shadow: 0px 2px 30px 1px #ff9900;
    }
    .box-shadow-after{
        width: 30vw;
        height: 30px;
        border:1px solid #f90;
        position: absolute;
    }
    .box-shadow-after::after{
        content: "";
        z-index: -1;
        position: absolute;
        bottom: 0;
        width: 70%;
        left: 15%;
        box-shadow: 5px 5px 20px 2px #1482f0;

    }
    .text-overflow{
        margin-top: 100px !important;
        border:1px solid #222222;
        width: 100px;
        height: 10vh;
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .text-overflow-clip{
        border:1px solid #222222;
        width: 100px;
        height: 10vh;
        white-space:nowrap;
        overflow: hidden;
        text-overflow: clip;
    }
    .text-aline-last{
        border:1px solid #222222;
        width: 100px;
        height: auto;
        text-align-last: right;
    }
    .text-justify{
        border:1px solid #222222;
        width: 100px;
        height: auto;
        text-align: justify;
    }
</style>