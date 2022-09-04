import { useEffect, useRef, useState } from 'react'
import S from './cursor.style'

const Cursor = ({ icon = 'arrow' }) => {
  const cursorRef = useRef()
  const [show, toggle] = useState()

  const saySomething = (e) => {
    const { clientX, clientY } = e
    cursorRef.current.style.left = `${clientX}px`
    cursorRef.current.style.top = `${clientY}px`
  }

  const leave = (e) => toggle(false)
  const enter = (e) => toggle(true)

  useEffect(() => {
    document.addEventListener('mousemove', saySomething)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)

    return () => {
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
      document.removeEventListener('mousemove', saySomething)
    }
  }, [])

  return show ? <S.Cursor ref={cursorRef} icon={icon} /> : null
}

export default Cursor
