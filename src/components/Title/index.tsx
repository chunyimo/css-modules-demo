import React from 'react';
import styles from './index.css';

const Title: React.FC<any> = (props) => {
  return (
    <div>
      <h1 className={styles.grayColor}>gray title</h1>
      <h1 className={styles.redColor}>red color</h1>
    </div>
  );
};

export default Title;
