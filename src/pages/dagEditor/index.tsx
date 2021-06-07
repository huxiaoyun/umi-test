import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import MainContent from './components/MainContent';

import './index.less';

export default function DAGEditorPage() {
  return (
    <div className="page-dag-editor">
      <div className="page-dag-editor-top">
        <Header />
      </div>
      <div className="page-dag-editor-middle">
        <MainContent />
      </div>
    </div>
  );
}

// 数据流设计
// {
//   graph: {
//     data: {

//     }
//   },
//   rightContainer: {
//     isCollapse: true, // 是否折叠
//   },
//   bottomContainer: {
//     isCollapse: true, // 是否折叠
//   },

// }

// api 设计
// useSelectNode
// useSaveGraph
//
