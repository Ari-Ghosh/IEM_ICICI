import React from "react"
import "./CommitteeStyles.css"
import Profile from '../assets/profile.jpg'

function Committee() {
  return (
    <div className='hero_Committee'>
      <h1 className='heading_Committee'>ORGANIZING COMMITTEE</h1>
      <br></br>
      <h2 className='role_Committee'>PATRONS</h2>
      <br></br>
      <div className="placeholder">
        <div className='pic_patron'>
          <img className="profile" src={Profile} alt="" />
        </div>
        <h3>Prof. (Dr.) Satyajit Chakrabarti <br></br> President & Director, IEM Kolkata</h3>
      </div>
      <br></br>
      <h2 className='role_Committee'>CHAIRS</h2>
      <br></br>
      <div className="container_profile">
        <div className="placeholder">
          <div className='pic_chair'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3>Prof. Arun Kumar Bar <br></br> Principal, IEM Kolkata</h3>
        </div>
        <br></br>
        <div className="placeholder">
          <div className='pic_chair'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3>Prof. Amartya Mukherjee <br></br> HOD, CSE(AIML), CSBS, IEM Kolkata</h3>
        </div>
      </div>
      <br></br>
      <h2 className='role_Committee'>Secretary</h2>
      <br></br>
      <div className="placeholder">
        <div className='pic_chair'>
          <img className="profile" src={Profile} alt="" />
        </div>
        <h3>Prof. Ayan Kumar Panja <br></br> Asst. Prof & Asst. HOD, CSE(AIML), CSBS, IEM Kolkata</h3>
      </div>
      <br></br>
      <h2 className='role_Committee'>CONVENORS</h2>
      <br></br>
      <div className="container_profile">
        <div className="placeholder">
          <div className='pic'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3>Prof. (Dr.) Indrajit De <br></br> Professor, CSE(AIML), CSBS, IEM Kolkata</h3>
        </div>
        <br></br>
        <div className="placeholder">
          <div className='pic'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3>Prof. (Dr.) Swarnendu Ghosh <br></br> Assoc. Prof, CSE(AIML), CSBS, IEM Kolkata</h3>
        </div>
      </div>
      <br></br>
      <h2 className='role_Committee'>TREASURER</h2>
      <br></br>
      <div className="placeholder">
        <div className='pic'>
          <img className="profile" src={Profile} alt="" />
        </div>
        <h3>Prof. Mrityunjoy Sen <br></br> Assoc. Prof, CSE(AIML), CSBS, IEM Kolkata</h3>
      </div>
      <br></br>
      <h2 className='role_Committee'>PUBLICATION COMMITTEE</h2>
      <br></br>
      <div className="container_profile3">
        <div className="placeholder">
          <div className='pic'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3>Prof. (Dr.) Indrajit De <br></br> Professor, CSE(AIML), CSBS, IEM Kolkata</h3>
        </div>
        <br></br>
        <div className="placeholder">
          <div className='pic'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3>Prof. (Dr.) Soumen Nandi <br></br> Professor, CSE(AIML), CSBS, IEM Kolkata</h3>
        </div>
        <br></br>
        <div className="placeholder">
          <div className='pic'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3>Prof. (Dr.) Swarnendu Ghosh <br></br> Assoc. Prof, CSE(AIML), CSBS, IEM Kolkata</h3>
        </div>
      </div>
      <br></br>
      <h2 className='role_Committee'>TECHNICAL COMMITTEE</h2>
      <br></br>
      <div className="container_profile3">
        <div className="placeholder">
          <div className='pic'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3>Prof. (Dr.) Tanusree Dutta <br></br> Asst. Prof, CSE(AIML), CSBS, IEM Kolkata</h3>
        </div>
        <br></br>
        <div className="placeholder">
          <div className='pic'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3>Prof. Nirmal Das <br></br> Asst. Prof, CSE(AIML), CSBS, IEM Kolkata</h3>
        </div>
        <br></br>
        <div className="placeholder">
          <div className='pic'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3>Prof. Sumana Sinha <br></br> Asst. Prof, CSE(AIML), CSBS, IEM Kolkata</h3>
        </div>
      </div>
      <br></br>
      <h2 className='role_Committee'>PROGRAM COMMITTEE</h2>
      <br></br>
      <div className="container_profile">
        <div className="placeholder">
          <div className='pic'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3>Prof. (Dr.) Sovan Saha <br></br> Assoc. Prof, CSE(AIML), CSBS, IEM Kolkata</h3>
        </div>
        <br></br>
        <div className="placeholder">
          <div className='pic'>
            <img className="profile" src={Profile} alt="" />
          </div>
          <h3>Prof. (Dr.) Moumita Roy <br></br> Asst. Prof, CSE(AIML), CSBS, IEM Kolkata</h3>
        </div>
      </div>
      <br></br>
      <h2 className='role_Committee'>ADVISORY COMMITTEE</h2>
      <br></br>
      <div className="placeholder">
        <div className='pic'>
          <img className="profile" src={Profile} alt="" />
        </div>
        <h3> <br></br> </h3>
      </div>
      <br></br>
    </div>
  )
}
export default Committee