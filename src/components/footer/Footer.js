import React from 'react'
import './Footer.scss'
import { GiSmartphone} from 'react-icons/gi'
import { RiContactsFill} from 'react-icons/ri'
import { GoClock} from 'react-icons/go'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer'>
            <div className='footer-left'>
                <h3>Our Awards</h3>
                <p>London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>             
                <img src='https://tse4.mm.bing.net/th?id=OIP.tvgOlmk6ei1AtyhLUy46hgHaEK&pid=Api&P=0&h=180' alt='lỗi'/>                       
            </div>
            <div className='footer-mid'>
                <h3>Contact info</h3>
                <p> <GiSmartphone /> 1-567-124-44227</p>
                <p> <RiContactsFill /> 184 Main Street East Perl Habour 8007</p>
                <p> <GoClock /> Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
            </div>
            <div className='footer-right'>
                <h3>Recent Trips</h3>
                <div className='footer-right-img'>
                    <div>
                    <img src='https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg' alt='' />
                    <img src='https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg' alt='' />
                    <img src='https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg' alt='' />
                    </div>
                    <div>
                    <img src='https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg' alt='' />
                    <img src='https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg' alt='' />
                    <img src='https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg' alt='' />
                    </div>
                </div>
            </div>
        </div>

        <div className='footer-end'>
            <div className='footer-end-decs' >
                <p>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</p>
            </div>
            <div className='footer-end-add'>
                <p>Home</p>
                <p>Tours</p>
                <p>Blog</p>
                <p>Purchase</p>

            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
