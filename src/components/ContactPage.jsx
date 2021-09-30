import React from 'react';
import './contact.scss';
import Button from './ItemComponent/Button/button'
import Map from './Map'



function ContactPage() {

const handleSubmit = (e) => {
    e.preventDefault()
}


    return (
        <div>
            <div className="container-fluid">
                <div className="contact_page mt-4">
                    <div className="contact_page_inner">
                            <h1 className="contact_title" >Biz <span>bilan </span> aloqa</h1>

                            <div className="contact_form">
                                <form onSubmit={handleSubmit} >
                                    <div className="form_top">
                                        <div className="form_inner">
                                            <label>Ism <span>*</span></label>
                                            <input type="text" />
                                        </div>

                                        <div className="form_inner">
                                            <label>Telefon <span>*</span></label>
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className="form_top">
                                        <div className="form_inner mt-3">
                                            <label>Xabar</label>
                                            <textarea></textarea>
                                        </div>
                                    </div>
                                    <div className="form_button">
                                        <Button>JO’NATISH</Button>
                                    </div>
                                </form>
                            </div>
                    
                    </div>

                    <div className="contact_map">
                            <div className="contact_map_inner">
                                <div>
                                    <Map />
                                </div>
                            </div>
                       </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
