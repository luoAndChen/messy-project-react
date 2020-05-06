import React from 'react'
import { Button } from 'antd-mobile'
import { Link } from 'dva/router';

export default function Hello(props){

  return (
    <div style={{textAlign:'center'}}>
      <h1>welcome!</h1><br/>
      <Link to='/wjy/home'>
        <Button>跳转</Button>
      </Link>
    </div>
  )
}