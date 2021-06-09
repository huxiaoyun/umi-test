import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Popover } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import './Header.less';

export default function IndexPage() {
  return (
    <div className="page-dag-editor-header">
      <span className="logo">
        <img src="https://gw.alicdn.com/imgextra/i3/O1CN01Tv2uK91dT8Nu21p7Z_!!6000000003736-2-tps-330-164.png" />
      </span>
      <span className="middle-container">
        <span className="require-name">xxxx需求链路图</span>
        <Popover
          content={
            <div>
              <div>需求名：学习下</div>
              <div>负责人：xxx</div>
              <div>上线时间：2020-06-18</div>
            </div>
          }
          title="需求详情"
        >
          <QuestionCircleOutlined />
        </Popover>
      </span>

      <div className="operator-container">
        <Button type="primary">保存</Button>
      </div>
    </div>
  );
}
