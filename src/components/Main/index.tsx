import * as S from './styles'

const Main = ({
  title = 'Lorem Ipsum',
  description = 'Give me some description',
}) => (
  <S.Wrapper data-testid='main__div--wrapper'>
    <S.Title data-testid='main__text--title'>{title}</S.Title>
    <S.Description data-testid='main__text--description'>
      {description}
    </S.Description>
  </S.Wrapper>
)

export default Main
