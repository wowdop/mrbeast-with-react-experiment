import S from './anchor.style'

const Anchor = ({ children, to, title, dataTestid }) => (
  <S.Anchor>
    <S.Shadow>{children}</S.Shadow>

    <S.NoteWrapper>
      <S.Note left={10} top={-15} />
      <S.Note left={150} top={80} />
      <S.Note left={230} top={-25} />
    </S.NoteWrapper>

    <S.Link
      data-text={children}
      href={to}
      title={title}
      data-testid={dataTestid}
    >
      {children}
    </S.Link>
  </S.Anchor>
)

export default Anchor
