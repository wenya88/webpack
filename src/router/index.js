
const Routes=[
    {
        path:'/home',
        name:'home',
        title:'主页',
        component:(resolve)=>require(['../view/home.vue'],resolve)
    },
    {
        path:'*',
        redirect:'home'
    },
    // {
    //     paht:'/',
    //     name:'childrenMenu',
    //     title:'二级菜单',
    //     component:resolve=>{require([''],resolve);}
    // }
]

export default Routes;