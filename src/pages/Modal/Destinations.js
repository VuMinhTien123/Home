import React from 'react'
import { AiOutlineDown} from 'react-icons/ai'
import './Page.scss'
import { Popover } from 'antd';

const Destinations = () => {
  const content = (
    <div className='Page-child'>
      <p>Destination Fullwidth</p>
      <p>Destination + Video Header</p>
      <p>Destination Right Sidebar</p>
      <p>Destination Left Sidebar</p>
      <p>Single Destination</p>
      <p>Single Destination + Video</p>
    </div>
  );
  return (
    <div>
      <Popover content={content}>
    <p className='Page' >Destinations <AiOutlineDown style={{fontSize: '10px'}} /></p>
  </Popover>
    </div>
  )
}

export default Destinations
