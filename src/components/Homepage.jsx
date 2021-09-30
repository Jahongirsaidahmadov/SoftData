import React, {useEffect} from 'react'
import Header from './Header'
import  './homepage.css';
import Aos from 'aos'
import "aos/dist/aos.css"

import { Link } from "react-router-dom";
import Button from './ItemComponent/Button/button'

function Homepage({currentPage, setCurrentPage, burgerContent}) {
  
  
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  
  return (
    <>
      <div className="container-fluid">
         
      <div className="homepage pt-5">
        <div className="handshake mt-5 pb-3">
          <span style={{ color:"white"}}>
          <img src="./images/Handshake.png" alt="Handshake" />
          ASSALOMU ALEYKUM
          </span>
          {/* {burger && ( <h4 style={{ color: "white paddin-left:15" }}>ASSALOMU ALEYKUM</h4>)} */}
        </div>
        

        <div className="homepage_b">
            <h1 style={{ color: "white" }}>DASTURIY MAHSULOTLAR BIZNESINGIZ <span style={{ color: "#29B85D"}}>KELAJAGIDIR  </span></h1>
            <hr />
        </div>

        <div className="homepage_button">
         <Button >LOYIHANI BOSHLASH</Button>

          <Button >BIZ BILAN ALOQA</Button>
        </div>

        <div className = "home_page_addition">
                        <div className = "soft_languages">
                            <img src = "./images/Vector.svg" alt = "global"/>
                            <a href = "#" className = "soft_languages_item_1">O’ZBEK</a>
                            <a href = "#">РУССКИЙ</a>
                            <a href = "#">ENGLISH</a>
                        </div>
                        <div className = "join_us">
                            <p style = {{color: "white" }} className = "join_us_text">BIZGA QO’SHILING:</p>
                            <a to = {{pathname: 'https://www.facebook.com/softdata.uz'}} target = "_blank">
                                <img src = "./images/Facebook.svg" alt = 'facebook'/>
                            </a>
                            <a to = {{pathname: 'https://www.instagram.com/softdatauz'}} target = "_blank">
                                <img src = "./images/Instagram.svg" alt = 'instagram'/>
                            </a>
                            <a href = "#">
                                <img src = "./images/Telegram.svg" alt = 'telegram'/>
                            </a>
                            <a href = "#">
                                <img src = "./images/WhatsApp.svg" alt = 'what'/>
                            </a>
                        </div>
                    </div>

      </div>
      </div>
    </>
  )
}

export default Homepage
