"use client"
import React from 'react'
import { useState } from 'react';
import "../../public/CoolFox.PNG";

const form = () => {

  //const [userInput, setUserInput] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [userNumber, setUserNumber] = useState(0);
  const [userBool, setUserBool] = useState(true);

  const [credentials, setCredentials] = useState({});

  function showAlert(){
    alert("Hello World")
    ///
    ///trim
  }

  function SendMessage(e: React.FormEvent){
    e.preventDefault() // Prevent form default behavior
    
    alert("Ok, I will call you " + userInput)
  }

  function doMath(e: React.FormEvent){
    e.preventDefault() // Prevent form default behavior
    alert(userNumber * userNumber)
    
  }

  return (
    <div>
      <center>
        This is a form
        <form onSubmit={SendMessage}>
          Type your name
          <input type="text"
            value={userInput}
            placeholder="Enter your name"
            onChange={e => setUserInput(e.target.value)}
            /* onChange={e => setUserInput(parseInt(e.target.value))} */
          />
          <br/>
          <button /* onClick={showAlert} */> *Click Me* </button>
        </form>
        <img src="CoolFox.png" alt="A fox with sunglasses" style={{borderRadius: 50, width:"400px", height:"400px"}}></img>
        <form onSubmit={doMath}>
          Number<input style={{borderWidth: 3, borderColor: "white"}} type="text" placeholder="Enter a number"
          onChange={e => setUserNumber(parseInt(e.target.value))} />
        </form>
        {userBool ? <p>The Bool is True</p> : <p>The Bool is False</p>}
        <button onClick={()=>{setUserBool(!userBool)}}> Toggle Bool</button>
      </center>
    </div>
  )
}

export default form