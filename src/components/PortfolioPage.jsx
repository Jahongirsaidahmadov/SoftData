import React from 'react';
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs';
import './portfolio.css';
import OwlCarousel from "react-owl-carousel";
import { Link} from "react-router-dom"
import 'owl.carousel';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import img1 from '../image/Portfolio/Virtustricot.png'
import img2 from '../image/Portfolio/Aronis.png'
import img3 from '../image/Portfolio/muslim.png'
import img4 from '../image/Portfolio/SDGPS.png'
import link from '../image/Portfolio/link.svg'

function PortfolioPage({setCurrentPage}) {

    const state = {
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1400: {
                items: 5,
            },
        }
    }


    const portfolioItems = [
        {
            title: "Barchasi",
            to: '/',
            img: [{img: img1, name: 'Virtus Tricot', link: 'www.virtustricot.uz'}, {
                img: img2,
                name: 'Agronis neft kompaniyasi',
                link: ''
            }, {img: img3, name: 'Muslim', link: ''}, {img: img4, name: 'SDGPS', link: ''}]
        },
        {
            title: "Web ilovalar",
            to: 'portfolioWeb',
            img: [{img: img1, name: 'Virtus Tricot', link: 'www.virtustricot.uz'}, {
                img: img2,
                name: 'Agronis neft kompaniyasi',
                link: ''
            }]
        },
        {
            title: "Mobile ilovalar",
            to: 'portfolioMobile',
            img: [{img: img3, name: 'Muslim'}, {img: img4, name: 'four'}]
        },
        {
            title: "Desktop ilovalar",
            to: 'portfolioDesktop',
            img: [{img: img1, name: 'Virtus Tricot', link: 'www.virtustricot.uz'}, {
                img: img2,
                name: 'Agronis neft kompaniyasi',
                link: ''
            }, {img: img3, name: 'Muslim', link: ''}, {img: img4, name: 'SDGPS', link: ''}]
        },
    ]

    return (
        <div>
            <div className="container-fluid">
                <div className="portfolio_page">
                    <h1 className="portfolio_title" ><span className="green_text" >Port</span>folio</h1>
                    <div className="portfolio_tabs">
                        <Tabs>
                            <TabList>
                            <div className="portfolio_type">
                                    {portfolioItems.map((item, index) => (
                                        <Tab key={index}>
                                            {item.title}
                                            <div className="portfolio_type_item_focus_line"></div>
                                        </Tab>
                                    ))}
                                </div>
                            </TabList>
                            {
                                portfolioItems.map((port, index) => (
                                    <TabPanel key={index}>
                                        <div className="portfolio_tab_content">
                                            <div className="owl-wrapper">
                                                <OwlCarousel className="owl-theme" item={4} loop margin={10} nav
                                                             responsive={state.responsive}>
                                                    {
                                                        port.img.map((p, i) => (
                                                            <div className="item" key={i}>
                                                                {/* <h1>img - {i + 1}</h1> */}
                                                                <img src={p.img} alt={i + 1}/>
                                                                <div className="item-button">
                                                                    <div>
                                                                        <a to={{pathname: p.link}} target="_blank">
                                                                            <img src={link} alt="link"/>
                                                                        </a>
                                                                    </div>
                                                                    <button>{p.name}</button>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </OwlCarousel>
                                            </div>
                                        </div>
                                    </TabPanel>
                                ))
                            }
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;
