import React from 'react'
import { AiOutlineDown} from 'react-icons/ai'
import './Page.scss'
import { Popover } from 'antd';

const Shortcodes = () => {
  const content = (
    <div className='Page-child'>
      <p>Accordion & Toggles</p>
      <p>Alert Boxes</p>
      <p>Animated Content</p>
      <p>Buttons & Social Icons</p>
      <p>Columns</p>
      <p>Google Maps</p>
      <p>Image Frame & Animation</p>
      <p>Image Teasers</p>
      <p>Pricing Tables</p>
      <p>Tabs</p>
    </div>
  );
  return (
    <div>
      <Popover content={content}>
    <p className='Page' >Shortcodes <AiOutlineDown style={{fontSize: '10px'}} /></p>
  </Popover>
    </div>
  )
}

export default Shortcodes
