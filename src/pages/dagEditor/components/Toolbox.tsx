import React from 'react';
import { useSelector } from 'react-redux';
import { Tooltip } from 'antd';
import { RedoOutlined, UndoOutlined } from '@ant-design/icons';

import './Toolbox.less';

const tools = [
  {
    desc: '重做',
    icon: <RedoOutlined />,
  },
  {
    desc: '撤销',
    icon: <UndoOutlined />,
  },
];

export default function DAGEditorPage() {
  return (
    <div className="page-dag-editor-toolbox">
      <span className="title">工具栏</span>
      <span>
        {tools.map((tool) => {
          return (
            <span className="toolbox-container">
              <Tooltip placement="bottom" title={tool.desc}>
                {tool.icon}
              </Tooltip>
            </span>
          );
        })}
      </span>
    </div>
  );
}
