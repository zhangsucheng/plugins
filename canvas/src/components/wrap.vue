<template>
    <div>
        <div class="wrap-title">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item >
                    <el-button type="default" icon="el-icon-finished" @click="goback">首页</el-button>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <el-button type="success" plain disabled>{{name}}</el-button>
                </el-breadcrumb-item>
            </el-breadcrumb>

        </div>
        <div class="wrap-content">
            <component  :is="currentCom"></component>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wrap",
        data() {
            return {
                name:""
            }
        },
        computed: {
            currentCom(){
                let item = "";
                try {
                    item =  () => import('./'+ this.$route.query.path)

                } catch (e) {
                    item =  () => import('./lost')
                }
                return item
            }
        },
        mounted() {
            this.name = this.$route.query.alias
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
.wrap-title{
    text-align: left;
    margin-bottom: 10px;
}
.wrap-content{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>
