import { useState } from 'react';

export default function FormDifficulty() {
    const difficultyLevel = ['Easy', 'Medium', 'Hard'];
    const questionType = ['Multiple Choice Questions' , 'True/False'];
    const [difficulty, setDifficulty] = useState("");
    const [question, setQuestion] = useState("");
    const [numberOfQuestions , SetNumberOfQuestion] = useState('')

    const handleDifficulty = (e) => {
        setDifficulty(e.target.value);
    };

    const handleQuestion = (e) => {
        setQuestion(e.target.value);
    };

    const handleNumberOfQuestions = (e) => {
        SetNumberOfQuestion(e.target.value)
    }
    return (
        <>
        <div className='input-container'>
        <h4>Select Difficulty Level:</h4>
        <select value={difficulty} onChange={handleDifficulty}>
            <option hidden>Difficulty Level...</option>
            {
                difficultyLevel.map((level, index) => (
                    <option value={level} key={index}>
                        {level}
                    </option>
                ))
            }
        </select>
        </div>

        <div className='input-container'>
            <h4>Select Question Type:</h4>
            <select value={question} onChange={handleQuestion}>
            <option hidden>Question Type...</option>
            {
                questionType.map((level, index) => (
                    <option value={level} key={index}>
                        {level}
                    </option>
                ))
            }
        </select>
        </div>

        <div className='question-amount'>
          <h4>Number of Questions:</h4>
          <input value={numberOfQuestions} onChange={handleNumberOfQuestions}/>

        </div>

        <div className='started-btn'>
            <button>Get Started!</button>
        </div>

        </>
    );
}