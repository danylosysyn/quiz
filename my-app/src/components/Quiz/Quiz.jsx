import { useState } from "react"
import "./Quiz.css"
import Results from "../Results"
import AnswerTimer from "../Timer/AnswerTimer"

const Quiz = ({ questions }) => {
    const [current, setCurrent] = useState(0)
    const { question, choices, correct } = questions[current];

    const [answerIdx, setAnswerIdx] = useState(null)
    const [myAnswer, setMyAnswer] = useState("")

    const [correctCount, setCorrectCount] = useState(0)


    function answerHandler(answer, idx) {
        setAnswerIdx(idx)
        setMyAnswer(choices[idx])
    }

    const nextHandler = () => {
        setAnswerIdx(null)
        if (myAnswer === correct) {
            setCorrectCount(correctCount + 1)
        }
        if (current !== questions.length - 1) {
            setCurrent(current + 1);
        } else {
            const quests = document.getElementById("question-container");
            quests.style.display = "none";

            const rez = document.getElementById("result-container");
            rez.style.display = "block"
        }

    }

    return (
        <div className="quiz">
            <div className="quiz-container">
                <AnswerTimer current={current + 1} all={questions.length}/>
                <div id="question-container">
                    <span className="quiz-no">{current + 1}</span>
                    <span className="quiz-total">/ {questions.length}</span>
                    <h2>{question}</h2>
                    <ul>
                        {
                            choices.map((answer, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        onClick={() => answerHandler(answer, idx)}
                                        className={answerIdx === idx ? "selected-choice" : null}
                                    >
                                        {answer}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="next-container">
                        <button className="next" onClick={nextHandler}>
                            {current === questions.length - 1 ? "Finish" : (answerIdx? "Next" : "Skip")}
                        </button>
                    </div>
                </div>
                <div id="result-container">
                    <Results score={correctCount} />
                </div>
            </div>

        </div>
    )
}

export default Quiz