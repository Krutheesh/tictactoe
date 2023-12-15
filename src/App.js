import React, { useState } from "react";
import Score from "./components/Score";
import {FaHandRock, FaHandPaper, FaHandScissors} from 'react-icons/fa';
import Winner from "./components/winner";
const App = () => {
  const [userscore, updateUserscore]=useState(0);
  const [pcscore, updatePcscore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(0);
  const [pcChoice, setPcChoice] = useState(0);
  const icons = [<FaHandRock/>, <FaHandPaper/>, <FaHandScissors/>]
  const [usericon, setUsericon] = useState();
  const [pcicon, setPcicon] = useState();

  const [winner,setWinner] = useState("");
  
  const [you ,setYou] = useState("");
  const [pc,setPc] = useState("")


  const selectOption = (optionIndex) => {
    
    setPlayerChoice(optionIndex); 
    const pcOption = Math.floor(Math.random()*3);
    setPcChoice(pcOption);
    setUsericon(icons[optionIndex]);
    setPcicon(icons[pcOption]);

//user choice

    let yourChose = "";
    if(optionIndex === 0){
       yourChose = "rock";
    }
    else if(optionIndex === 1){
       yourChose = "paper"
    }
    else{
       yourChose = "scissor";
    }

//computer choice

    let pcChose = ""
    if(pcOption === 0){
      pcChose = "rock"
   }
   else if(pcOption === 1){
      pcChose = "paper"
   }
   else{
      pcChose = "scissor";
   }
    setYou(`your chose ${yourChose}`);
    setPc(`computer chose ${pcChose}`);


// main logic

    if (optionIndex === pcOption){
      setWinner("tied");
      updateUserscore(userscore)
    }

  //rock conditions

   else if (optionIndex === 0 && (pcOption === 2)){
      setWinner("You Won! congratulation")
      updateUserscore(userscore+1);
      updatePcscore(pcscore-1);
   }
   else if (optionIndex === 0 && (pcOption === 1)){
    setWinner("You loose! bad luck")
      updateUserscore(userscore-1);
      updatePcscore(pcscore+1);

   }

   // paper conditions

   else if (optionIndex === 1 && (pcOption === 2)){
    setWinner("You loose! bad luck")
    updateUserscore(userscore-1);
    updatePcscore(pcscore+1);
 }
 else if (optionIndex === 1 && (pcOption === 0)){
  setWinner("You Won! congratulation")
  updateUserscore(userscore+1);
  updatePcscore(pcscore-1);
}

  // scissor conditions

else if (optionIndex === 2 && (pcOption === 0)){
  setWinner("You loose! bad luck")
  updateUserscore(userscore-1);
  updatePcscore(pcscore+1);
}
else if (optionIndex === 2 && (pcOption === 1)){
setWinner("You Won! congratulation")
updateUserscore(userscore+1);
updatePcscore(pcscore-1);
}


  }
  return (
<div className="bg-slate-900">
  <h1 className="md:text-[2.5rem] text-white text-center border-2">ROCK, SCISSOR AND PAPER GAME (ReactJs)</h1>
  <main>
    <div className="flex justify-center items-center ">
        <Score score = {userscore} icon={usericon} player= "your score" choose = {you}/>
        <Winner win= {winner} />
        <Score score = {pcscore} icon={pcicon} player = "computer score" choose ={pc}/>
    </div>

    <section>
      <div className="flex justify-center my-[1rem] ">
        <div>
        <FaHandRock className="text-white text-[5rem] mx-[2rem] hover:text-sky-600" onClick={() => selectOption(0) }>
        </FaHandRock>
        <p className="text-sky-600 text-bold text-center text-[1.5rem] pl-3 ">Rock</p>
        </div>
        <div>
        <FaHandPaper className="text-white text-[5rem] mx-[2rem] hover:text-sky-600" onClick={() => {selectOption(1) }}></FaHandPaper>
        <p className="text-sky-600 text-bold text-center text-[1.5rem] pl-3 ">Paper</p>
        </div>
        <div>
        <FaHandScissors className="text-white text-[5rem] mx-[2rem] hover:text-sky-600 " onClick={() => selectOption(2) }></FaHandScissors>
        <p className="text-sky-600 text-bold text-center text-[1.5rem] pl-3 border-1">Scissor</p>
        </div>
        
      </div>

      <div>
      <h2 className="text-center text-[2rem] bg-white text-sky-600 ">Select one option</h2>
      </div>
    </section>
    
  </main>
  </div>

  )
  
}

export default App;