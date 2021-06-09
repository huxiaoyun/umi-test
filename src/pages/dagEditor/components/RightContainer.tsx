/**
 * 右侧操作栏，用于多选
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Tabs, Tooltip } from 'antd';
import { MenuOutlined, PartitionOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../hooks';
import {
  toggleCollapseRightContainer,
  isRightContainerCollapse,
} from '../reducer/layout';

import './RightContaienr.less';

const { TabPane } = Tabs;
const { Search } = Input;

console.log('toggleCollapseRightContainer', toggleCollapseRightContainer);

export default function IndexPage() {
  const isCollapse = useAppSelector(isRightContainerCollapse);
  const dispatch = useAppDispatch();

  if (isCollapse) {
    return (
      <div className="page-dag-editor-right-container is-collapse">
        <Tooltip title={'批量操作'} placement="left">
          <div className="icon-box">
            <PartitionOutlined />
          </div>
        </Tooltip>
        <Tooltip title={'展开'} placement="left">
          <div
            className="icon-box"
            onClick={() => {
              dispatch(toggleCollapseRightContainer());
            }}
          >
            <MenuOutlined />
          </div>
        </Tooltip>
      </div>
    );
  }

  return (
    <div className="page-dag-editor-right-container">
      <Tabs
        tabBarExtraContent={
          <Tooltip title={'折叠'} placement="left">
            <div
              className="icon-box"
              onClick={() => {
                dispatch(toggleCollapseRightContainer());
              }}
            >
              <MenuOutlined />
            </div>
          </Tooltip>
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
