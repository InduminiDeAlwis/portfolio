import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="services-container">
                {Services_Data.map((service, index) => (
                    <div 
                        key={index} 
                        className="services-format"
                        onClick={() => setSelectedService(service)}
                    >
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedService && (
                <div className="modal-overlay" onClick={() => setSelectedService(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedService(null)}>✖</button>
                        <h2>{selectedService.s_name}</h2>
                        <p>{selectedService.full_desc}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Services;