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

        {/* Project Details Cards */}
        <div className="mywork-container">
            {mywork_data.map((work,index)=>(
                <div 
                    key={index} 
                    className="work-card"
                    onClick={() => setSelectedWork(work)}
                >
                    <div className="work-card-header">
                      <h3 className="work-name">{work.w_name}</h3>
                      <span className={`status ${work.status.toLowerCase().replace(/\s+/g,'-')}`}>{work.status}</span>
                    </div>

                    <p className="work-short">{work.description}</p>

                    <p className="meta">
                      <strong>Category:</strong> {work.category} • <strong>Date:</strong> {work.date}
                    </p>

                    <p className="tech-list">{work.technologies.join(', ')}</p>

                    <div className="links">
                      {work.github && <a href={work.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                      {work.live && <a href={work.live} target="_blank" rel="noopener noreferrer">Live</a>}
                    </div>
                </div>
            ))}
        </div>

        {/* Modal / Popup for details */}
        {selectedWork && (
          <div className="mywork-modal" onClick={() => setSelectedWork(null)}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                  <h2>{selectedWork.w_name}</h2>
                  <p><b>Description:</b> {selectedWork.description}</p>
                  <p><b>Technologies:</b> {selectedWork.technologies.join(", ")}</p>
                  <p><b>Category:</b> {selectedWork.category}</p>
                  <p><b>Date:</b> {selectedWork.date}</p>
                  <p><b>Status:</b> {selectedWork.status}</p>
                  <p>
                    {selectedWork.github && <a href={selectedWork.github} target="_blank" rel="noopener noreferrer">GitHub</a>} {selectedWork.live && <> | <a href={selectedWork.live} target="_blank" rel="noopener noreferrer"> Live Demo</a></>}
                  </p>
                  <button className="modal-close" onClick={() => setSelectedWork(null)}>Close</button>
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
