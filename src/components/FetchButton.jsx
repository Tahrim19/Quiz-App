import React from 'react';

export default function FetchButton({ category, difficulty, questionType, numberOfQuestions, setQuestions }) {
  const handleFetch = () => {
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
        console.log(data.results); // Log fetched data to console
        setQuestions(data.results); // Update the state with fetched questions
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  };

  return (
    <div className='started-btn'>
      <button type='button' onClick={handleFetch}>Get Started!</button>
    </div>
  );
}
