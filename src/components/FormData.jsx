export default function FormData({ setDifficulty, setQuestionType, setNumberOfQuestions }) {
  const difficultyLevel = ['Easy', 'Medium', 'Hard'];
  const questionType = ['Multiple Choice Questions', 'True/False'];
  
  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleQuestion = (e) => {
    setQuestionType(e.target.value);
  };

  const handleNumberOfQuestions = (e) => {
    setNumberOfQuestions(e.target.value);
  };

  return (
    <>
      <div className='input-container'>
        <h4>Select Difficulty Level:</h4>
        <select onChange={handleDifficulty}>
          <option hidden>Difficulty Level...</option>
          {difficultyLevel.map((level, index) => (
            <option value={level.toLowerCase()} key={index}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div className='input-container'>
        <h4>Select Question Type:</h4>
        <select onChange={handleQuestion}>
          <option hidden>Question Type...</option>
          {questionType.map((type, index) => (
            <option value={type.toLowerCase().replace(/\s+/g, '_')} key={index}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className='question-amount'>
        <h4>Number of Questions:</h4>
        <input onChange={handleNumberOfQuestions} />
      </div>
    </>
  );
}
