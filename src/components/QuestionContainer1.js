import questionPic1 from "../assets/questionPic1.svg";
import React from "react";

const QuestionContainer1 = () => {
    return (
        <div className="questionBorder flexSpaceBetween">
            <div className="questionContent">
                <span><h2>1 - Poren</h2></span>
                <span><p>Schauen Sie in den Spiegel und achten Sie auf Ihre Hautporen.</p></span>
                <div className="tickQuestion">
                    <label className="questionBox">
                        <input className="input radioQ"
                                  type="radio"
                                  name="box1"
                                  value="box1"
                                  defaultChecked={false}/>
                        <span className="qq">Die Poren sind kaum zu erkennen</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box1"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Sie sind sehr klein und erst bei genauem Hinsehen erkennbar</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box1"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Die Nasenhaut ist großporig, die der Wangen eher feinporig</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box1"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Die Hautporen erscheinen weder zu groß noch zu klein</span>
                    </label>
                    <label>
                        <input className="input radioQ"
                               type="radio"
                               name="box1"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Die Haut allgemein ist großporig</span>
                    </label>
                </div>
            </div>
            <div className="flexRight">
                <img className="questionPic" src={questionPic1} alt=""></img>
            </div>

        </div>
    )
}

export default QuestionContainer1;