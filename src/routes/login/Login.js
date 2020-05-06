import React, { useState, useEffect } from "react";
import { Button, InputItem } from 'antd-mobile'
import { Link } from 'dva/router';
import SelfCss from "./Login.less";

export default function Login(props) {

  const height = window.screen.availHeight;
  const width = window.screen.availWidth;
  let [heightdiv, setHeightdiv] = useState(0);
  let [widthdiv, setWidthdiv] = useState(0);

  useEffect(() => {
    setHeightdiv(document.getElementById("div_one").offsetHeight);
    setWidthdiv(document.getElementById("div_one").offsetWidth);
  }, []);


  return (
    <div style={{ textAlign: 'center', margin: '0px 20px', }}>
      <img style={{ position: 'absolute', top: ' 0px', left: ' 0px', height: height, width: width, objectFit: 'cover', opacity: '0.9' }} src="../../../dist/fonts/nishuihan.jpg" alt="Smiley face" width="42" height="42"></img>
      <div>welcome!</div>
      <div id='div_one' style={{ position: 'absolute', top: (height - heightdiv) / 2 ,left:'30px'}}>
        <InputItem className={SelfCss.inputItemCss} type="text" >账号</InputItem>
        <InputItem className={SelfCss.inputItemCss_possword} type="password" placeholder="****" >密码</InputItem>
        <div style={{ display: 'flex' }}>
          <Link to='/index' style={{ flex: '1', margin: '20px 20px' }}>
            <Button >登录</Button>
          </Link>
          <Link to='/wjy/home' style={{ flex: '1', margin: '20px 20px' }}>
            <Button>注册</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
