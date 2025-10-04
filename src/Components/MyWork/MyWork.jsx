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
                      {work.roles && (
                        <><strong>Roles:</strong> {work.roles.join(', ')}</>
                      )}
                    </p>

                    <div className="tech-list">
                      {work.technologies.map((tech, i) => (
                        <span className="tech-chip" key={i}>{tech}</span>
                      ))}
                    </div>

                    <div className="links">
                      {work.github && (
                        <a className="link-tile github" href={work.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                          <span className="link-icon" aria-hidden>
                            {/* GitHub mark */}
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8 .198a8 8 0 00-2.53 15.59c.4.074.547-.174.547-.386 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.727-.497.055-.487.055-.487.803.057 1.225.825 1.225.825.714 1.223 1.873.87 2.33.666.072-.517.28-.87.508-1.07-1.777-.202-3.644-.888-3.644-3.953 0-.873.312-1.586.824-2.147-.083-.203-.357-1.018.078-2.123 0 0 .67-.215 2.2.82a7.68 7.68 0 012.003-.27c.68.003 1.366.092 2.003.27 1.53-1.035 2.2-.82 2.2-.82.435 1.105.161 1.92.079 2.123.513.561.824 1.274.824 2.147 0 3.073-1.87 3.748-3.652 3.948.287.247.543.735.543 1.482 0 1.07-.01 1.933-.01 2.195 0 .214.146.463.55.385A8.001 8.001 0 008 .197z"/></svg>
                          </span>
                          <span className="link-label">GitHub</span>
                        </a>
                      )}

                      {work.live && (
                        <a className="link-tile live" href={work.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                          <span className="link-icon" aria-hidden>
                            {/* external link */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7M10 14L21 3"/><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 21H3V3h7"/></svg>
                          </span>
                          <span className="link-label">Live</span>
                        </a>
                      )}

                      {work.figma && (
                        <a className="link-tile figma" href={work.figma} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                          <span className="link-icon" aria-hidden>
                            {/* figma mark simplified */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="2.5" fill="#FF7262"/><rect x="6" y="3.5" width="5" height="5" rx="2.5" fill="#A259FF" transform="translate(0)"/><circle cx="6" cy="17" r="2.5" fill="#1ABCFE"/><rect x="11" y="14.5" width="5" height="5" rx="2.5" fill="#F24E1E"/></svg>
                          </span>
                          <span className="link-label">Figma</span>
                        </a>
                      )}
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
                  <p><b>Roles:</b> {selectedWork.roles ? selectedWork.roles.join(', ') : '-'}</p>
                  <p><b>Technologies:</b> {selectedWork.technologies.join(', ')}</p>
                  <p><b>Status:</b> {selectedWork.status}</p>
                  <p>
                    {selectedWork.github && <a href={selectedWork.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {selectedWork.live && <> {selectedWork.github ? ' | ' : ''}<a href={selectedWork.live} target="_blank" rel="noopener noreferrer">Live Demo</a></>}
                    {selectedWork.figma && <> {(selectedWork.github || selectedWork.live) ? ' | ' : ''}<a href={selectedWork.figma} target="_blank" rel="noopener noreferrer">Figma</a></>}
                  </p>
                  <button className="modal-close" onClick={() => setSelectedWork(null)}>Close</button>
              </div>
          </div>
        )}
    </div>
  )
}

export default MyWork
