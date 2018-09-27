<template>
    <div>我的主页
        <p><router-link :to="{name:'member'}">成员管理</router-link></p>
        <router-view></router-view>
    </div>
</template>
