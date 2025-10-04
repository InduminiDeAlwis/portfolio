import React, { useEffect, useRef, useState } from 'react'
import './Timeline.css'

const events = [
  {
    title: 'SHECODERESS V6.0',
    subtitle: 'Finalists',
    org: 'Organized by IEEE WIE of Uva Wellassa University',
  },
  {
    title: 'Hacklite 1.0',
    subtitle: 'Semi finalists',
    org: 'Organized by IEEE of University Of Moratuwa',
  },
  {
    title: 'Hacklite 2.0',
    subtitle: '4th place',
    org: 'Organized by IEEE of University Of Moratuwa',
  },
  {
    title: 'Inter-School Competition',
    subtitle: 'Semi Finalists',
    org: 'Organized by ACICTS of Ananda College - Colombo',
  },
  {
    title: 'Hackmoral 7.0',
    subtitle: 'Top 15',
    org: 'Organized by INTECS of University Of Moratuwa',
  },
  {
    title: 'FIT CodeRush 6.0',
    subtitle: 'Top 20',
    org: 'Organized by INTECS of University Of Moratuwa',
  },
  {
    title: 'AlgoXplore 1.0',
    subtitle: 'Top 20 (Algorithm & CTF challenge)',
    org: 'Organized by INTECS of University Of Moratuwa',
  },
  {
    title: 'Innovative with Ballerina',
    subtitle: 'Participant',
    org: 'Organized by IEEE of University Of Moratuwa; sponsored by WSO2',
  },
]

const Timeline = () => {
  const containerRef = useRef(null)
  const [visible, setVisible] = useState({})

  useEffect(()=>{
    const nodes = Array.from(containerRef.current.querySelectorAll('.tl-item'))
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      })
    },{ threshold: 0.15 })
    nodes.forEach(n => io.observe(n))
    return ()=> io.disconnect()
  },[])

  const toggle = (i) => {
    setVisible(v => ({ ...v, [i]: !v[i] }))
  }

  return (
    <section id="timeline" className="timeline" ref={containerRef}>
      <div className="timeline-inner">
        <h2>Achievements & Competitions</h2>
        <p className="timeline-lead">Selected highlights — click any card to expand details.</p>

        <div className="tl-wrap">
          {events.map((e, i) => (
            <article key={i} className={`tl-item`} tabIndex={0} onClick={() => toggle(i)} onKeyDown={(ev)=>{ if(ev.key==='Enter') toggle(i)}}>
              <div className="tl-marker" aria-hidden="true"><span/></div>
              <div className={`tl-card ${visible[i] ? 'open' : ''}`}>
                <div className="tl-head">
                  <h3>{e.title}</h3>
                  <span className="tl-sub">{e.subtitle}</span>
                </div>
                <div className="tl-body">
                  <p>{e.org}</p>
                </div>
                <div className="tl-footer">{visible[i] ? 'Click to collapse' : 'Click to expand'}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
