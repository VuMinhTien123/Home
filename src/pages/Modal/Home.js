import React from 'react'
import { AiOutlineDown} from 'react-icons/ai'
import './Page.scss'
import { Popover } from 'antd';

const Home = () => {
  const content = (
    <div className='Page-child'>
      <p>Home 1 - Background Image</p>
      <p>Home 2 - Youtobe Video</p>
      <p>Home 3 - Google Inspired</p>
      <p>Home 4 - Travel Site</p>
    </div>
  );
  return (
    <div>
      <Popover content={content}>
    <p className='Page' >Home <AiOutlineDown style={{fontSize: '10px'}} /></p>
  </Popover>
    </div>
  )
}

export default Home
