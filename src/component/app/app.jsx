import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Anchor, Box, Cursor, Global } from '..'

const Portal = ({ children, id }) =>
  createPortal(children, document.querySelector(`#${id}`))

const App = () => {
  const [cursorIcon, setIcon] = useState('arrow')
  const handleOver = () => setIcon('pointer')
  const handleOut = () => setIcon('arrow')
  return (
    <div>
      <Global />
      <h1>MRBeast shop all animated buttons</h1>

      <Box>
        <Anchor onMouseOver={handleOver} onMouseOut={handleOut}>
          Shop All
        </Anchor>

        <Anchor onMouseOver={handleOver} onMouseOut={handleOut}>
          Hi Alex
        </Anchor>

        <Anchor onMouseOver={handleOver} onMouseOut={handleOut}>
          Hi Maria
        </Anchor>
      </Box>

      <Portal id="cursor">
        <Cursor icon={cursorIcon} />
      </Portal>
    </div>
  )
}

export default App
