import React, { useState, useEffect } from 'react'

import { Tabs, ListView, PullToRefresh, Icon, Badge, Flex } from 'antd-mobile';
import PartyCss from "./listViewExample.less"

import { Skeleton } from 'antd';
import 'antd/dist/antd.css';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

let site = 'szxapp';

const availHeight = window.screen.availHeight;
const availWidth = window.screen.availWidth;

let rDataTemp = [
    { "is_default_null_rdata": "true" },
    { "is_default_null_rdata": "true" },
    { "is_default_null_rdata": "true" },
    { "is_default_null_rdata": "true" },
    { "is_default_null_rdata": "true" }
];
let tabDateTemp = [{ title: <div style={{ background: "#FFFFFF", height: "30px", width: "80px", padding: "0px 0px 0px 7px", borderRadius: "3px", lineHeight: "30px", marginTop: "15px", marginBottom: "15px" }}></div>, sub: 1 },
{ title: <div style={{ background: "#FFFFFF", height: "30px", width: "80px", padding: "0px 0px 0px 7px", borderRadius: "3px", lineHeight: "30px", marginTop: "15px", marginBottom: "15px" }}></div>, sub: 2 },
{ title: <div style={{ background: "#FFFFFF", height: "30px", width: "80px", padding: "0px 0px 0px 7px", borderRadius: "3px", lineHeight: "30px", marginTop: "15px", marginBottom: "15px" }}></div>, sub: 3 },
{ title: <div style={{ background: "#FFFFFF", height: "30px", width: "80px", padding: "0px 0px 0px 7px", borderRadius: "3px", lineHeight: "30px", marginTop: "15px", marginBottom: "15px" }}></div>, sub: 4 }, { title: <div style={{ background: "#FFFFFF", height: "30px", width: "80px", padding: "0px 0px 0px 7px", borderRadius: "3px", lineHeight: "30px", marginTop: "15px", marginBottom: "15px" }}></div>, sub: 4 },]

export default function Party(props) {
    //设置数据源
    let [list, setlist] = useState(rDataTemp);
    let [dataSource, setdataSource] = useState(ds);
    let [hasMore, sethasMore] = useState(true);

    let [pageSize, setPageSize] = useState(0);
    let [tabStart, setTabStart] = useState(445);
    let [tabsThree, setTabsThree] = useState(tabDateTemp);



    useEffect(() => {

    }, [])


    //上拉加载
    function onEndReached(v, tab) {

    }

    //下拉刷新
    function onRefresh(v, tab) {

    }

    //列表
    function tabsOnChangeThree(v) {
        
    }

    let search_one_a=()=>{

    }
    
    return (
        <div className={PartyCss.div_less_one}>
            <div className={PartyCss.div_5}>
                <Flex>
                    <Tabs
                        key="444"
                        initialPage={0}
                        tabs={tabsThree}
                        onTabClick={v => tabsOnChangeThree(v)}
                        onChange={v => tabsOnChangeThree(v)}
                        tabBarBackgroundColor="#eeeeee"
                        tabBarUnderlineStyle={{ width: '100%', paddingLeft: '0px', border: '1px #eeeeee solid' }}
                        renderTabBar={props => {
                            return (
                                <div style={{ paddingRight: '40px' }}>
                                    <Tabs.DefaultTabBar {...props} page={3.5} />
                                </div>
                            )
                        }}
                        tabBarInactiveTextColor="#929292"
                    >
                        {/* {listView_one} */}
                    </Tabs>
                    <div style={{
                        width: "40px",
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        zIndex: "5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#eeeeee",
                        color: " #bbb",
                        height: "55px",
                    }}>
                        <div onClick={()=>search_one_a()}>
                            <Icon type="search" size='sm' />
                        </div>
                    </div>
                </Flex>
            </div>
        </div>
    )
}
