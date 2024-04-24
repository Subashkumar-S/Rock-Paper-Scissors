import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Choice from "../Choice/Choice";
import { setComputerChoice, setResult } from "../../redux/gameSlice";
import style from "./ResultContainer.module.scss";
import { useNavigate } from "react-router-dom";

const ResultContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playerChoice = useSelector(state => state.game.userChoice);
  const computerChoice = useSelector(state => state.game.computerChoice);
  const [outcome, setOutcome] = useState("");

  useEffect(() => {
    if (playerChoice) {
      const choices = ["rock", "paper", "scissors", "lizard", "spock"];
      const randomIndex = Math.floor(Math.random() * choices.length);
      const randomChoice = choices[randomIndex];
      dispatch(setComputerChoice(randomChoice));

      const result = calculateResult(playerChoice, computerChoice);
      setOutcome(result);
      dispatch(setResult(result));
    }


  }, [playerChoice]);

  const calculateResult = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return "draw";
    } else if (
      (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
      (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
      (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
      (playerChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
      (playerChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))
    ) {
      return "win";
    } else {
      return "lose";
    }
  };

  const handleClick = () =>{
    navigate("/");
  }
  return (
    <div className={style.container}>
      <div className={style.choiceContainer}>
        <h4>You Picked</h4>
        <Choice choice={playerChoice} />
      </div>
      {
        outcome &&
        <div className={style.result}>
          <p>You {outcome}</p>
          <button onClick={handleClick}>play again</button>
        </div>
      }
      <div className={`${style.choiceContainer} ${style.won}`}>
        <h4>The HOuse Picked</h4>
        <Choice choice={computerChoice} />
      </div>
    </div>
  )
}

export default ResultContainer