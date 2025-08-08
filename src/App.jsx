import { useState, useRef } from 'react'
import Card from './components/Card';
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  // const [disabledCards, setDisabledCards] = useState([]);
  // const [showIncompleteWarning, setShowIncompleteWarning] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const options = [
    {
      index: "one",
      question: "Who is the earthly father of Jesus?",
      options: ["Abraham", "David", "Joseph", "Peter"],
      answer: "Joseph"
    },
    {
      index: "two",
      question: "What is the first book of the Bible?",
      options: ["Exodus", "Genesis", "Matthew", "Psalms"],
      answer: "Genesis"
    },
    {
      index: "three",
      question: "Who built an ark to survive the flood?",
      options: ["Jonah", "Moses", "Elijah", "Noah"],
      answer: "Noah"
    },
    {
      index: "four",
      question: "What did David use to defeat Goliath?",
      options: ["A slingshot", "A sword", "A spear", "His fists"],
      answer: "A slingshot"
    },
    {
      index: "five",
      question: "Who was swallowed by a big fish?",
      options: ["Paul", "Peter", "Jonah", "Job"],
      answer: "Jonah"
    },
    {
      index: "six",
      question: "How many days did God take to create the world?",
      options: ["3", "7", "6", "10"],
      answer: "6"
    },
    {
      index: "seven",
      question: "What did Jesus turn water into?",
      options: ["Honey", "Milk", "Oil", "Wine"],
      answer: "Wine"
    },
    {
      index: "eight",
      question: "Who led the Israelites out of Egypt?",
      options: ["Abraham", "Moses", "Isaac", "Joshua"],
      answer: "Moses"
    },
    {
      index: "nine",
      question: "Where was Jesus born?",
      options: ["Nazareth", "Jerusalem", "Bethlehem", "Galilee"],
      answer: "Bethlehem"
    },
    {
      index: "ten",
      question: "Who was the first man God created?",
      options: ["Noah", "Adam", "Moses", "Joseph"],
      answer: "Adam"
    }
  ];

  const handleClick = (e, answer) => {
    if(e === answer){
      setScore(prev => prev + 1)
    }

    setTimeout(() => {
      setCurrentQuestionIndex(prev => prev + 1);
    }, 500);
  }

  const handlePlayAgainClick = () => {
    setScore(0); // Reset the score
    setCurrentQuestionIndex(0); // Go back to Question 1
  };

  return (
    <div className="px-4 sm:px-12">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center mt-10 mb-15">For Fun Bible Quiz</h1>
      <div className="flex justify-center h-50">
        <img src="/bible.png" alt="The Bible" />
      </div>

      <div className="mt-10 mb-10 flex flex-col sm:flex-row items-center justify-around gap-4">
        {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl">Score: {score}</h2> */}
        {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl">
          <button onClick={handlePlayAgainClick}>Play Again?</button>
        </h2> */}
      </div>

      {/* <div>
        {showIncompleteWarning && (
          <div className="text-red-600 text-center text-lg mt-4 mb-4">
            Please complete the whole quiz before trying again.
          </div>
        )}
      </div> */}

      {currentQuestionIndex < options.length ? (
        <>
          <div 
            key={currentQuestionIndex}
            className="text-center text-xl sm:text-2xl mb-6">
            Question {currentQuestionIndex + 1} of {options.length}
          </div>

          <div className="animate-fade-in transition-opacity duration-500">
            <Card
              question={options[currentQuestionIndex].question}
              choice={options[currentQuestionIndex].options}
              answer={options[currentQuestionIndex].answer}
              index={options[currentQuestionIndex].index}
              handleClick={handleClick}
            />
          </div>
        </>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-3xl mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-6">
            Your final score: {score} / {options.length}
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handlePlayAgainClick}
          >
            Play Again
          </button>
        </div>
      )}

    </div>
  )
}

export default App
