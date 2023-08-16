import './App.css';
import Quiz from './components/Quiz/Quiz';
import { quizInfo } from './quizInfo/quizInfo';

function App() {
  return (
    <div className="App">
      <Quiz questions={quizInfo.questions}/>
    </div>
  );
}

export default App;
