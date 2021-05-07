import React from 'react'
import { AnswerObject } from '../App'

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
  <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <ul>
      {answers.map((answer) => (
        <li key={questionNumber}>
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default QuestionCard
