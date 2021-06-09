/**
 * 底部操作栏，用于查看影响面、变更节点
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { Tooltip, Tabs } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../hooks';
import {
  toggleCollapseBottomContainer,
  isBottomContainerCollapse,
} from '../reducer/layout';

import './BottomContainer.less';

const { TabPane } = Tabs;

export default function IndexPage() {
  const isCollapse = useAppSelector(isBottomContainerCollapse);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`page-dag-editor-bottom-container ${
        isCollapse ? 'is-collapse' : ''
      }`}
    >
      <Tabs
        tabBarExtraContent={
          <Tooltip title={`${isCollapse ? '展开' : '折叠'}`}>
            <div className="icon-box">
              <MenuOutlined
                onClick={() => {
                  dispatch(toggleCollapseBottomContainer());
                }}
              />
            </div>
          </Tooltip>
        }
      >
        <TabPane tab="影响面" key="fluence">
          影响面
        </TabPane>
        <TabPane tab="变更节点" key="changeNode">
          变更节点
        </TabPane>
      </Tabs>
    </div>
  );
}
