import { useMemo } from 'react'
import S from './anchor.style'

const Anchor = ({
  children,
  to,
  title,
  dataTestid,
  onMouseOver,
  onMouseOut,
  hue,
}) => {
  const getRandom = (n) => ~~(Math.random() * n)
  const [first, second, third] = useMemo(
    () => Array.from({ length: 3 }, () => getRandom(1500)),
    []
  )

  return (
    <S.Anchor onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <S.Shadow>{children}</S.Shadow>

      {
        <S.NoteWrapper>
          <S.Note animationDelay={first} left={10} top={-15} />
          <S.Note animationDelay={second} left={150} top={80} />
          <S.Note animationDelay={third} left={230} top={-25} />
        </S.NoteWrapper>
      }

      <S.Link
        data-text={children}
        href={to}
        title={title}
        data-testid={dataTestid}
        hue={hue}
      >
        {children}
      </S.Link>
    </S.Anchor>
  )
}

export default Anchor
