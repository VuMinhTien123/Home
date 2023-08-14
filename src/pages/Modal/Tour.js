import React from 'react'
import { AiOutlineDown} from 'react-icons/ai'
import { MdArrowRight} from 'react-icons/md'
import './Page.scss'
import { Popover } from 'antd';

const Tour = () => {
  const content = (
    <div className='Page-child' >
      <p>Tour Classic Fullwidth <MdArrowRight /> </p>
      <p>Tour Classic Sidebar   <MdArrowRight /></p>
      <p>Tour Grid Fullwidth    <MdArrowRight /></p>
      <p>Tour Grid Sidebar      <MdArrowRight /></p>
      <p>Tour List Sidebar      <MdArrowRight /></p>
      <p>Tour Header Type       <MdArrowRight /></p>
      <p>Tour Categories        <MdArrowRight /></p>
    </div>
  );
  return (
    <div>
      <Popover content={content}>
    <p className='Page' >Tour <AiOutlineDown style={{fontSize: '10px'}} /></p>
  </Popover>
    </div>
  )
}

export default Tour
