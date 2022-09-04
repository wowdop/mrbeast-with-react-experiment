import S from './anchor.style'

const Anchor = ({ children, to, title, dataTestid }) => (
  <S.Anchor>
    <S.Shadow />

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
