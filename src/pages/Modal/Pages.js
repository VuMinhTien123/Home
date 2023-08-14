import React from 'react'
import { AiOutlineDown} from 'react-icons/ai'
import { MdArrowRight} from 'react-icons/md'
import './Page.scss'
import { Popover } from 'antd';

const Pages = () => {
  const content = (
    <div className='Page-child'>
      <p>About Us </p>
      <p>Contact Us</p>
      <p>FAQs</p>
      <p>Gallery</p>
      <p>Page Fullwidth</p>
      <p>Page + Video Background Header</p>
      <p>Page Right Sidebar</p>
      <p>Page Left Sidebar</p>
    </div>
  );
  return (
    <div>
      <Popover content={content}>
    <p className='Page' >Pages <AiOutlineDown style={{fontSize: '10px'}} /></p>
  </Popover>
    </div>
  )
}

export default Pages
