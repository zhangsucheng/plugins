<template>
    <div>
        <span style="cursor: pointer" @click="goback">返回</span>
        <div>
            <component  :is="currentCom"></component>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wrap",
        data() {
            return {

            }
        },
        computed: {
            currentCom(){
                console.log(this.$route)
                let item = "";
                try {
                    item =  () => import('./'+ this.$route.query.name +'/index')
                } catch (e) {
                    item =  () => import('./lost')
                }
                return item
            }
        },
        methods:{
            goback(){
                this.$router.push({
                    name:"welcome"
                })
            }
        }
    }
</script>

<style scoped>

</style>
