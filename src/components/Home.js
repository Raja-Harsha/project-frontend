import React, { Component } from 'react'
import "./Home.css"
// eslint-disable-next-line
import background from "./img/background.jpg"
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"



export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='div1' style={{ backgroundImage: `url(${background})` }}>
          <div className='onlinelearning' align="left">
            <h1 className='h11'>ONLINE LEARNING</h1>
            <h2 className='learn'>Learn <b>Everyday</b></h2>
            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h4 className='button' align="center">Read more</h4>
            </div>
            <img src={img1} alt="" align="right" width="50%"/>
         </div>
         <div className='div2'>
            <div className='img2' align="right">
            <h1  className="circle"> </h1>

              <img src={img2} alt="" width="100%"/>

          </div>
          <div className='onlinelearning' align="left">
            <h1 className='h12'>Get access to high quality learning!</h1>
            <h2 className='join'>Join online courses today</h2>
            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h4 className='button' align="center">Read more</h4>
         </div>
        </div>
        <div className='div3' style={{ backgroundImage: `url(${background})` }}>
          <div className='onlinelearning' align="left">
            <h1 className='h11'> </h1>
            <h2 className='learn'>Train Your Brain Today!</h2>
            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h4 className='button' align="center">ALL cources</h4>
          </div>
          <img src={img3} alt="" align="right" width="50%"/>
        </div>
        <div className='div4'>
        <div className='online' align="left">
            <h1 className='h11'> </h1>
            <h2 className='learn'>OnlineLearning</h2>
            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h4 className='button' align="center">Read more</h4>
            </div>
            <img src={img4} alt="" align="right" width="50%"/>
        </div>
        <div className='div5'>
          <p><span>CALL US</span><br/>1 (234) 567-891,<br/> 1 (234) 987-654</p>
          <p><span>LOCATION</span><br/>121 Rock Sreet, 21 Avenue,<br/> New York, NY 92103-9000</p>
          <p><span>BUSINESS HOURS</span><br/>Mon – Fri …… 10 am – 8 pm,<br/> Sat, Sun ....… Closed</p>
        </div>
       

      </div>
    )
  }
}
