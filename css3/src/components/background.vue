<template>
    <div class="wrap">
        <div id="test-div">
            复合图片的先后关系
        </div>

        <div id="test-div2">
            background-size:cover
        </div>

        <div id="test-div3">
            background-size:contain
        </div>

        <div id="test-div4">
            background-size:length
        </div>

        <div id="test-div5">
            background-size:percent
        </div>

        <div id="test-div6">
            图片存放位置 background-origin：border-box
        </div>

        <div id="test-div7">
            图片存放位置 background-origin：padding-box
        </div>

        <div id="test-div8">
            图片存放位置 background-origin：content-box
        </div>

        <div id="test-div9">
            background-clip:border-box
        </div>

        <div id="test-div10">
            background-clip:padding-box
        </div>

        <div id="test-div11">
            background-clip:content-box
        </div>

    </div>
</template>

<script>
    export default {
        name: "background"
    }
</script>

<style scoped>
    .wrap div {
        width: 90vh;
        height: 30vw;
        margin-bottom: 30px;
        border: 4px solid #ff9900;
    }

    #test-div {
        background-image: url("../assets/img_flwr.gif"), url("../assets/paper.gif");
        background-position: right bottom, left top;
        background-repeat: no-repeat, repeat;
    }

    #test-div2 {
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        background-image: url("../assets/img_flwr.gif");
        background-size: cover;
    }

    #test-div3 {
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        background-image: url("../assets/img_flwr.gif");
        background-size: contain;
    }

    #test-div4 {
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        background-image: url("../assets/img_flwr.gif");
        background-position: top right;
        background-size: 40px;
    }

    #test-div5 {
        width: 200px;
        height: 200px;
        background-repeat: no-repeat;
        background-image: url("../assets/img_flwr.gif");
        background-size: 50% 50%;
    }

    #test-div6 {
        width: 300px;
        height: 200px;
        padding: 40px;
        background-repeat: no-repeat;
        background-image: url("../assets/img_flwr.gif");
        background-origin: border-box;
    }

    #test-div7 {
        width: 300px;
        height: 200px;
        padding: 40px;
        background-repeat: no-repeat;
        background-image: url("../assets/img_flwr.gif");
        background-origin: padding-box;
    }

    #test-div8 {
        width: 300px;
        height: 200px;
        padding: 40px;
        background-repeat: no-repeat;
        background-image: url("../assets/img_flwr.gif");
        background-origin: content-box;
    }

    #test-div9 {
        width: 60vw;
        height: 200px;
        border: 10px dotted black;
        padding: 40px;
        background: yellow;
        background-clip: border-box;
    }

    #test-div10 {
        width: 60vw;
        height: 200px;
        border: 10px dotted black;
        padding: 40px;
        background: yellow;
        background-clip: padding-box;
    }

    #test-div11 {
        width: 60vw;
        height: 200px;
        border: 10px dotted black;
        padding: 40px;
        background: yellow;
        background-clip: content-box;
    }
</style>