import bannerTest from "../assets/bannerTest.svg";
const TestPageBanner = () => {
    return (
        <div className="bannerBackground bannerTest">
            <div className="flexLeft">
                <img src={bannerTest} alt="Banner"></img>
            </div>
            <div className="bannerTestText">
                <div className="testTitle">
                    <span><h2>Teste deinen Hauttyp!</h2></span>
                </div>
                <span>Feuchtigkeitsmaske oder Peeling, mit leckerem Duft oderlieber ohne? Es ist oft nicht leicht, die richtige Pflege zu finden - wenn man seinen Hauttyp nicht kennt. Deine Haut zu verwöhnen, ist einfacher, als du denkst: Finde mit unserem Test heraus, was sie wirklich braucht!</span>
            </div>
        </div>
    )
}

export default TestPageBanner;