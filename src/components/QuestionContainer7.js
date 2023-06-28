import questionPic37 from "../assets/questionPic7.svg";
import React from "react";

const QuestionContainer7 = () => {
    return (
        <div className="questionBorder flexSpaceBetween">
            <div className="questionContent">
                <span><h2>7 - Hautbeschreibung</h2></span>
                <span><p>Zum Abschluss: Welche der folgenden Beschreibungen passt am besten zu Ihrer Haut?</p></span>
                <div className="tickQuestion">
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box7"
                               value="box1"
                               defaultChecked={false}/>
                        <span className="qq">Meine Haut ist ebenmäßig und weitgehend oder ganz frei von Mitessern</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box7"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Meine Haut spannt, schuppt und rötet sich leicht</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box7"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Meine Haut glänzt und neigt zu Mitessern und Pickeln</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box7"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Trockene und fettige Areale liegen bei meiner Haut dicht nebeneinander</span>
                    </label>
                    <label>
                        <input className="input radioQ"
                               type="radio"
                               name="box7"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Meine Haut reagiert gereizt auf verschiedene Einflüsse wie Kosmetika</span>
                    </label>
                </div>
            </div>
            <div className="flexRight">
                <img className="questionPic" src={questionPic37} alt=""></img>
            </div>

        </div>
    )
}

export default QuestionContainer7;