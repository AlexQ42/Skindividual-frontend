import questionPic6 from "../assets/questionPic6.svg";
import React from "react";

const QuestionContainer6 = () => {
    return (
        <div className="questionBorder flexSpaceBetween">
            <div className="questionContent">
                <span><h2>6 - Sommer</h2></span>
                <span><p>Umwelteinflüsse wirken auch auf unsere Haut ein. Im Sommer:</p></span>
                <div className="tickQuestion">
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box6"
                               value="box1"
                               defaultChecked={false}/>
                        <span className="qq">Achte ich auf Sonnenschutz, mehr benötigt meine Haut nicht</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box6"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Ist meine Haut besonders trocken und spannt</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box6"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Passiert mit meiner Haut nichts Besonderes</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box6"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Benötigt sie spezielle Pflege, da bestimmte Gesichtspartien leicht austrocknen</span>
                    </label>
                    <label>
                        <input className="input radioQ"
                               type="radio"
                               name="box6"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Habe ich ein besonderes Problem, da ich Sonnencreme nicht so gut vertrage</span>
                    </label>
                </div>
            </div>
            <div className="flexRight">
                <img className="questionPic" src={questionPic6} alt=""></img>
            </div>

        </div>
    )
}

export default QuestionContainer6;