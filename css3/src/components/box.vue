<template>
    <div class="wrap">
        <div class="left box">box-sizing:border-box</div>
        <div class="right box">margin 还是算的 padding内消化</div>
        <div class="outline">outline-offset 不占用空间</div>
        <div class="outline-offset">outline-offset 不占用空间</div>
    </div>
</template>

<script>
    export default {
        name: "box"
    }
</script>

<style scoped>
    .wrap {
        width: 600px;
        height: 200px;
        border: 1px solid #1482f0;
    }

    .box {
        width: 300px;
        padding: 10px;

    }

    .left {
        border: 10px solid #ff9900;
        box-sizing: border-box;
        float: left;
    }

    .right {
        border: 10px solid violet;
        box-sizing: border-box;
        float: left;
    }

    .outline {
        margin-top: 100px;
        border: 1px solid #ff9900;
        outline: 4px dotted palegreen;
        outline-offset: 30px;
    }
    .outline-offset{
        border: 1px solid #222222;
        outline: 4px solid red;
        outline-offset: 30px;
    }
</style>