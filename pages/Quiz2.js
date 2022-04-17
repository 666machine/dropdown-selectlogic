import React, { useState } from 'react';

export default function Quiz2() {
  const questions = [
    {
      questionText: '1What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', correctAnswer: 'Paris' },
        { answerText: 'London', correctAnswer: 'Paris' },
        { answerText: 'Paris', correctAnswer: 'Paris' },
        { answerText: 'Dublin', correctAnswer: 'Paris' }
      ]
    },
    {
      questionText: 'sadasdas What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', correctAnswer: 'Paris' },
        { answerText: 'London', correctAnswer: 'Paris' },
        { answerText: 'Paris', correctAnswer: 'Paris' },
        { answerText: 'Dublin', correctAnswer: 'Paris' }
      ]
    }
  ];

  //   questions[index]?.questionText}

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  //   const [ShowCorrectAnswer, setShowCorrectAnswer] = useState('');

  const [score, setScore] = useState(0);

  const [scoreList, setScoreList] = useState(0);

  const [TrackedAnswers, setTrackedAnswers] = useState([]);

  // DOES CONSOLE LOG ONLY IF CORRECT
  const handleAnswerButton = (answerOption) => {
    if (answerOption.correctAnswer === answerOption.answerText) {
      setScore(score + 1);
    }

    setTrackedAnswers([...TrackedAnswers, answerOption.answerText]);
    // DOES CONSOLE LOG if correct or wrong

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleResetButton = (score) => {
    setScoreList(scoreList + score);
    setCurrentQuestion(0);
    setShowScore('');
    setScore(0);
    setTrackedAnswers([]);
  };

  return (
    <div className='app'>
      {/* <Main />
      <Navbar /> */}
      <h1 className='pb-6'>hello</h1>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length} and your acummulated
          score is {scoreList} and
          {TrackedAnswers.map((trackedAnswer, index) => {
            return (
              <div key={index}>
                <p> Question {index + 1}</p>
                <p> {questions[index]?.questionText}</p>

                <p> you selected {trackedAnswer}</p>
                <p>
                  The correct answer is
                  {questions[index]?.answerOptions[index]?.correctAnswer}
                </p>
              </div>
            );
          })}
          {/* FOCUS HERE */}
          {/* FOCUS HERE */}
          {/* FOCUS HERE */}
          {/* FOCUS HERE */}
          <button onClick={() => handleResetButton(score)}>Play Again!</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            <select>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <option key={answerOption}>{answerOption.answerText}</option>
              ))}
            </select>
            <button className='py-5'>select</button>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                key={answerOption}
                onClick={() => handleAnswerButton(answerOption)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
