// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// export default function Questions() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { questions } = location.state || { questions: [] };

//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);

//   const labels = ['A', 'B', 'C', 'D'];

//   const decodeHtml = (html) => {
//     const txt = document.createElement('textarea');
//     txt.innerHTML = html;
//     return txt.value;
//   };

//   const handleAnswerClick = (answer) => {
//     setSelectedAnswer(answer);
//   };

//   const handleNextQuestion = () => {
//     if (selectedAnswer === questions[currentQuestionIndex].correct_answer) {
//       setScore(score + 1);
//     }
//     setSelectedAnswer(null);
//     if (currentQuestionIndex === questions.length - 1) {
//       // Last question, show scorecard
//       setCurrentQuestionIndex(currentQuestionIndex + 1); // Proceed to scorecard view
//     } else {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handlePlayAgain = () => {
//     navigate('/');
//   };

//   if (currentQuestionIndex >= questions.length) {
//     return (
//       <div className='scorecard-container'>
//         <h3>Your Score:</h3>
//         <p>{score} out of {questions.length}</p>
//         <button onClick={handlePlayAgain}>Play Again</button>
//       </div>
//     );
//   }

//   const currentQuestion = questions[currentQuestionIndex];
//   const options = [
//     ...currentQuestion.incorrect_answers.slice(0, 3), // Three incorrect answers
//     currentQuestion.correct_answer
//   ].concat(
//     currentQuestion.incorrect_answers.slice(3) // Add remaining incorrect answers if any
//   );

//   const isCorrect = selectedAnswer === currentQuestion.correct_answer;

//   return (
//     <div className='questions-container'>
//       <h3>Question {currentQuestionIndex + 1}:</h3>
//       <p>{decodeHtml(currentQuestion.question)}</p>
//       <ul className='question-card'>
//         {options.map((option, index) => (
//           <li
//             key={index}
//             onClick={() => handleAnswerClick(option)}
//             style={{
//               cursor: 'pointer',
//               fontWeight: selectedAnswer === option ? 'bold' : 'normal',
//               backgroundColor: selectedAnswer === option ? (option === currentQuestion.correct_answer ? 'lightgreen' : 'lightcoral') : 'transparent'
//             }}
//           >
//             {labels[index]}: {decodeHtml(option)}
//           </li>
//         ))}
//       </ul>
//       {selectedAnswer && (
//         <div>
//           <p><strong>{isCorrect ? 'Correct!' : 'Incorrect!'}</strong></p>
//           <button className='next-question-btn'
//             onClick={handleNextQuestion}
//             disabled={false} 
//           >
//             {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Questions() {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions } = location.state || { questions: [] };

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const labels = ['A', 'B', 'C', 'D'];

  const decodeHtml = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  const handleAnswerClick = (answer) => {
    if (selectedAnswer === null) { // Allow selection only if no answer has been selected
      setSelectedAnswer(answer);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex === questions.length - 1) {
      // Last question, show scorecard
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Proceed to scorecard view
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePlayAgain = () => {
    navigate('/');
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className='scorecard-container'>
        <h3>Your Score:</h3>
        <p>{score} out of {questions.length}</p>
        <button onClick={handlePlayAgain}>Play Again</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const options = [
    ...currentQuestion.incorrect_answers.slice(0, 3), // Three incorrect answers
    currentQuestion.correct_answer
  ].concat(
    currentQuestion.incorrect_answers.slice(3) // Add remaining incorrect answers if any
  );

  const isCorrect = selectedAnswer === currentQuestion.correct_answer;

  return (
    <div className='questions-container'>
      <h3>Question {currentQuestionIndex + 1}:</h3>
      <p>{decodeHtml(currentQuestion.question)}</p>
      <ul className='question-card'>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(option)}
            style={{
              cursor: selectedAnswer === null ? 'pointer' : 'default',
              fontWeight: selectedAnswer === option ? 'bold' : 'normal',
              backgroundColor: selectedAnswer === option ? (option === currentQuestion.correct_answer ? 'lightgreen' : 'lightcoral') : 'transparent',
              listStyleType: 'none', // Removes the dot
              padding: '5px', // Adds padding to make it more clickable
              borderRadius: '5px' // Rounded corners for better aesthetics
            }}
          >
            {labels[index]}: {decodeHtml(option)}
          </li>
        ))}
      </ul>
      {selectedAnswer && (
        <div>
          <p><strong>{isCorrect ? 'Correct!' : 'Incorrect!'}</strong></p>
          <button className='next-question-btn'
            onClick={handleNextQuestion}
            disabled={false} 
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
}

