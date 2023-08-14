import React from 'react'
import { AiOutlineDown} from 'react-icons/ai'
import './Page.scss'
import { Popover } from 'antd';

const Shop = () => {
  const content = (
    <div className='Page-child'>
      <p>Shop Fullwidth</p>
      <p>Shop Sidebar</p>
      <p>Single Product Fullwidth</p>
      <p>Single Product With Sidebar</p>

    </div>
  );
  return (
    <div>
      <Popover content={content}>
    <p className='Page' >Shop <AiOutlineDown style={{fontSize: '10px'}} /></p>
  </Popover>
    </div>
  )
}

export default Shop
