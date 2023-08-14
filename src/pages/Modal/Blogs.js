import React from 'react'
import { AiOutlineDown} from 'react-icons/ai'
import { MdArrowRight} from 'react-icons/md'
import './Page.scss'
import { Popover } from 'antd';

const Blogs = () => {
  const content = (
    <div className='Page-child'>
      <p>Blog Right Sidebar </p>
      <p>Blog Left Sidebar</p>
      <p>Blog Fullwidth</p>
      <p>Blog Grid Right Sidebar</p>
      <p>Blog Grid Left Sidebar</p>
      <p>Blog Grid Fullwidth</p>
      <p>Blog Full + Grid Right Sidebar</p>
      <p>Blog Full + Grid Left Sidebar</p>
      <p>Blog Full + Grid Fullwidth</p>
    </div>
  );
  return (
    <div>
      <Popover content={content}>
    <p className='Page' >Blogs <AiOutlineDown style={{fontSize: '10px'}} /></p>
  </Popover>
    </div>
  )
}

export default Blogs
