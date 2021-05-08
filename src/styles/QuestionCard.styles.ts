import styled from 'styled-components'

export const QuestionCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-block-end: 3.2rem;

  > * {
    margin: 0;
    padding: 0;
  }

  .question__number {
  }

  .question__text {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .answers {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 0;
    width: 80%;
  }

  .answer {
    width: 100%;
  }
`

type answerButtonStylesProps = {
  correct: boolean
  userClicked: boolean
}

export const AnswerButtonStyles = styled.button<answerButtonStylesProps>`
  cursor: pointer;
  border: none;
  font-family: inherit;
  font-size: 1.6rem;
  padding: 1.2rem 0;
  text-align: center;
  width: 100%;
  transition: all 0.3s ease;
  user-select: none;
  border-radius: 4px;
  border: 1px solid hsl(0 0% 3.1372549019607843% / 0.08);
  background: ${({ correct, userClicked }) =>
    correct
      ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
      : !correct && userClicked
      ? 'linear-gradient(90deg, #ff5656, #c16868)'
      : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
  color: #fefefe;
  text-shadow: 0px 1px 0px hsl(0 0% 3.1372549019607843% / 0.25);
`
