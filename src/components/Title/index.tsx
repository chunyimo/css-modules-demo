import React from 'react';
// @ts-ignore
import { grayColor, redColor } from './index.css';

const Title: React.FC<any> = (props) => {
  return (
    <div>
      <h1 className={grayColor}>gray title</h1>
      <h1 className={redColor}>red color</h1>
    </div>
  );
};

export default Title;
