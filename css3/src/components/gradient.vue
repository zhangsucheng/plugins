<template>
    <div class="wrap">
        <div  style="width: 40vw;float: left">
            <div id="test-div">
                background-image: linear-gradient(red, yellow)
            </div>
            <div id="test-div1">
                background-image: linear-gradient(to right,red, yellow,paleturquoise);
            </div>
            <div id="test-div2">
                background-image: linear-gradient(to right bottom,red, yellow,paleturquoise);
            </div>
            <div id="test-div3">
                background-image: linear-gradient(120deg,red, yellow,paleturquoise);
            </div>
            <div id="test-div4">
                background-image: linear-gradient(-120deg,red, yellow,paleturquoise);
            </div>
            <div id="test-div5">
                10% 80% 100%
            </div>
            <div id="test-div6">
                repeating
            </div>
        </div>
        <div style="width: 40vw;float:right;">
            <div class="right-div" id="right-1"></div>
            <div class="right-div" id="right-2">closest-side </div>
            <div class="right-div" id="right-3">farthest--side</div>
            <div class="right-div" id="right-4">closest-corner</div>
            <div class="right-div" id="right-5">farthest-corner</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "gradient"
    }
</script>

<style scoped>
    .wrap div {
        width: 80%;
        /*height: 90vh;*/
        margin: 30px;
        padding: 20px;
        border: 4px solid #1482f0;
    }

    #test-div {

        background-image: url("../assets/paper.gif");
        background-position: left top;
        background-repeat: round;
        background-color: #ff9900;
        background-image: linear-gradient(red, yellow);
    }
    #test-div1{
        background-color: #ff9900;
        background-image: linear-gradient(to right,red, yellow,paleturquoise);
    }

    #test-div2{
        background-image: linear-gradient(to right bottom,red, yellow,paleturquoise);
    }

    #test-div3{
        background-image: linear-gradient(120deg,red, yellow,paleturquoise);
    }
    #test-div4{
        background-image: linear-gradient(-120deg,red, yellow,paleturquoise);
    }
    #test-div5{
        background-image: linear-gradient(to right,greenyellow 10%,violet 80%,palegreen 100%);
    }
    #test-div6{
        background-image: repeating-linear-gradient(to right bottom,rgba(173,255,47,.5) 10%,rgba(255,255,0,.6) 20%);
    }

    .wrap .right-div{
        height: 80px;
        border:4px dotted yellow;
    }
    #right-1{
        background-image: radial-gradient(greenyellow,red);
    }
    #right-2{
        background-image: radial-gradient( closest-side at 60% 55%, red, yellow, black);
    }
    #right-3{
        background-image: radial-gradient(farthest-side at 60% 55%, red, yellow, black);
    }
    #right-4{
        background-image:  radial-gradient(closest-corner at 60% 55%, red, yellow, black);
    }
    #right-5{
        background-image:  radial-gradient(farthest-corner at 60% 55%, red, yellow, black);
    }
</style>