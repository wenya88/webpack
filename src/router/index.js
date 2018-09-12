
const Routes=[
    {
        path:'/taskList',
        name:'taskList',
        title:'任务列表',
        component:(resolve)=>require(['../view/taskList.vue'],resolve)
    },
    {
        path: '/',  
        redirect: '/taskList'  
    },
    // {
    //     paht:'/',
    //     name:'childrenMenu',
    //     title:'二级菜单',
    //     component:resolve=>{require([''],resolve);}
    // }
]

export default Routes;