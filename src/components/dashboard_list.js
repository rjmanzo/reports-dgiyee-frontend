import React from 'react';
import { Card } from 'antd';

const tabList = [{
  key: 'tab1',
  tab: 'tab1'
} ];

const contentList = {
  tab1: <p>Aca ba el listado </p>
};

class DashboardList extends React.Component {
    state = {
      key: 'tab1'
    }
    onTabChange = (key, type) => {
      console.log(key, type);
      this.setState({ [type]: key });
    }

    render() {
      return (
        <div>
          <Card
            style={{ width: '100%' }}
            tabList={tabList}
            onTabChange={(key) => { this.onTabChange(key, 'key'); }}
          >
            {contentList[this.state.key]}
          </Card>
        </div>
      );
    }
  }





export default DashboardList;