import React from "react"
import './HomeStyles.css'
import Carousel from "react-elastic-carousel";
import Item from "./item";
import Logo_Conf from '../assets/Logo.jpg'
// import Logo_Springer from '../assets/springer pic.jpeg'
import Logo_IEM from '../assets/IEM pic.png'
import Logo_UEM from '../assets/UEM.png'
import Logo_ISOC from '../assets/ISOC.png'
import Logo_ISTE from '../assets/ISTE.png'
import Logo_smart from '../assets/smart.png'
import camp_one from '../assets/Camp1.png'
import camp_two from '../assets/Camp2.png'
import camp_three from '../assets/Camp3.png'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function Home() {
    return (
        <div className='hero'>
            <div className="container">
                <div className="Logo">
                    <img className="logo_conf" src={Logo_Conf} alt="" />
                    {/* <img className="logo_springer" src={Logo_Springer} alt="" /> */}
                </div>
                <div className="content">
                    <h>ICICI-2023</h>
                    <h2>International Conference on Intelligent Computing and IoT</h2>
                    <br></br>
                    <h3>Jointly organised by<br></br> Institute of Engineering & Management, Kolkata and University of Engineering & Management, Kolkata</h3>
                </div>
                <div className="Logo">
                    <img className="logo_iem" src={Logo_IEM} alt="" />
                    <img className="logo_uem" src={Logo_UEM} alt="" />
                </div>
            </div>
            <div className="associate">
                <div className="association">

                    <h2 className="h4_associate">In Association With</h2>
                    <div className="associate_logo">
                    <img className="logo_isoc" src={Logo_ISOC} alt="" />
                    <img className="logo_iste" src={Logo_ISTE} alt="" />
                    <img className="logo_smart" src={Logo_smart} alt="" />
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="aboutconf">
                    <h2 className="h4_aboutconfig">About The Conference</h2>
                    <h3>The 1st International Conference on Intelligent Computing and IoT (ICICI-2023) is organized by the Institute of Engineering & Management along with the University of Engineering & Management in association with the Smart Society, USA, Internet Society Kolkata Chapter and the Indian Society for Technical Education. The conference focuses on state-of-the-art Artificial Intelligence and Machine Learning Technologies and the applications in domains such as Computer Vision, Language Processing, Computational Biology so on. The second focus area of the conference is to cater to the increasing hype regarding Internet of Things and the related research niches such as 5G Networks, Edge Computing and IoT Securities.</h3>
                </div>
                <div className="vertln"></div>
                <div className="news">
                    <h3 className="h3_aboutconfig">NEWS & INFORMATION</h3>
                    <div className="slider">
                        <Carousel breakPoints={breakPoints}>
                            <Item><img className="camp" src={camp_one} alt="" /></Item>
                            <Item><img className="camp" src={camp_two} alt="" /></Item>
                            <Item><img className="camp" src={camp_three} alt="" /></Item>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="news-mob">
                <h3 className="h3_aboutconfig">NEWS</h3>
                <div className="slider">
                    <Carousel breakPoints={breakPoints}>
                        <Item><img className="camp" src={camp_one} alt="" /></Item>
                        <Item><img className="camp" src={camp_two} alt="" /></Item>
                        <Item><img className="camp" src={camp_three} alt="" /></Item>    
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Home
