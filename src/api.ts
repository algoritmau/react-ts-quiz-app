import { shuffleArray } from './utils'

export type Question = {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export type QuestionState = Question & { answers: string[] }

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const getQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
) => {
  try {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const payload = await fetch(endpoint)
    const response = await payload.json()
    const questions = response.results.map((result: Question) => ({
      ...result,
      answers: shuffleArray([
        ...result.incorrect_answers,
        result.correct_answer,
      ]),
    }))

    return questions
  } catch (error) {
    console.error(`An error occurred. ${error}`)
  }
}
