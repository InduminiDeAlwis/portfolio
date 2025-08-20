import React, { useState } from 'react'
import './MyWork.css' 
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div id='work' className="mywork">
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt= "" />
        </div>

        {/* Project Images */}
        <div className="mywork-container">
            {mywork_data.map((work,index)=>(
                <img 
                    key={index} 
                    src={work.w_img} 
                    alt={work.w_name} 
                    onClick={() => setSelectedWork(work)} 
                />
            ))}
        </div>

        {/* Modal / Popup for details */}
        {selectedWork && (
          <div className="mywork-modal">
              <div className="modal-content">
                  <h2>{selectedWork.w_name}</h2>
                  <p><b>Description:</b> {selectedWork.description}</p>
                  <p><b>Technologies:</b> {selectedWork.technologies.join(", ")}</p>
                  <p><b>Category:</b> {selectedWork.category}</p>
                  <p><b>Date:</b> {selectedWork.date}</p>
                  <p><b>Status:</b> {selectedWork.status}</p>
                  <p>
                    <a href={selectedWork.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
                    <a href={selectedWork.live} target="_blank" rel="noopener noreferrer"> Live Demo</a>
                  </p>
                  <button onClick={() => setSelectedWork(null)}>Close</button>
              </div>
          </div>
        )}

        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork
