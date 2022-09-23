import React from "react"
import './HomeStyles.css'
import Image from '../assets/introimg.jpg'
import Carousel from "react-elastic-carousel";
import Item from "./item";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function Home() {
  return (
      <div className='hero'>
          <img className="introimg" src={Image} alt=""/>
          <div className="content">
              <h>ICICI-2023</h>
              <h2>International Conference on Intelligent Computing and IoT</h2>
              <br></br>
              <h3>Jointly organised by Institute of Engineering and Management, Kolkata and University of Engineering and Management, Kolkata</h3>
          </div>
          <div className="about">
              <div className="aboutconf">
                  <h2 className="h4_aboutconfig">Lorem ipsum dolor sit amet</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Volutpat odio facilisis mauris sit amet massa vitae tortor. Lacus vestibulum sed arcu non. Ac auctor augue mauris augue neque gravida. Ac tortor vitae purus faucibus ornare suspendisse sed. Vitae congue eu consequat ac felis donec et. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Sit amet dictum sit amet. Nibh ipsum consequat nisl vel pretium. Volutpat lacus laoreet non curabitur gravida. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.</h3>
              </div>
              <div className="vertln"></div>
              <div className="news">
                  <h3 className="h3_aboutconfig">NEWS</h3>
                  <div className="slider">
                      <Carousel breakPoints={breakPoints}>
                          <Item>One</Item>
                          <Item>Two</Item>
                          <Item>Three</Item>
                          <Item>Four</Item>
                          <Item>Five</Item>
                          <Item>Six</Item>
                          <Item>Seven</Item>
                          <Item>Eight</Item>
                      </Carousel>
                  </div>
              </div>
          </div>
          <div className="mission">
          <div className="missionconf">
                  
                  <h2 className="h4_aboutconfig">Lorem ipsum dolor sit amet</h2>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Volutpat odio facilisis mauris sit amet massa vitae tortor. Lacus vestibulum sed arcu non. Ac auctor augue mauris augue neque gravida. Ac tortor vitae purus faucibus ornare suspendisse sed. Vitae congue eu consequat ac felis donec et. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Sit amet dictum sit amet. Nibh ipsum consequat nisl vel pretium. Volutpat lacus laoreet non curabitur gravida. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.</h3>
              </div>
          </div>
      </div>
  )
}

export default Home
