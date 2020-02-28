<template>
    <div class="wrap">
        <div class="button-container">
            <button class="button"><span>Hover </span></button>
            <button class="button1">hello</button>
            <button class="button2">world</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "button1"
    }
</script>

<style scoped>
    .button-container {
        margin: 20px
    }

    .button {
        display: inline-block;
        border-radius: 4px;
        background-color: #f4511e;
        border: none;
        color: #FFFFFF;
        text-align: center;
        font-size: 28px;
        padding: 20px;
        width: 200px;
        cursor: pointer;
        margin: 5px;
    }

    .button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: all 1s;
    }

    .button span:after {
        content: '»';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -25px;
        transition: all 1s;
    }

    .button:hover span:after {
        right: -5px;
        opacity: 1;
    }

    .button:hover span {
        padding-right: 20px;
        color: #e0f002;
    }

    .button1 {
        display: inline-block;
        border-radius: 4px;
        background-color: #42be83;
        border: none;
        color: #FFFFFF;
        text-align: center;
        font-size: 28px;
        padding: 20px;
        width: 200px;
        cursor: pointer;
        margin: 5px;
        box-shadow: 0px 10px #222222;
        transition: all 0.6s;
    }
    .button1:active{
        box-shadow: 0px 6px #222222;
        font-size: 32px;
        transform: translateY(4px);
    }
    .button2{
        display: inline-block;
        border-radius: 4px;
        background: #bf6613;
        border:none;
        color: white;
        text-align: center;
        font-size: 28px;
        padding: 20px;
        width: 200px;
        cursor: pointer;
        margin:5px;
        box-shadow: 0px 1px 4px 0px #1482f0;
    }
    .button2:after{
        content: "";
        background: #90EE90;
        display: block;
        position: absolute;
        opacity: 0;
        padding-right: 200px;
        padding-top:200px;
        margin-top: -100px;
        transition: all 0.1s
    }
    .button2:active:after {
        padding: 0;
        margin-left: 200px;
        opacity: 1;
    }
</style>