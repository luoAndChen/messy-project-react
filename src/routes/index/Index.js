import React from "react";
import SelfCss from "./Index.less";
import { Tabs, Button } from 'antd';

const { TabPane } = Tabs;


export default function Index(props) {



  return (
    <div className={SelfCss.cardContainer}>
      <Tabs type="card">
        <TabPane tab="发现音乐" key="1">
          <div className={SelfCss.TabsOneStyle}>
            <Tabs>
              <TabPane tab="推荐" key="1">Content of tab 1</TabPane>
              <TabPane tab="排行版" key="2">Content of tab 2</TabPane>
              <TabPane tab="歌单" key="3">Content of tab 3</TabPane>
              <TabPane tab="主播电台" key="4">Content of tab 3</TabPane>
              <TabPane tab="歌手" key="5">Content of tab 3 </TabPane>
              <TabPane tab="新叠上架" key="6">Content of tab 3</TabPane>
            </Tabs>
          </div>
        </TabPane>
        <TabPane tab="我的音乐" key="2">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabPane>
        <TabPane tab="朋友" key="3">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
        <TabPane tab="商城" key="4">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
        <TabPane tab="音乐人" key="5">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
        <TabPane tab="下载客户端" key="6">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
      </Tabs>
    </div>
  );
}

