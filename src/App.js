import React from 'react';
import Login from './components/Login';
import Form from './components/Form';
import './App.css';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter> {/* 以Hash 锚点 的方式 实现路由跳转 */}
          {/* Switch 组件用来 选择一个 Route 路由 */}
          <Switch>
              {/* 重定向组件 当用户访问 / 根目录的时候 自动跳转 到 /home */}
              <Redirect from={'/'} to={'/login'} exact />
              {/* 当用户 访问 /home 的时候渲染 Home 组件 */}
              <Route path={'/login'} exact component={Login} />
              <Route path={'/form'} exact component={Form} />
              {/* 定义 路由 携带 id 参数 */}
              {/* <Route path={'/product_detail/:id'} exact component={ProductDetail} />
              <Route path={'/about'} component={About} /> */}
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
