import React from "react";
import {Link} from "react-router-dom";
import TestPageBanner from "../components/TestPageBanner";
import QuestionContainer1 from "../components/QuestionContainer1";
import QuestionContainer2 from "../components/QuestionContainer2";
import QuestionContainer3 from "../components/QuestionContainer3";
import QuestionContainer4 from "../components/QuestionContainer4";
import QuestionContainer5 from "../components/QuestionContainer5";
import QuestionContainer6 from "../components/QuestionContainer6";
import QuestionContainer7 from "../components/QuestionContainer7";


const Test =  () => {

    return (
        <div>
            <div>
                <TestPageBanner/>
                <QuestionContainer1/>
                <QuestionContainer2/>
                <QuestionContainer3/>
                <QuestionContainer4/>
                <QuestionContainer5/>
                <QuestionContainer6/>
                <QuestionContainer7/>
            </div>
            <div className="buttonTest flexSpaceBetween">
                <Link to="/">
                    <button className="button">zurück zur Startseite</button>
                </Link>
                <Link to="/Result">
                    <button className="button">Test auswerten</button>
                </Link>
            </div>
        </div>
    );
}

export default Test;