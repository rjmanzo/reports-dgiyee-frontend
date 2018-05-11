import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import './index.css';
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Dashboard from './App';
import DashboardList from './components/dashboard_list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>    
        <div>
        <Switch>       
            <Route path="/list" component={DashboardList} />
            <Route path="/" component={Dashboard} />
        </Switch>
        </div>
</BrowserRouter>,
 
    document.getElementById('root'));
registerServiceWorker();
