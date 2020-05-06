import React, { useState, useEffect } from "react";
import { TabBar, ListView } from 'antd-mobile'
import { Link } from 'dva/router';
import SelfCss from "./Index.less";
import ListViewExample from "./listViewExample";
let tabBarItem=TabBar.Item;

export default function Index(props) {

 


  return (
    <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        tabBarPosition="bottom"
        
        prerenderingSiblingsNumber={0}
      >
        <tabBarItem
          title="Life"
          key="Life"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
          />
          }
          
          badge={1}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          {/* <ListViewExample /> */}
        </tabBarItem>
        <tabBarItem
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
            />
          }
          title="Koubei"
          key="Koubei"
          badge={'new'}
         
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
          {/* <ListViewExample /> */}
        </tabBarItem>
        <tabBarItem
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
            />
          }
          title="Friend"
          key="Friend"
          dot
          // selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
        >
           {/* <ListViewExample /> */}
        </tabBarItem>
        <tabBarItem
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="My"
          key="my"
         
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
        >
          {/* <ListViewExample /> */}
        </tabBarItem>
      </TabBar>
    </div>
  );
}
