import React from 'react'
import { AnswerObject } from '../App'

import {
  AnswerButtonStyles,
  QuestionCardStyles,
} from '../styles/QuestionCard.styles'

type Props = {
  totalQuestions: number
  questionNumber: number
  question: string
  answers: string[]
  userAnswer: AnswerObject | null
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const QuestionCard: React.FC<Props> = ({
  totalQuestions,
  questionNumber,
  question,
  answers,
  userAnswer,
  callback,
}) => (
  <QuestionCardStyles>
    <p className="question__number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p
      dangerouslySetInnerHTML={{ __html: question }}
      className="question__text"
    />
    <div className="answers">
      {answers.map((answer) => (
        <AnswerButtonStyles
          key={questionNumber * Math.random()}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          disabled={!!userAnswer}
          value={answer}
          onClick={callback}
          className="answer__button"
        >
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </AnswerButtonStyles>
      ))}
    </div>
  </QuestionCardStyles>
)

export default QuestionCard
