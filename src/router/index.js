
const page404=[
    {
        path:'/404',
        name:'404',
        meta:'错误404',
        component:(resolve)=>require(['../view/404.vue'],resolve)
    }
]
const outherRouter=[
    {
        path:'/403',
        name:'403',
        meta:'错误403',
        component:(resolve)=>require(['../view/404.vue'],resolve)

    },
    {
        path:'/home',
        name:'home',
        meta:'主页',
        component:(resolve)=>require(['../view/home'],resolve),
        children:[
            {
                path:'/collection',
                name:'collection',
                meta:'我的收藏',
                component:(resolve)=>require(['../view/collection.vue'],resolve)
            },{
                path:'/trace',
                name:'trace',
                meta:'我的主页',
                component:(resolve)=>require(['../view/trace.vue'],resolve),
                children:[
                    {
                        path:'/member',
                        name:'member',
                        meta:'成员管理',
                        component:(resolve)=>require(['../view/member.vue'],resolve)
                    }
                ]
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
    outherRouter,
    page404
};