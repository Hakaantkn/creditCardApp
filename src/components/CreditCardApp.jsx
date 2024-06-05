export function CreditCardApp() {


    return (
        <>
        <div className="container">
            <div className="leftArea"><img src="./src/assets/img/Group 10 (1).png" alt="" /></div>
            <div className="cards">
                <div className="cardFront">
                    <div className="cardSembol">
                        <img src="./src/assets/img/Oval (1).svg" alt="" />
                        <img src="./src/assets/img/Oval (2).svg" alt="" />
                    </div>
                        <div className="cardInside">
                            <h1>0000 0000 0000 0000</h1>
                            <div className="userDate">
                                <p>JANE APPLESEED</p>
                                <p>00/00</p>
                            </div>
                        </div>
                </div>
                <div className="cardBack">
                    <img src="./src/assets/img/Group 13.png" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}