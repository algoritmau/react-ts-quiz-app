import React, { useState } from 'react'
import { getQuizQuestions } from './api'

// Types
import { Difficulty, QuestionState } from './api'

import QuestionCard from './components/QuestionCard'

import { AppStyles } from './styles/App.style'

export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const TOTAL_QUESTIONS = 10

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [questionNumber, setQuestionNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await getQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
    )

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setQuestionNumber(1)

    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value

      // Check answer
      const isCorrectAnswer =
        questions[questionNumber].correct_answer === answer

      if (isCorrectAnswer) setScore((previousScore) => previousScore + 1)

      // Save answer in the array of answers
      const answerObject = {
        question: questions[questionNumber].question,
        answer,
        correct: isCorrectAnswer,
        correctAnswer: questions[questionNumber].correct_answer,
      }

      setUserAnswers((previousUserAnswers) => [
        ...previousUserAnswers,
        answerObject,
      ])
    }
  }

  const getNextQuestion = () => {
    const nextQuestion = questionNumber + 1

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setQuestionNumber(nextQuestion)
    }
  }

  return (
    <AppStyles>
      <h1>React/TS Quiz App</h1>
      {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      )}
      {!gameOver && <p className="score">Score: {score}</p>}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          totalQuestions={TOTAL_QUESTIONS}
          questionNumber={questionNumber}
          question={questions[questionNumber].question}
          answers={questions[questionNumber].answers}
          userAnswer={userAnswers ? userAnswers[questionNumber] : null}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
        !loading &&
        userAnswers.length === questionNumber + 1 &&
        questionNumber !== TOTAL_QUESTIONS - 1 && (
          <button className="next" onClick={getNextQuestion}>
            Next Question
          </button>
        )}
    </AppStyles>
  )
}

export default App
