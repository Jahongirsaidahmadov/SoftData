import React from 'react'
import "./about.scss"
import Button from "./ItemComponent/Button/button"


function AboutPage({setCurrentPage}) {
  return (
    <>
    <div className="about_page_section">
      <div className="container-fluid">
        <div className="about_page">
          <div className="about_page_inner">
            <div className="about_page_left">
              <h1 className="about_page_title">
                <span style={{ color: "#29B85D" }}>Biz</span> haqimizda
              </h1>
             <hr />

             <p>Biz mijozlarimizga sifatli va tezkor faoliyat
               ko’rsatib kelmoqdamiz. Hozirgi kunga qadar bir nechta startup 
               loyihalarni amalga oshirdik. Siz bilan ishlashdan mamnunmiz</p>
               <div className="about_page_button">
                 <Button>BATAFSIL</Button>
                </div>
            </div>

            <div className="about_page_right">
              <img src="./images/aboutus.png" alt="" />
            </div>
           
          </div>
        </div>
      </div>
    </div>

      
    </>
  )
}

export default AboutPage;
