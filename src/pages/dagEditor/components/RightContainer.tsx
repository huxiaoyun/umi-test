/**
 * 右侧操作栏，用于多选
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { Input, Tabs } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import './RightContaienr.less';

const { TabPane } = Tabs;
const { Search } = Input;

export default function IndexPage() {
  return (
    <div className="page-dag-editor-right-container">
      <Tabs
        tabBarExtraContent={
          <div>
            <MenuOutlined />
          </div>
        }
      >
        <TabPane tab="批量操作" key="batchOperate">
          <div className="content">
            <Search
              placeholder="input search text"
              onSearch={() => {}}
              enterButton
            />
            <div className="node-list">节点列表，选中节点自动排列在前面</div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
