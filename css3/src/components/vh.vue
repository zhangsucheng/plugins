<!--固定宽高比且图像等比缩放-->
<template>
    <div class="wrap">
        <div id="test-div">
            123
        </div>

        <div id="test-div2" >
            <img src="../assets/logo.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "vh"
    }
</script>

<style scoped>
    .wrap div{
        margin-bottom: 30px;
    }
    #test-div{
        border: 10px solid #f90;
        width: 30vw;
        height: 10vh;
    }
    #test-div2{
        border: 2px solid #1482f0;
        padding: 20px;
        width: 20vw;
        margin:10px auto;
    }
    #test-div2 img{
        width: 100%;
        height: auto;
    }
</style>