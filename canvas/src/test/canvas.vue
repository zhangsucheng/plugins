<template>
    <div>
        <div>1234</div>
        <img :src="url" alt="">
    </div>

</template>

<script>
     import les from "suziyoudian-test"
    export default {
        name: "canvas",
        data(){
            return {
                url:""
            }
        },
        components:{

        },
        mounted() {
            console.log(123)
            console.log(les)
        }
    }
</script>

<style scoped>

</style>
