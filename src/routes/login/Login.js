import React,{useState} from "react";
import SelfCss from "./Login.less";
import { Input, Checkbox } from 'antd';
import { UnlockOutlined, UserOutlined } from '@ant-design/icons';


export default function Login(props) {

    const [checkboxValue, setCheckboxValue] = useState(false);
    function onChange(e) {
        if(checkboxValue){
            setCheckboxValue(false);
        }else{
            setCheckboxValue(true);
        }
        
    }

    return (
        <div>
            <div style={{ width: '24%', position: 'absolute', top: '25%', left: '38%' }} className={SelfCss.borderStyle}>
                {/* <img src='file:///D:/messy-project/messy-project-react/src/assets/loginUser.png'></img> */}
                <div style={{ display: 'flex', justifyContent: ' center' }}>
                    <div style={{ backgroundColor: '#40a9ff', border: '1px solid #40a9ff', borderRadius: '50%', height: '55px', width: '55px', justifyContent: 'center', marginBottom: '30px', color: '#fff', padding: '10px', textAlign: 'center', fontSize: '25px' }}>脖</div>
                </div>
                <Input style={{}} size="large" placeholder="账号" prefix={<UserOutlined />} />
                <br />
                <Input.Password prefix={<UnlockOutlined />} className={SelfCss.passWorldStyle} style={{ marginTop: '10px' }} placeholder="密码" />
                <div style={{ display: 'flex' }}>
                    <Checkbox checked={checkboxValue} onChange={onChange} style={{ marginTop: '5px' }}></Checkbox>
                    <div onClick={()=>onChange()} style={{ color: '#40a9ff', fontFamily: 'Helvetica Neue', flex: 1, marginTop: '5px', marginLeft: '5px' }}>记住我</div>
                    <div style={{ color: 'red', fontFamily: 'Helvetica Neue', justifyContent: 'flex-end', flex: 1, display: 'flex', margin: '5px 5px 0px 0px' }}>忘记登录密码</div>
                </div>
                <div style={{ backgroundColor: '#40a9ff', padding: '8px', textAlign: 'center', marginTop: '25px', borderRadius: '3px', color: '#fff' }}>登录</div>
                <div style={{ color: '#c3bebe', fontFamily: 'Helvetica Neue', flex: 1, marginTop: '5px' }}>还没有账号？<span style={{ color: '#40a9ff' }}>立即注册</span></div>
            </div>
        </div >
    );
}
