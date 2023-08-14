import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import {CiCalendarDate} from 'react-icons/ci'
import {FiShoppingCart} from 'react-icons/fi'
import {AiOutlineSortDescending, AiOutlineDown} from 'react-icons/ai'
import { UnorderedListOutlined } from '@ant-design/icons';
import './Header.scss'
import Home from '../../pages/Modal/Home'
import { Badge } from 'antd'
import Tour from '../../pages/Modal/Tour'
import Booking from '../../pages/Modal/Booking'
import Destinations from '../../pages/Modal/Destinations'
import Pages from '../../pages/Modal/Pages'
import Shop from '../../pages/Modal/Shop'
import Shortcodes from '../../pages/Modal/Shortcodes'
import Blogs from '../../pages/Modal/Blogs'
import { Input, Space, Button } from 'antd'
import { useForm } from 'react-hook-form'
import InputPage from '../../pages/input/InputPage'



const Header = (props) => {
  
    const {control } = useForm({})
    const [date, setDate] = useState('Any Month')
    const [sort, setSort] = useState('Sort By Date')
  return (
   <header>
     <div className='header'>
     <div className='header-top'>
        <div className='header-top-container'>
         <div className='header-top-container-logo'>GTour</div>
       <div className='header-element'>
       <span><Home /></span>
       <span><Tour /></span>
       <span><Booking /></span>
       <span><Destinations /></span>
       <span><Pages /></span>
       <span><Blogs /></span>
       <span><Shortcodes /></span>
       <span><Shop /></span>
      <div>
        <UnorderedListOutlined style={{color: '#fff', cursor: 'pointer'}} />
      </div>
      <div>
      <Badge
            className='header-element-icon'
            count = {0}
            size={'small'}
            showZero
            >
              <FiShoppingCart className='header-element-icon-cart' />
            </Badge>
      </div>
        </div>
       </div>
     </div>
      <ReactPlayer
      playing= {true}
      loop={true}
      width= '100%'
      height='100%'
      volume={0}
      muted= {false}
      // url='https://vimeo.com/273686020'
      url='https://youtu.be/JPe2mwq96cw'
      className = 'videoIntro'
       />
      <div className='infoIntro'>
        <h1 className='headingIntro'>
        Where do you want to go?
        </h1>
        <p className='overviewIntro'>Trips, experiences, and places. All in one service.</p>

        <form className='form'>
        <div className='field'>
        <InputPage
        className = 'input'
        id = 'fullname'
        type='text'
        placeholder='Destination, city'
        enterButton
        control = {control} 
        />
        <InputPage
        className = 'input'
        id = 'fullname'
        type='text'
        placeholder='Any Month'
        control = {control} 
        value = {date}
        enterButton ={<CiCalendarDate />}
        />
        <InputPage
        className = 'input'
        id = 'fullname'
        type='text'
        placeholder='Sort By Date'
        control = {control} 
        value = {sort}
        enterButton ={<AiOutlineSortDescending />}
        />
          <Space >
    <Button type="#FF4A52" className='btn-btn'>Search</Button>
 
  </Space>
);     
        </div>
        </form>
        <div className='header-text'>
          <p> <AiOutlineDown style={{fontSize: '14px'}} />  Advanced Search</p>
        </div>
      </div>
    </div>
   </header>
  )
}

export default Header
