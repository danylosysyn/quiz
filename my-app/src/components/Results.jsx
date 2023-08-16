import emailjs from "@emailjs/browser"
import { useRef } from "react"

const Results = ({ score }) => {


    const form = useRef();

    let level = () => {
        if (score <= 6) {
            return "A1: Elementary"
        } else if (score > 6 && score < 10) {
            return "A2: Pre-Intermediate"
        } else if (score >= 10 && score < 15) {
            return "B1: Intermediate"
        } else if (score >= 15 && score <= 20) {
            return "B2: Upper-Intermediate"
        } else if (score > 20 && score <= 24) {
            return "C1: Advanced"
        } else if (score === 25) {
            return "C2: Proficient"
        }
    }

    const clickHandler = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_m3ldrlk', 'template_z7evjjc', form.current, 'oeWoRPeKEhHbM-2nN')
            .then((result) => {
                console.log(result.text);
                document.getElementById("emailer__text").style.display = "block";
                document.getElementsByTagName("label").style.display = "none";
            }, (error) => {
                console.log(error.text);
            });


    }

    emailjs.init('oeWoRPeKEhHbM-2nN');

    return (
        <div>
            <div className="results">
                <h2>Congratulations!</h2>
                <h3>You scored <span>{score}</span> points</h3> <hr />
                <p>According to the FirePrider Test, <br /> your current English level is <span>{level()}</span></p>
            </div>

            <div className="emailer">
                <h3>До речі, на рівень {level().slice(0, 2)} зараз у нас є чудова пропозиція! Хочеш дізнатися?</h3>
                <form onSubmit={clickHandler} ref={form}>
                    <div>
                        <input type="text" placeholder="Instagram" name="message" id="inst" />
                        <label className="form__label">Instagram</label>
                    </div>
                    <button type="submit">Send</button>
                    <textarea name="level" value={level()} readOnly></textarea>
                </form>
                <p id="emailer__text">Дякуємо, що обрали FirePrider! <br /> Інформація про курс буде надіслана згодом</p>
            </div>
        </div>

    )
}

export default Results