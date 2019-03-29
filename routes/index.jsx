/*
 * @Author: yangliu 
 * @Date: 2019-03-13 20:01:57 
 * @Last Modified by: wangjinshen
 * @Last Modified time: 2019-03-15 21:06:24
 */
import React, { Component } from 'react';
import RouterView from './routes-map';
import Config from './routes-route';
import { HashRouter as Router } from 'dva/router';

class Root extends Component {
  render() {
    return <Router>
        <RouterView defaultRoutes={Config}></RouterView>
    </Router>
  }
}
function RouterConfig() {
  return <Root></Root>;
}

export default RouterConfig;
