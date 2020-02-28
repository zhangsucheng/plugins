<template>
    <div class="wrap">
        <div class="flex flex-1">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
            <div class="box">4</div>
        </div>

        <div class="flex flex-2">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
            <div class="box">4</div>
        </div>

        <div class="flex flex-3">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
            <div class="box">4</div>
        </div>

        <div class="flex flex-4">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
            <div class="box">4</div>
        </div>

        <div class="flex flex-5">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
            <div class="box">4</div>
            <div class="box">5</div>
            <div class="box">6</div>
            <div class="box">7</div>
            <div class="box">8</div>
            <div class="box">9</div>
        </div>

        <div class="flex flex-6">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
            <div class="box">4</div>
            <div class="box">5</div>
            <div class="box">6</div>
            <div class="box">7</div>
            <div class="box">8</div>
            <div class="box">9</div>
        </div>

        <div class="flex flex-7">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
            <div class="box">4</div>
        </div>

        <div class="flex flex-8">
            <div class="box">完美居中</div>
        </div>

        <div class="flex flex-9">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
            <div class="box">4</div>
            <div class="box">5</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "flex",
        data() {

        }
    }
</script>

<style scoped>
    .wrap {
        width: 30vw;
    }

    .box {
        width: 100px;
        height: 100px;
        border: 1px solid #1482f0;
        margin: 10px;
    }

    .flex {
        display: flex;
        height: 200px;
        border: 1px solid #e0f002;
        margin-bottom: 20px;
    }

    .flex-1 {

    }

    .flex-2 {
        flex-direction: row-reverse;
    }
    .flex-3{
        justify-content: space-between;
    }

    .flex-4{
        align-items: center;
    }
    .flex-5{
        flex-wrap: nowrap;
    }
    .flex-6{
        flex-wrap: wrap;
    }
    .flex-7{
        margin-top: 80px;
    }
    .flex-7 .box:first-child{
        margin-right: auto;
    }
    .flex-8 .box{
        margin: auto;
        text-align: center;
       line-height: 100px;
    }

    .flex-9 .box:first-child{
        align-self: flex-start;
    }

    .flex-9 .box:nth-child(2){
        align-self: flex-end;
    }
    .flex-9 .box:nth-child(3){
        align-self: center;
    }

    .flex-9 .box:nth-child(4){
       align-self: baseline;
    }
    .flex-9 .box:nth-child(5){
        min-height: 150px;
        align-self: stretch;
        -webkit-align-self: stretch;
    }


</style>