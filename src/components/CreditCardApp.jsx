import React, { useState } from "react";
export function CreditCardApp() {
    const [cardHolder, setCardHolder] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardDate, setCardDate] = useState("");
    const [cardYear, setCardYear] = useState("");
    const [cardCvc, setCardCvc] = useState("");
    function cardHolderChange(event) {
        setCardHolder(event.target.value);
    }

    function cardNumberChange(event){
        setCardNumber(event.target.value);
    }
    function cardDateChange(event){
        setCardDate(event.target.value);
    }
    function cardYearChange(event){
        setCardYear(event.target.value);
    }
    function cardCvcChange(event){
        setCardCvc(event.target.value);
    }
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
                            <h1 ><strong>{cardNumber}</strong></h1>
                            <div className="userDate">
                                <p ><strong>{cardHolder}</strong></p>
                                <p ><strong>{cardDate} / {cardYear}</strong></p>
                            </div>
                        </div>
                </div>
                <div className="cardBack">
                    <img src="./src/assets/img/Group 13.png" alt="" />
                    <div className="cardBackText">
                        <p ><strong>{cardCvc}</strong></p>
                    </div>
                </div>
            </div>
            <div className="formArea">
                <form id="myForm">
                <div className="first">
                    <label htmlFor="CARDHOLDER NAME">CARDHOLDER NAME</label>
                    <input className="inputBig" type="text" name="cardHolder" onChange={cardHolderChange}   placeholder="e.g. Jane Appleseed" />
                </div> 
                <div className="second">
                    <label htmlFor="CARD NUMBER">CARD NUMBER</label>
                    <input className="inputBig" type="text" maxLength={16} name="cardNumber" onChange={cardNumberChange}  placeholder="e.g. 1234 5678 9123 0000" />
                </div>
                <div className="cardDate">
                    <div className="dateDiv">
                    <label htmlFor="Exp. Date (MM/YY)">Exp. Date (MM/YY)</label>
                    <div className="yeter">
                    <input type="text" name="month" placeholder="MM" maxLength={2} onChange={cardDateChange} className="littleInput" />
                    <input type="text" name="year" placeholder="YY" maxLength={2} onChange={cardYearChange} className="littleInput" />  
                    </div>

                    </div>
                    <div className="dateDiv">
                        <label htmlFor="CVC">CVC</label>
                        <input type="text" name="CVC" onChange={cardCvcChange} placeholder="e.g. 123" className="ortancaInput" />
                    </div>
                </div>
                    <button type="submit" className="btn">Confirm</button>


                </form>
            </div>
        </div>
        </>
    )
}