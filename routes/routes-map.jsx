/*
 * @Author: skk 
 * @Date: 2019-03-13 18:37:07 
 * @Last Modified by: skk
 * @Last Modified time: 2019-03-22 11:38:52
 */
import { isLogin } from "utils"
import {sessionGet} from "utils/Session"
import React, { Component } from 'react'
import { Route, Switch } from "dva/router"
import { RedirectRoute,LoginRoute,NoneIdentity} from "components/router"

class RouterView extends Component {
    render() {
        const { defaultRoutes, routes } = this.props;
        const router = routes === undefined ? defaultRoutes : routes
        return <Switch>
            {
                router.length && router.map((itm, ind) => {
                    if (!itm.component) return false
                    // let AuthRoute=AuthHOCRoute(itm)
                    // return <AuthHOCRoute/>
                    //判断路由页面是否需要认证登录
                    let requireAuth=itm.requireAuth
                    //获取当前用户可浏览的的view——id
                    let userIdentityArr=sessionGet("userIdentityArr")?sessionGet("userIdentityArr"):[]
                    //遍历的路由组件
                    let CurRoute = <Route
                        key={ind}
                        path={itm.path}
                        render={(api) => {
                            document.title = itm.title || "无标题"
                            return <itm.component routes={itm.children} {...api}></itm.component>
                        }}
                    />
                    
                    // console.log(userIdentityArr.includes(itm.view_id),CurRoute)
                    return !requireAuth?CurRoute:(!isLogin()?<LoginRoute path={itm.path} key={itm.path}/>:
                    (userIdentityArr.includes(itm.view_id))?CurRoute:<NoneIdentity path={itm.path} key={itm.path}/>)
                    /**
                     * 判断路由是否需要登录认证
                     * 不需要登录认证直接返回路由组件
                     * 需要登录认证则判断是否登陆
                     * 未登录返回登录页面路由
                     * 若登录判断当前用户是否能够访问当前路由，即当前路由是否在用户可视的路由id数组中
                     * 是则返回目标路由，否则定向到权限不足页面
                     */
                }).concat([RedirectRoute])
            }
        </Switch>
    }
}

export default RouterView;