<template>
    <div>
        <dynamic-point :width="width" :height="height"></dynamic-point>
    </div>

</template>

<script>
     import les from "suziyoudian-test"
     import dynamicPoint from "../components/dynamicPoint/index"
    export default {
        name: "canvas",
        data(){
            return {
                width:window.innerWidth -160,
                height:window.innerHeight -200
            }
        },
        components:{
            dynamicPoint
        },
        mounted() {
            console.log(123)
            console.log(les)
        }
    }
</script>

<style scoped>

</style>
