import React from 'react'
import './FindCV.css'

const FindCV = ({ seLink, uiuxLink }) => {
  const open = (url)=> { if (!url) return; window.open(url, '_blank') }

  return (
    <section id="cv" className="findcv">
      <div className="findcv-inner">
        <h2>Find my CV</h2>
        <p className="muted">Download the CV that matches the role you want to see.</p>
        <div className="findcv-actions">
          <button className="findcv-btn primary" onClick={() => open(seLink)}>SE CV</button>
          <button className="findcv-btn outline" onClick={() => open(uiuxLink)}>UI / UX CV</button>
        </div>
      </div>
    </section>
  )
}

export default FindCV
