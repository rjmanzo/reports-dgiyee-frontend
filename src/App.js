import React from 'react';
import { Menu, Icon } from 'antd';
import { Row, Col } from 'antd';

import DashboardMenu from './components/dashboard_menu';
import DashboardList from './components/dashboard_list';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col span={6}><DashboardMenu /></Col>            
          <Col span={18}><DashboardList /></Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
