<template>
    <div class="wrap">
        <div class="auto-resize">
            <img src="../assets/logo.png" alt="">
        </div>
        
        <div class="pineapple">
            <img src="../assets/pineapple.jpg" alt="">
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
        height: 200px;
        border:1px solid #f90;
        overflow:auto;
    }

    .auto-resize img {
        width: 100%;
        height: auto;
    }
    .pineapple{
        margin-top: 30px;
    }
    .pineapple img {
        width: 33%;
        height: auto;
        float: left;
        max-width: 235px;
    }
</style>