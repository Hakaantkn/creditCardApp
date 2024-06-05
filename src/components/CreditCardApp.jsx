export function CreditCardApp() {
    const cardHolder = document.getElementById('cardHolder');
    const cardNumber = document.getElementById('cardNumber');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const cvc = document.getElementById('cvc');
    const cardNum = document.getElementById('cardNum');
    const holder = document.getElementById('holder');
    const date = document.getElementById('date');
    const cvcText = document.getElementById('cvcBack');
    const myForm = document.getElementById('myForm');
    

    myForm.addEventListener('submit', function(e){
        e.preventDefault();



        cardNum.innerHTML = cardNumber;
        holder.innerHTML = cardHolder;
        date.innerHTML = `${month}/${year}`;
        cvcText.innerHTML = cvc;
    })

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
                            <h1 id="cardNum">0000 0000 0000 0000</h1>
                            <div className="userDate">
                                <p id="holder">JANE APPLESEED</p>
                                <p id="date">00/00</p>
                            </div>
                        </div>
                </div>
                <div className="cardBack">
                    <img src="./src/assets/img/Group 13.png" alt="" />
                    <div className="cardBackText">
                        <p id="cvcBack">000</p>
                    </div>
                </div>
            </div>
            <div className="formArea">
                <form id="myForm">
                <div className="first">
                    <label htmlFor="CARDHOLDER NAME">CARDHOLDER NAME</label>
                    <input className="inputBig" type="text" name="cardHolder" id="cardHolder"  placeholder="e.g. Jane Appleseed" />
                </div> 
                <div className="second">
                    <label htmlFor="CARD NUMBER">CARD NUMBER</label>
                    <input className="inputBig" type="text" name="cardNumber" id="cardNumber" placeholder="e.g. 1234 5678 9123 0000" />
                </div>
                <div className="cardDate">
                    <div className="dateDiv">
                    <label htmlFor="Exp. Date (MM/YY)">Exp. Date (MM/YY)</label>
                    <div className="yeter">
                    <input type="text" name="month" id="month" placeholder="MM" className="littleInput" />
                    <input type="text" name="year" id="year" placeholder="YY" className="littleInput" />  
                    </div>

                    </div>
                    <div className="dateDiv">
                        <label htmlFor="CVC">CVC</label>
                        <input type="text" name="CVC" id="cvc" placeholder="e.g. 123" className="ortancaInput" />
                    </div>
                </div>
                    <button type="submit" className="btn">Confirm</button>


                </form>
            </div>
        </div>
        </>
    )
}