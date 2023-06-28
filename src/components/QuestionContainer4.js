import questionPic4 from "../assets/questionPic4.svg";
import React from "react";

const QuestionContainer4 = () => {
    return (
        <div className="questionBorder flexSpaceBetween">
            <div className="questionContent">
                <span><h2>4 - Hautgefühl</h2></span>
                <span><p>Sie sind tagsüber beschäftigt und was sehen Sie nun abends im Spiegel?</p></span>
                <div className="tickQuestion">
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box4"
                               value="box1"
                               defaultChecked={false}/>
                        <span className="qq">Meine Haut spannt. Jetzt nutze ich schnell eine Lotion</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box4"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Mein Gesicht glänzt, die Mitesser haben zugenommen</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box4"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Vor allem Stirn, Nase und Kinn glänzen. Ein paar Pickel haben sich gebildet</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box4"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Ich habe ein paar juckende, spannende und trockene Stellen</span>
                    </label>
                    <label>
                        <input className="input radioQ"
                               type="radio"
                               name="box4"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Nichts Auffälliges zu beobachten</span>
                    </label>
                </div>
            </div>
            <div className="flexRight">
                <img className="questionPic" src={questionPic4} alt=""></img>
            </div>

        </div>
    )
}

export default QuestionContainer4;