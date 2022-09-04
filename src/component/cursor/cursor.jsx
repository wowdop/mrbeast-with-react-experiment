import { useEffect, useRef, useState } from 'react'
import S from './cursor.style'

const Cursor = ({ icon = 'arrow' }) => {
  const cursorRef = useRef()

  const saySomething = (e) => {
    const { clientX, clientY } = e
    cursorRef.current.style.left = `${clientX}px`
    cursorRef.current.style.top = `${clientY}px`
  }

  useEffect(() => {
    document.addEventListener('mousemove', saySomething)
  }, [])

  return <S.Cursor ref={cursorRef} icon={icon} />
}

export default Cursor
