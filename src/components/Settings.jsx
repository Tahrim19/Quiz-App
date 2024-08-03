import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormCategory from './FormCategory';
import FormData from './FormData';
import '../css/Form.css';

export default function Settings() {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState('');
  const [questions, setQuestions] = useState([]);

  const navigate = useNavigate();

  const handleFetchAndNavigate = () => {
    let url = `https://opentdb.com/api.php?amount=${numberOfQuestions}`;

    if (category) {
      url += `&category=${category}`;
    }
    if (difficulty) {
      url += `&difficulty=${difficulty}`;
    }
    if (questionType) {
      const type = questionType === 'multiple_choice_questions' ? 'multiple' : 'boolean';
      url += `&type=${type}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results); // Update the state with fetched questions
        // Navigate to Questions page and pass the questions as state
        navigate('/questions', { state: { questions: data.results } });
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  };

  return (
    <>
      <form className='settings-form' onSubmit={(e) => e.preventDefault()}>
        <div className='settings-form-data'>
          <h3>Quiz Master: React Edition</h3>
          <FormCategory setCategory={setCategory} />
          <FormData
            setDifficulty={setDifficulty}
            setQuestionType={setQuestionType}
            setNumberOfQuestions={setNumberOfQuestions}
          />
        </div>
        <p className='settings-form-data' 
         style={{
          textAlign: 'center', 
          fontSize: '10px',
          marginTop: '10px', 
        }}
        >
          Made using Reactjs
        </p>
        <div className='started-btn'>
          <button type='button' onClick={handleFetchAndNavigate}>Get Started!</button>
        </div>
      </form>
    </>
  );
}
