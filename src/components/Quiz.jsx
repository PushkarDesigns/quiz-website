import React, { useEffect } from 'react'
import QuizStart from './QuizStart'
import ProgressBar from './ProgressBar'
import Timer from './Timer'
import Question from './Question'
import { useDispatch, useSelector } from "react-redux";
import Results from './Result'
import { SampleQuestions } from '../data/questions'
import { setQuestions } from '../store/quizSlice'

const Quiz = () => {
    const dispatch = useDispatch();

    // Load the question
    useEffect(() => {
        dispatch(setQuestions(SampleQuestions));
    }, [dispatch]);

    const {
        questions, currentQuestionIndex, isQuizCompleted, isTimerActive, answers, } = useSelector((state) => state.quiz);

    // Loading Quiz
    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading</p>
                </div>
            </div>
        );
    }

    if (isQuizCompleted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
                <Results />
            </div>
        )
    }

    if (!isTimerActive && answers.length === 0) {
        console.log(questions)
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-8 px-4">
                <QuizStart />
            </div>
        )
    }

    return (
        <>
            {/* <Result /> */}
            {/* <Question /> */}
            {/* <Timer /> */}
            {/* <ProgressBar /> */}
            {/* <QuizStart /> */}
            <div className="min-h-screen bg-gradient-to-be from-blue-50 via-white to-purple-50 p-4">
                <div className="max-w-4xl mx-auto mb-4">
                    <div className="bg-white rounded-xl shadow-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                            <div className="flex-1">
                                <ProgressBar current ={currentQuestionIndex + 1}
                                total={questions.length} />
                            </div>
                            <div className="md:ml-6">
                                <Timer />
                            </div>
                        </div>
                    </div>
                </div>
                <Question />
            </div>
        </>
    )
}

export default Quiz;