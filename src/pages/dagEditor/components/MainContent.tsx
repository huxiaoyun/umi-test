/**
 * 中间主视图区，包括图编顶部操作栏、右侧操作栏、底部操作栏
 */
import React from 'react';
import { useSelector } from 'react-redux';
import Toolbox from './Toolbox';
import DagGraphEditor from './DagGraphEditor';
import RightContaienr from './RightContainer';
import BottomContainer from './BottomContainer';

import './MainContent.less';

export default function IndexPage() {
  return (
    <div className="page-dag-editor-main-content">
      <div className="middle-container">
        <div className="dag-main-editor">
          <div className="top-container">
            <Toolbox />
          </div>
          <DagGraphEditor />
        </div>
        <div className="right-container">
          <RightContaienr />
        </div>
      </div>
      <div className="bottom-container">
        <BottomContainer />
      </div>
    </div>
  );
}
