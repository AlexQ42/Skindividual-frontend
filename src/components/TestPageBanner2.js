import bannerTest from "../assets/bannerTest.svg";
const TestPageBanner2 = () => {
    return (
        <div className="bannerBackground bannerTest">
            <div className="flexLeft">
                <img src={bannerTest} alt="Banner"></img>
            </div>
            <div className="bannerTestText">
                <div className="testTitle">
                    <span><h2>Dein Hauttypergebnis!</h2></span>
                </div>
                <span>Deine Haut zu verstehen ist der erste wichtige Schritt auf dem Weg zu gesunder, strahlend schöner Haut. Bevor du dir eine Hautpflege Routine mit den besten Produkten und den effektivsten Wirkstoffen zusammenstellst, solltest du daher erstmal deinen Hauttyp kennen</span>
            </div>
        </div>
    )
}

export default TestPageBanner2;