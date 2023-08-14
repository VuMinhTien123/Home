import React, { useState } from 'react'
import './Container.scss'
import { Rate } from 'antd';
import { AiOutlineDown} from 'react-icons/ai'

const Container = () => {
  const [value, setValue] = useState(4);

  return (
    <div className='container'>
      <div className='container-title'>
        <h1>Popular Destinations</h1>
        <p>World's best tourist destinations</p>
      </div>
      <div className='container-img'>
           
        <div className='container-imgText'>
        <img src='https://www.tripsavvy.com/thmb/FL7mwRma-nbD2Hf3410IWU6druI=/3870x2573/filters:fill(auto,1)/tokyo-skytree-in-orange-twilgiht-sky-815438026-5b928a8a46e0fb0024b0dcfc.jpg' />
        <p>Tokyo</p>
        </div>
        <div className='container-imgText'>
        <img src='https://tse3.mm.bing.net/th?id=OIP.lPDo9AogJl6Qvbq7r0kv4wHaE8&pid=Api&P=0&h=180' />
        <p>Seoul</p>
        </div>
        <div className='container-imgText'>
        <img src='https://milestomemories.com/wp-content/uploads/2020/06/paris-eiffel-tower-scaled.jpg' />
        <p>Paris</p>
        </div>
        <div className='container-imgText'>
        <img src='https://tse1.mm.bing.net/th?id=OIP.oZtvINwqmmv3yeQbtQ3YrwHaFK&pid=Api&P=0&h=180' />
        <p>London</p>
        </div>
      </div>
      <div className='container-title'>
        <h1>Best Value Trips</h1>
        <p>Best offers trips from us</p>
      </div>

      <div className='container-view'>
        <div className='container-view-view'>
          <div className='container-view-img'>
          <img src='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg' />
          <p>$ 5,000</p>
          </div>
          <h4>French Autumn</h4>
          <p>City Tours, Urban</p>
          <div className='container-view-rate'>
          <span>
            <Rate value={value} /> 4 review
          </span>
          <p> 5 days </p>
          </div>
        </div>

        <div className='container-view-view'>
          <div className='container-view-img'>
          <img src='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg' />
          <p>$ 6,000</p>
          </div>
          <h4>Grand Switzerland</h4>
          <p>Shopping, Mountain, Snow & Ice</p>
          <div className='container-view-rate'>
          <span>
            <Rate value={value} /> 4 review
          </span>
          <p> 6 days </p>
          </div>
        </div>

        <div className='container-view-view'>
          <div className='container-view-img'>
          <img src='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg' />
          <p>$ 2,500</p>
          </div>
          <h4>Discover Japan</h4>
          <p>City Tours, Iconic</p>
          <div className='container-view-rate'>
          <span>
            <Rate value={value} /> 4 review
          </span>
          <p> 6 days </p>
          </div>
        </div>
      </div>


     <div className='container-title'>
        <h1>Why Choose Us</h1>
        <p>Here are reasons you should plan trip with us</p>
      </div>


      <div className='container-Us'>
        <div className='container-Us-Us'>
          <img src='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png' />
          <h6>Handpicked Hotels</h6>
          <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
        </div>
        <div className='container-Us-Us'>
          <img src='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png' />
          <h6>World Class Service</h6>
          <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
        </div>
        <div className='container-Us-Us'>
          <img src='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png' />
          <h6>Best Price Guarantee</h6>
          <p>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
        </div>
      </div>


      <div className='container-bigImg'>
        <img src='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg' />
      </div>


      <div className='container-title'>
        <h1>Articles & Tips</h1>
        <p>Explore some of the best tips from around the world</p>
      </div>



      <div className='container-Articles'>

      <div className='container-Articles-Articles'>
      <img src='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg' />
      <p className='container-Articles-date'>DECEMBER 10, 2016</p>
      <h3>Memorial Day to Someone Told Me to Travel</h3>
      <p className='container-Articles-content'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
      <p className='container-Articles-ReadMore'>Read More  <AiOutlineDown style={{fontSize: '14px'}} />  </p>
      </div>


      <div className='container-Articles-Articles'>
      <img src='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg' />
      <p className='container-Articles-date'>DECEMBER 10, 2016</p>
      <h3>7 Tips For Nomads On A Budget Trips</h3>
      <p className='container-Articles-content'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
      <p className='container-Articles-ReadMore'>Read More <AiOutlineDown style={{fontSize: '14px'}} /> </p>
      </div>
      <div className='container-Articles-Articles'>
      <img src='https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg' />
      <p className='container-Articles-date'>DECEMBER 10, 2016</p>
      <h3>Taking A Travel Blog Victory Lap</h3>
      <p className='container-Articles-content'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>
      <p className='container-Articles-ReadMore'>Read More <AiOutlineDown style={{fontSize: '14px'}} /> </p>
      </div>
      </div>
    </div>
  )
}

export default Container
