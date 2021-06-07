/**
 * 底部操作栏，用于查看影响面、变更节点
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { Input, Tabs } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import './BottomContainer.less';

const { TabPane } = Tabs;

export default function IndexPage() {
  return (
    <div className="page-dag-editor-bottom-container">
      <Tabs
        tabBarExtraContent={
          <div>
            <MenuOutlined />
          </div>
        }
      >
        <TabPane tab="影响面" key="fluence">
          影响面
        </TabPane>
        <TabPane tab="变更节点" key="fluence">
          变更节点
        </TabPane>
      </Tabs>
    </div>
  );
}
