/*
 * @Author: yangliu 
 * @Date: 2019-03-08 14:45:37 
 * @Last Modified by: yangliu
 * @Last Modified time: 2019-03-13 23:20:56
 * @Last Modified by: yangliu
 * @Last Modified time: 2019-03-22 10:46:46
 * @params : routes
 * title=>当前路由title
 * requireAuth=>当前路由是否需要登录认证
 * view-id=>当前路由id，用于根据用户id匹配路由id
 */
import app from '../app';
import dynamic from 'dva/dynamic';

export default [
    {
        name:'登录',
        path:'/login',
        title:"用户登录",
        requireAuth:false,
        view_id:"login",
        component: dynamic({
            app,
            models: () => [import('models/userInfo.js')],
            component: () => import('page/login/index.jsx'),
        })
    },
    {
        name:'主页',
        path:'/home',
        title:"首页",
        view_id:"main",
        requireAuth:true,
        component: dynamic({
            app,
            models: () => [import('models/userInfo.js')],
            component: () => import('page/home/home.jsx'),
        }),
        children: [
            {
                name:'试题管理',
                title:"添加试题",
                requireAuth:true,
                view_id:"main-addQuestions",
                path:'/home/addTest',
                component: dynamic({
                    app,
                    models: () => [import('models/addTests.js')],
                    component: () => import('page/testManage/addTest/addtest.jsx')})
            },
            {
                name:'试题管理',
                title:"试题分类",
                requireAuth:true,
                path: '/home/WatchQuestions',
                view_id:"main-questionsType",
                component: dynamic({
                    app,
                    component: () => import('page/testManage/classifyTest'),
                }),
            },
            {
                name:'用户管理',
                title:"添加用户",
                requireAuth:true,
                path:'/home/addUser',
                view_id:"main-addUser",
                component: dynamic({
                    app,
                    component: () => import('page/userManage/AddUser'),
                }),
            },
            {
                name:'用户管理',
                title:"添加api接口",
                requireAuth:true,
                path:'/home/addapiLimit',
                view_id:"main-addUser",
                component: dynamic({
                    app,
                    component: () => import('page/userManage/AddApiLimit'),
                }),
            },
            {
                name:'用户管理',
                title:"添加身份",
                requireAuth:true,
                path:'/home/addIden',
                view_id:"main-addUser",
                component: dynamic({
                    app,
                    component: () => import('page/userManage/AddIdentity'),
                }),
            },
            {
                name:'用户管理',
                title:"添加视图",
                requireAuth:true,
                path:'/home/addViewlinie',
                view_id:"main-addUser",
                component: dynamic({
                    app,
                    component: () => import('page/userManage/AddViewLimit'),
                }),
            },
            {
                name:'用户管理',
                title:"设置身份api",
                requireAuth:true,
                path:'/home/setIdenApi',
                view_id:"main-addUser",
                component: dynamic({
                    app,
                    component: () => import('page/userManage/SetIdentityApi'),
                }),
            },
            {
                name:'用户管理',
                title:"设置身份视图",
                requireAuth:true,
                path:'/home/setIdenView',
                view_id:"main-addUser",
                component: dynamic({
                    app,
                    component: () => import('page/userManage/SetViewLimit'),
                }),
            },
            {
                name:'用户管理',
                title:"用户展示",
                view_id:"main-showUser",
                requireAuth:true,
                path:'/home/userInfo',
                component: dynamic({
                    app,
                    models: () => [import('models/userInfo.js')],
                    component: () => import('page/userManage/info'),
                }),
            },
            {
                name:'试题管理',
                title:"查看试题",
                requireAuth:true,
                path: '/home/watchTest',
                view_id:"main-watchQuestions",
                component: dynamic({
                    app,
                    models: () => [import('models/addTests.js')],
                    component: () => import('page/testManage/watchTest/index'),
                }),
            },
            {
                name:'考试管理',
                title:"添加考试",
                requireAuth:true,
                view_id:"main-addExam",
                path: '/home/addexam',
                component: dynamic({
                    app,
                    component: () => import('page/examManage/addExam'),
                }),
            },
            {
                name:'班级管理',
                title:"班级管理",
                requireAuth:true,
                view_id:"main-addExam",
                path: '/home/classify',
                component: dynamic({
                    app,
                    component: () => import('page/classifyManage/classify'),
                }),
            },
            {
                name:'班级管理',
                title:"学生管理",
                requireAuth:true,
                path: '/home/student',
                view_id:"main-addExam",
                component: dynamic({
                    app,
                    models: () => [import('models/addTests.js')],
                    component: () => import('page/classifyManage/student.jsx'),
                }),
            },
            {
                name:'班级管理',
                title:"教室管理",
                requireAuth:true,
                path: '/home/classroom',
                view_id:"main-addExam",
                component: dynamic({
                    app,
                    models: () => [import('models/addTests.js')],
                    component: () => import('page/classifyManage/classroom.jsx'),
                }),
            },
            {
                title:"糟糕了",
                view_id:"main",
                path: '/home/noIdentity',
                component: dynamic({
                    app,
                    component: () => import('page/noIdentity'),
                }),
            }
        ]
    },
    
]
