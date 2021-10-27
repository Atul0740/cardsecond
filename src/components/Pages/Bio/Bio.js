import React from 'react'
import about from '../../../assets/about.png'
import './Bio.css'
import video from '../../../assets/video.mp4'
const Bio = () => {
  return (
    <div id="bio">
      <div className="first-container" data-aos="fade-up">
        <div className="text-container">
          <p id="name" >I’m Bako Doe</p>
        </div>
        <div className="img-container">
          <img id="image" src={about} alt="" />
        </div>
      </div>
      <div className="support">
      <p id="para">He lay on his armour-like back, and if he lifted his head a little  he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
      <button class="support-btn"><i class="fa fa-download"></i> Download CV</button>
      </div>
      <div className="second-container">
        <div className="second-text-container">
          <p className="second-title">Expertise and Interest 
          </p>
          <video src={video} controls></video>
        </div>
        <div className="second-support">
          <p className='video-text'>He lay on his armour-like back, and if he lifted his head a little  he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
        </div>
      </div>
    </div>
  )
}

export default Bio
