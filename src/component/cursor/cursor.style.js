import styled from 'styled-components'

const Cursor = styled.div`
  /* display: none; */
  position: fixed;
  top: 0;
  left: 0;
  width: 128px;
  height: 128px;
  background-image: url(/image/${({ icon }) => icon}.png);
  background-position: -32px -22px;
  background-repeat: no-repeat;
  pointer-events: none;
`

const style = {
  Cursor,
}

export default style
