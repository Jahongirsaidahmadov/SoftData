import React from 'react'
import './servicepage.scss';


function ServicePage({ setCurrentPage, modalOpen, setModalOpen, setModalId}) {
    return (
        <div>
            <div className="servicepage_section">
                <div className="container-fluid">
                    <div className="sevice_page_wrapper">
                        <div className="service_page"> 
                           
                                <div className="service_page_item_title">
                                    <h1 className="service_page_h1">
                                      Bizning <span className="service_page_gtext"> xizmatlar</span>
                                    </h1>
                                </div>
                                
                                <div className="service_page_item" onClick={() => {setModalOpen(true); setModalId(0) }}>
                                    <img className="desktop_img" src="./images/desktop_d.png" alt="" />
                                    
                                    <h2>Desktop dastur</h2>
                                    <hr className="gren_line"/>
                                    <p className="service_page_p" >Posterlar, Bannerlar, Vizitka va boshqa turdagi dizayn turlari</p>
                                </div>
                                
                                <div className="service_page_item" onClick = {() => {setModalOpen(true); setModalId(1)}}>
                                    <img className="desktop_img" src="./images/service_web.png" alt="" />
                                    <h2>Web saytlar</h2>
                                    <hr className="gren_line"/>
                                    <p className="service_page_p" >Barcha turdagi web saytlar va web ilovalar</p>
                                </div>
                               
                                <div className="service_page_item" onClick = {() => {setModalOpen(true); setModalId(2)}}>
                                    <img className="desktop_img" src="./images/service_grafik.png" alt="" />
                                    <h2>Grafik dizayn</h2>
                                    <hr className="gren_line"/>
                                    <p className="service_page_p" >Posterlar, Bannerlar, Vizitka va boshqa turdagi dizayn turlari</p>
                                </div>
                               
                                <div className="service_page_item" onClick = {() => {setModalOpen(true); setModalId(3)}}>
                                    <img className="desktop_img" src="./images/service_android.png" alt="" />
                                    <h2>Android dastur</h2>
                                    <hr className="gren_line"/>
                                    <p className="service_page_p" >Posterlar, Bannerlar, Vizitka va boshqa turdagi dizayn turlari</p>
                                </div>
                                
                                <div className="service_page_item" onClick = {() => {setModalOpen(true); setModalId(4)}}>
                                    <img className="desktop_img" src="./images/service_chatbot.png" alt="" />
                                    <h2>Chat-botlar</h2>
                                    <hr className="gren_line"/>
                                    <p className="service_page_p" >Telegram ijtimoiy tarmog’i uchun istalgan turdagi botlar</p>
                                </div>
                               
                                <div className="service_page_item" onClick = {() => {setModalOpen(true); setModalId(5)}}>
                                    <img className="desktop_img" src="./images/service_web_design.png" alt="" />
                                    <h2>Web dizayn</h2>
                                    <hr className="gren_line"/>
                                    <p className="service_page_p" >Posterlar, Bannerlar, Vizitka va boshqa turdagi dizayn turlari</p>
                                </div>
                                
                                <div className="service_page_item" onClick = {() => {setModalOpen(true); setModalId(6)}}>
                                    <img className="desktop_img" src="./images/service_crm.png" alt="" />
                                    <h2>CRM</h2>
                                    <hr className="gren_line"/>
                                    <p className="service_page_p" >Posterlar, Bannerlar, Vizitka va boshqa turdagi dizayn turlari</p>
                                </div>
                                
                                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicePage
