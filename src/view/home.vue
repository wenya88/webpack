<template>
    <div>
        {{count}}
        <div style="color:#F56C6C;display:block;"><i class="el-icon-warning"></i> <router-link :to="{path:'/404'}">404错误页面</router-link></div>
        <div class="navMenu">
            <span>
                <router-link :to="{path:'/collection'}">我的收藏</router-link>
            </span>
            <span>
                <router-link :to="{path:'/trace'}">我的主页</router-link>
            </span>
        </div>
        {{routerData}}
        <router-view></router-view>
    </div>
</template>
<script>
import {outherRouter} from '@/router/index.js'
export default {
    data(){
        return{
           routerData:[],
           count:0
        }
    },
    watch:{
        '$route'(to,from){
            console.log(to)
        }
    },
    mounted(){
        let routeData=[];
        outherRouter.forEach(val => {
           if(val.name!=undefined){
               routeData.push(val)
           }
        });
        this.routerData=routeData;
        this.setInter();
    },
    methods:{
        setInter(){
            let add=setInterval(()=>{
                if(this.count<10){
                    this.count++
                }else{
                    clearInterval(add);
                    let minus=setInterval(()=>{
                        if(this.count>0){
                            this.count--
                        }else{
                            clearInterval(minus)
                            this.setInter();
                        }
                    },500)
                }
            },500)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/css/base.scss';
div:nth-of-type(1){
     padding-top:$p10;
}
.navMenu{
    display:block;
    border:1px solid #ddd;
    border-left:0px;
    border-right:0px;
    line-height:34px;
    margin-top:20px;
    &>span{
        width:48%;
        display:inline-block;
        text-align:center;
    }
}
</style>

