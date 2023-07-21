import React from "react"
import "./SpeakerStyles.css"
import Profile from '../assets/profile.jpg'

function Speaker() {
  return (
    <div className='hero_Speaker'>
      <h1 className='heading_Speaker'>TO BE ANNOUNCED SOON</h1>
      <br></br>
      <h2 className='role_Speaker'>KEYNOTE SPEAKERS</h2>
      <br></br>
      <div className="container_speaker">
        <div className="placeholder">
          <div className='pic_keynote'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3> <br></br> </h3>
        </div>
        <br></br>
        <div className="placeholder">
          <div className='pic_keynote'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3> <br></br> </h3>
        </div>
      </div>
      <br></br>
      <h2 className='role_Speaker'>SESSION CHAIRS</h2>
      <br></br>
      <div className="container_speaker4">
        <div className="placeholder">
          <div className='pic_session'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3> <br></br> </h3>
        </div>
        <br></br>
        <div className="placeholder">
          <div className='pic_session'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3> <br></br> </h3>
        </div>
        <div className="placeholder">
          <div className='pic_session'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3> <br></br> </h3>
        </div>
        <br></br>
        <div className="placeholder">
          <div className='pic_session'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3> <br></br> </h3>
        </div>
      </div>
    </div>
  )
}
export default Speaker
