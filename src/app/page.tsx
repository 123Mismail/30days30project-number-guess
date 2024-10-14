"use client";
import React, { useEffect, useRef, useState } from "react";

function NumberguessingGame() {
  const [userGuesNumber, setUserGuesedNumber] = useState(0);
  const [systemguesedNumber, setSystemGuesedNumber] = useState(0);
  const [isCorrect,setIsCorrect]=useState("Your guess result shows here");
  const [isPlayagain,setPalayAgain]=useState(false)
   const usernumRef=useRef(null)
  useEffect(() => {
 
    generateRandomNmbr();
    setUserGuesedNumber(0)
     console.log(systemguesedNumber,"system gues number in useeffect")
  }, [setPalayAgain]);

  const generateRandomNmbr=()=>{
    let num=Math.floor(Math.random()*2+1);
    console.log(num);
    setSystemGuesedNumber(num);
    console.log(systemguesedNumber,"random number generated is")
  }
  const handelOnclickGues=()=>{
    if(systemguesedNumber===userGuesNumber){
      setIsCorrect("congratulations you guessed a right number");
      setSystemGuesedNumber(0)
      alert("congratulayions you guessed a right correct number")
    }else{
      setIsCorrect("Sorry your guess was wrong try again")
    }
  };

   const hanldePlayAgain=()=>{
    setPalayAgain(true)
    generateRandomNmbr();
    setUserGuesedNumber(0);
    setIsCorrect("Try again !!")

   }

  const handleOnchangebtn=(e)=>{
    let usernum=e.target.value;
    console.log(usernum)
    
    setUserGuesedNumber(Number(usernum));
    
   
  }

  return (
    <div className="h-[400px] max-w-[500px] w-full mx-auto rounded-2xl text-center  mt-[25vh] bg-gradient-to-b from-blue-500 to-purple-500">
      <div className="p-6 text-2xl font-medium text-white">
        <h1 className="font-sans text-2xl"> Number Guessing Game</h1>
      </div>
      <div className="p-2">
        <input
          className="p-2 text-xl text-center rounded-lg"
          type="number"
          placeholder="Enter a number 1 to 10"
          // ref={usernumRef}
          onChange={(e)=>handleOnchangebtn(e)}
        />
      </div>
      <div className="p-2 text-xl ">
        <button className="px-5 py-3 hover:px-6 hover:py-4 hover:bg-blue-600 hover:shadow-2xl rounded-lg bg-blue-700 text-white"
        onClick={handelOnclickGues}
        >
          Guess Number
        </button>
      </div>

      <div className="p-2 ">
        <p className="text-xl font-medium text-white">Result</p>
  
         <div className="p-2 text-2xl font-medium">{isCorrect}</div>
        
      </div>
      <div><button className="px-4 py-2 rounded-xl text-xl font-medium  hover:px-5 hover:py-3 hover:bg-blue-800 hover:shadow-2xl bg-blue-600 text-white"
      onClick={hanldePlayAgain}
      >Play again</button></div>
    </div>
  );
}

export default NumberguessingGame;
