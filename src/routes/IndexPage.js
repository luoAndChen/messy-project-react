import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button } from 'antd';
import { Link } from 'dva/router';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Link to={'/index/home'}>
        <Button>跳转</Button>
      </Link>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
