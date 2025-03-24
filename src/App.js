import React,{useState} from 'react';
import './App.css';
import Question from './components/Question';
import qBank from './components/Questionbank';
import Score from './components/Score'
function App() {

  const [QuestionBank] = useState(qBank);
  const [currentQuestion,setcurrentQuestion] = useState(0);
  const [selectedOption,setselectedOption] = useState("");
  const [score,setScore] = useState(0);
  const [quizEnd,setQuizEnd] = useState(false);

  const handleOptionChange = (e) =>{
    setselectedOption(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  }

  const checkAnswer= () => {
    if(selectedOption === QuestionBank[currentQuestion].answer){
      setScore(score+1);
      console.log(score);
    }
  }

  const handleNextQuestion = () => {
    if(currentQuestion+1 < QuestionBank.length){
      setcurrentQuestion(currentQuestion+1);
      setselectedOption("");
    }
    else{
      setQuizEnd(true);
    }
  }
  
  return (
    <>
      <h1>QUIZ APP</h1>    
      {quizEnd===false ? (
        <Question 
          question = {QuestionBank[currentQuestion]}
          selectedOption = {selectedOption}
          onOptionChange = {handleOptionChange}
          submit = {handleSubmit}
        /> 

      ) : (
        <Score
          score={score}
        />
      )}
    </>
  );
}

export default App;
