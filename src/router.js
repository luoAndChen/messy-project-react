import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';


//登录
import Login from './routes/login/Login';

import Index from './routes/index/Index'

//path前缀，按应用区分
const APP_LOGIN = "/login"


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path={APP_LOGIN+"/index"} exact component={Login} />
        <Route path={"/index/home"} exact component={Index} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
