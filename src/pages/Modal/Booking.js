import React from 'react'
import { AiOutlineDown} from 'react-icons/ai'
import { MdArrowRight} from 'react-icons/md'
import './Page.scss'
import { Popover } from 'antd';

const Booking = () => {
  const content = (
    <div className='Page-child'>
      <p>Online Payment for Booking <MdArrowRight /> </p>
      <p>Custom Booking Form  <MdArrowRight /></p>
      <p>Tour Durations  <MdArrowRight /></p>
      <p>Custom Booking URL for Affiliate Tour</p>
      <p>Custom Booking using custom HTML & Shortcod</p>
      <p>Header Options  <MdArrowRight /></p>
      <p>Layout Options  <MdArrowRight /></p>
    </div>
  );
  return (
    <div>
      <Popover content={content}>
    <p className='Page' >Booking <AiOutlineDown style={{fontSize: '10px'}} /></p>
  </Popover>
    </div>
  )
}

export default Booking
