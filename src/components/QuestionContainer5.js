import questionPic5 from "../assets/questionPic5.svg";
import React from "react";

const QuestionContainer5 = () => {
    return (
        <div className="questionBorder flexSpaceBetween">
            <div className="questionContent">
                <span><h2>5 - Winter</h2></span>
                <span><p>Umwelteinflüsse wirken auch auf unsere Haut ein. Im Winter:</p></span>
                <div className="tickQuestion">
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box5"
                               value="box1"
                               defaultChecked={false}/>
                        <span className="qq">Ist meine Haut so strapazierfähig wie im Sommer</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box5"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Bekommt mir die trockene Heizungsluft gar nicht</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box5"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Benötigt meine Haut nicht mehr Pflege als zu einer anderen Jahreszeit</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box5"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Muss ich speziell auf meine Wangen achten, die immer besonders trocken sind</span>
                    </label>
                    <label>
                        <input className="input radioQ"
                               type="radio"
                               name="box5"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Ist meine Haut irritiert und gerötet</span>
                    </label>
                </div>
            </div>
            <div className="flexRight">
                <img className="questionPic" src={questionPic5} alt=""></img>
            </div>

        </div>
    )
}

export default QuestionContainer5;