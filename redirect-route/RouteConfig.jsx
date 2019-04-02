/*
 * @Author: wangjinshen 
 * @Date: 2019-04-01 08:31:29 
 * @Last Modified by: wangjinshen
 * @Last Modified time: 2019-04-01 08:32:16
 */

import Home from 'view/home/index'
import Login from 'view/login/index'
import ClassManage from 'view/home/ClassManage/index';

//面试管理
import InterviewManage from 'view/home/InterviewManage/index';
import MyInter from 'view/home/InterviewManage/myInter/index';
import InterList from 'view/home/InterviewManage/interList/index';
import InterInfo from 'view/home/InterviewManage/interinfo/index';


import ResumeManage from 'view/home/ResumeManage/index';
import UserManage from 'view/home/UserManage/index';
import TestManage from 'view/home/TestManage/index';
import TestClass from 'view/home/TestManage/TestClass/index';
import CreateTest from 'view/home/TestManage/CreateTest/index';
import InterviewManagement from 'view/home/TestManage/InterviewManagement/index';
import ShowMd from './../container/showMD/index';



const RouteConfig = [
    
    {
        title: "首页",
        path: "/Home",
        defaultRedirect: true,
        component: Home,
        children: [

            {
                key: "1",
                defaultRedirect: true,
                title: "班级管理",
                path: "/Home/class",
                component: ClassManage,
            },
            {
                key: "2",
                title: "面试管理",
                path: "/Home/interview",
                component: InterviewManage,
                children: [
                    {
                        key: "21",
                        title: "我的面试",
                        path: "/Home/interview/myinter",
                        component: MyInter,
                    },
                    {
                        key: "22",
                        title: "面试列表",
                        path: "/Home/interview/interList",
                        component: InterList,
                    },
                    {
                        key: "23",
                        title: "面试详情",
                        path: "/Home/interview/InterInfo",
                        component: InterInfo,
                    }
                ]
            },
            {
                key: "3",
                title: "简历管理",
                path: "/Home/resume",
                component: ResumeManage,
            }
            ,
            {
                key: "4",
                title: "用户管理",
                path: "/Home/user",
                component: UserManage,
            },
            {
                key: "sub1",
                title: "试题管理",
                path: "/Home/test",
                component: TestManage,
                children: [
                    {
                        key: "5",
                        title: "试题分类",
                        path: "/Home/test/class",
                        component: TestClass,
                    },
                    {
                        key: "6",
                        title: "创建试题",
                        path: "/Home/test/create",
                        component: CreateTest,
                    },
                    {
                        key: "7",
                        title: "试题管理",
                        path: "/Home/test/Management",
                        component: InterviewManagement,
                    }
                ]
            },
            {
                path: "/Home",
                redirect: "/Home/class",
            }
        ]
    },
    {
        title: "登陆",
        path: "/Login",
        component: Login,
    },
    {
        title:"详情",
        path: "/details",
        component: ShowMd,
    }, {
        path: "/",
        redirect: "/Login"
    }
]
export default RouteConfig;