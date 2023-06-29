import questionPic2 from "../assets/questionPic2.svg";
import React from "react";

const QuestionContainer2 = () => {
    return (
        <div className="questionBorder flexSpaceBetween">
            <div className="questionContent">
                <span><h2>2 - Gesamteindruck</h2></span>
                <span><p>Nun geht es um den Gesamteindruck Ihrer Haut.</p></span>
                <div className="tickQuestion">
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box2"
                               value="box2"
                               defaultChecked={false}
                        />
                        <span className="qq">Meine Haut besitzt einen leichten Glanz, wirkt weder trocken noch fettig</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box2"
                               value="box2"
                               defaultChecked={false}
                        />
                        <span className="qq">Sie glänzt und erscheint fahl</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box2"
                               value="box2"
                               defaultChecked={false}
                        />
                        <span className="qq">Die Zone über der Stirn, Nase und am Kinn glänzt. Die Wangen wirken eher stumpf</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box2"
                               value="box2"
                               defaultChecked={false}
                        />
                        <span className="qq">Meine Haut erscheint normal, abgesehen von ein paar roten und juckenden Stellen</span>
                    </label>
                    <label>
                        <input className="input radioQ"
                               type="radio"
                               name="box2"
                               value="box2"
                               defaultChecked={false}
                        />
                        <span className="qq">Die Haut ist großporig</span>
                    </label>
                </div>
            </div>
            <div className="flexRight">
                <img className="questionPic" src={questionPic2} alt=""></img>
            </div>

        </div>
    )
}

export default QuestionContainer2;