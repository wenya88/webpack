
const page404=[
    {
        path:'/404',
        name:'404',
        title:'错误404',
        component:(resolve)=>require(['../view/404.vue'],resolve)
    }
]
const outherRouter=[
    {
        path:'/home',
        name:'home',
        title:'主页',
        component:(resolve)=>require(['../view/home'],resolve),
        children:[
            {
                path:'/collection',
                name:'collection',
                title:'我的收藏',
                component:(resolve)=>require(['../view/collection.vue'],resolve)
            },{
                path:'/trace',
                name:'trace',
                title:'我的主页',
                component:(resolve)=>require(['../view/trace.vue'],resolve)
            }
        ]
    },
    {
        path: '/',
        redirect: '/home'  
    }
]
const Routes=outherRouter.concat(page404)
export {
    Routes,
    page404
};