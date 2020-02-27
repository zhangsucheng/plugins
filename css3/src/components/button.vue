<template>
    <div class="wrap">
        <div class="button-container">
            <button class="button"><span>Hover </span></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "button1"
    }
</script>

<style scoped>
.button-container{
    margin:20px
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
    transition:all 1s;
}

.button span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -25px;
    transition: all 1s;
}
.button:hover span:after{
    right: -5px;
    opacity: 1;
}
.button:hover span{
    padding-right: 20px;
    color: #e0f002;
}

</style>