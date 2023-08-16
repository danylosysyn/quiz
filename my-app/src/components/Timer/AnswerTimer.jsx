import "./AnswerTimer.css"
import { useEffect, useState } from "react";

const AnswerTimer = ({ current, all }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        setProgress(100 * current / all)
    }, [current]);

    return (
        <div className="timer-container">
            <div
                className="progress"
                style={{
                    width: `${progress}%`,
                    backgroundColor: `${progress < 50
                            ? "lightgreen"
                            : progress < 70
                                ? "lime"
                                : progress < 100
                                    ? "green"
                                    : progress === 100
                                        ? "black" : "white"
                        }`
                }}
            ></div>
        </div>
    )
}

export default AnswerTimer