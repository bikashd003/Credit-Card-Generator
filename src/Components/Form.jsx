import React, { useState } from "react";
import "../App.css";
import sideImg from "../Images/Rectangle 1.png";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState(false);
  const isMonth = /^(0[1-9]|1[0-2])$/;

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length === 0 || number.length === 0) {
      setError(true);
    }
  }

  return (
    <>
      <div id="main">
        <img src={sideImg} alt="background" />
        <form id="form" onSubmit={handleSubmit}>
          <div className="cardholder-name">
            <h1>cardholder name</h1>
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {error && name.length <= 0 ? <p>Cardholder name required</p> : ""}
          </div>
          <div className="cardnumber">
            <h1>card number</h1>
            <input
              type="number"
              placeholder="e.g. 1234 5678 9123 0000"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            {error && number.length <= 0 ? <p>Card number required</p> : ""}
          </div>
          <div className="details">
            <h1 className="exp">exp.date (mm/yy)</h1>
            <h1 className="cvch1">cvc</h1>
            <div className="date">
              <div className="month-element">
                <input
                  type="number"
                  className="month"
                  placeholder="MM"
                  value={month}
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                />
                {error && month.length<=0? <p>Month required</p> : ""}
              </div>
              <div className="year-element">
                <input
                  type="number"
                  className="year"
                  placeholder="YY"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                />
                {error &&year.length<=0 ? <p>Month required</p> : ""}
              </div>
            </div>
            <div className="cvc-elemnt">
              <input
                type="text"
                className="cvc"
                placeholder="e.g. 123"
                value={cvc}
                onChange={(e) => {
                  setCvc(e.target.value);
                }}
              />
              {error && (isNaN(cvc) || cvc.length<= 0)? <p>CVC must be numeric</p> : ""}
            </div>
          </div>
          <button className="conform">conform</button>
        </form>
      </div>
    </>
  );
}

export default Form;
