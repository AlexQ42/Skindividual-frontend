import questionPic7 from "../assets/questionPic3.svg";
import React from "react";

const QuestionContainer3 = () => {
    return (
        <div className="questionBorder flexSpaceBetween">
            <div className="questionContent">
                <span><h2>3 - Mitesser und Pickel</h2></span>
                <span><p>Bilden sich häufig Mitesser und Pickel?</p></span>
                <div className="tickQuestion">
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box3"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Ja, meine Gesichtshaut bildet häufig Mitesser und Pickel</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box3"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Ja, aber nur in bestimmten Zonen wie den Nasenflügeln oder der Stirn</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box3"
                               value="box1"
                               defaultChecked={false}
                        />
                        <span className="qq">Entzündete und gerötete Stellen zeigen sich nach dem Gebrauch Kosmetika</span>
                    </label>
                    <label className="questionBox">
                        <input className="input radioQ"
                               type="radio"
                               name="box3"
                               value="box1"
                               defaultChecked={false}/>
                        <span className="qq">Nein, nicht einmal in der Pubertät hatte ich Pickel</span>
                    </label>
                    <label>
                        <input className="input radioQ"
                               type="radio"
                               name="box3"
                               value="box1"
                               defaultChecked={false}/>
                        <span className="qq">Nein, derzeit nicht, aber ich hatte schon einmal ein Problem damit</span>
                    </label>
                </div>
            </div>
            <div className="flexRight">
                <img className="questionPic" src={questionPic7} alt=""></img>
            </div>

        </div>
    )
}

export default QuestionContainer3;