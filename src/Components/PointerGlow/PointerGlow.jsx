import React, { useEffect, useRef } from 'react'
import './PointerGlow.css'

const sectionColors = {
  home: 'rgba(180,21,255,0.22)', // purple
  about: 'rgba(6,182,212,0.22)', // teal
  services: 'rgba(249,115,22,0.20)', // orange
  work: 'rgba(16,185,129,0.20)', // green
  contact: 'rgba(26,188,254,0.18)', // blue
  default: 'rgba(180,21,255,0.12)'
}

const PointerGlow = () => {
  const ref = useRef(null)

  useEffect(()=>{
    const el = ref.current
    if (!el) return

    const onMove = (e)=>{
      const x = e.clientX
      const y = e.clientY
      el.style.left = x + 'px'
      el.style.top = y + 'px'
      el.style.opacity = '1'

      // find the topmost section element under cursor
      const node = document.elementFromPoint(e.clientX, e.clientY)
      let section = 'default'
      if (node) {
        const sec = node.closest && node.closest('[id]')
        if (sec && sec.id) section = sec.id
      }
      const color = sectionColors[section] || sectionColors.default
      el.style.background = `radial-gradient(circle at 30% 30%, ${color}, rgba(180,21,255,0.08) 40%, transparent 60%)`
    }

    const onLeave = ()=>{ if (el) el.style.opacity = '0' }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    return ()=>{
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  },[])

  return <div className="pointer-glow" ref={ref} aria-hidden="true" />
}

export default PointerGlow
