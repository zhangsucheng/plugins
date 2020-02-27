<template>
    <div class="wrap">
        <div class="animation1"></div>
        <div class="animation2"></div>
    </div>
</template>

<script>
    export default {
        name: "animation"
    }
</script>

<style scoped>
    .wrap div {
        width: 100px;
        height: 100px;
        border: 1px solid #f90;
        margin: 50px;
    }
    .wrap .animation1:hover{
        animation: animation1 2s;
    }

    @keyframes animation1 {
        from {background-image: linear-gradient(to right bottom, rgba(255, 0, 255, .3) 20%, deepskyblue)}
        to{background-image: linear-gradient(to right bottom, rgba(255, 255, 255, .4) 20%, deepskyblue)}
    }

    .wrap .animation2{
        transition:transform 4s;
    }

    .wrap .animation2:hover{
        animation: animation2 4s infinite;
    }

    @keyframes animation2 {
        0% {
            width: 100px;
            background: #1482f0;
        }
        20% {
            width: 120px;
            border:1px solid #f90;
        }
        80% {
            width: 180px;
            box-shadow: 5px 5px 10px 1px #2c3e50;
        }
        100% {
            width: 200px;
        }
    }


</style>