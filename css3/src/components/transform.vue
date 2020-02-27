<template>
    <div class="wrap">
        <div class="box transform-origin">
            <div class="child-box"></div>
        </div>
        <div class="box transform-origin">
            <div class="child-box child-box1"></div>
        </div>
        <div class="box transform-origin">
            <div class="child-box child-box2"></div>
        </div>
        <div class="box transform-origin">
            <div class="child-box child-box3"></div>
        </div>
        <div class="box transform-origin">
            <div class="child-box4"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "transform"
    }
</script>

<style scoped>
    .transform-origin {
        width: 100px;
        height: 100px;
        border: 1px solid #2c3e50;
        margin: 50px 150px;
    }

    .child-box {
        width: 100px;
        height: 100px;
        background: #1482f0;
        transform: rotate(45deg);
    }
    .child-box1{
        transition: transform 2s;
        transform-origin: right bottom;
    }
    .child-box1:hover{
        transform: rotate(45deg);
    }
    .child-box2{
        transform-origin:0px 0px;
        /*transform-origin:top left;*/
    }
    .child-box3{
        transform-origin:50px 100px;
        transition: transform 3s;
    }
    .child-box3:hover{
        transform: rotate(-45deg);
    }
    .child-box4{
        width: 100px;
        height: 100px;
        background: #1482f0;
        transform-origin: right bottom;
        animation: box-rotate 5s infinite linear;
    }
    @keyframes box-rotate {
        100%{
            transform: rotate(-360deg);
        }
    }
</style>