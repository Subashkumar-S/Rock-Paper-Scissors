import { lizard, paper, rock, scissors, spock } from "../../assets";
import style from "./Game.module.scss";
import { useDispatch } from "react-redux";
import { setUserChoice } from "../../redux/gameSlice";
import {useNavigate} from "react-router-dom";

const Game = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const choices = [
        { name: "rock", image: rock, background: "red" },
        { name: "paper", image: paper, background: "blue" },
        { name: "scissors", image: scissors, background: "yellow" },
        { name: "lizard", image: lizard, background: "purple" },
        { name: "spock", image: spock, background: "cyan" }
    ];

    const handleChoiceClick = (choiceName) =>{
        dispatch(setUserChoice(choiceName));
        navigate("/result");
    }

    return (
        <div className={style.container}>
            <div className={style.pentagonBackground}></div>
            {choices.map((choice, index) => (
                <button
                    key={index}
                    className={`${style.choiceButton} ${style[choice.name]}`}
                    onClick={() => {handleChoiceClick(choice.name)}}
                >
                    <div className={style.image}>
                        <img src={choice.image} alt={choice.name} />
                    </div>
                </button>
            ))}
        </div>
    );
};

export default Game;
