import { useState } from "react";
import { lizard, paper, rock, scissors, spock } from "../../assets";
import style from "./Game.module.scss";

const Game = () => {
    const choices = [
        { name: "rock", image: rock, background: "red" },
        { name: "paper", image: paper, background: "blue" },
        { name: "scissors", image: scissors, background: "yellow" },
        { name: "lizard", image: lizard, background: "purple" },
        { name: "spock", image: spock, background: "cyan" }
    ];

    const [selectedChoice, setSelectedChoice] = useState(null);

    const handleChoiceSelect = (choiceName) => {
        setSelectedChoice(choiceName);
    };

    return (
        <div className={style.container}>
            <div className={style.pentagonBackground}></div>
            {choices.map((choice, index) => (
                <button
                    key={index}
                    className={`${style.choiceButton} ${style[choice.name]}`}
                    onClick={() => handleChoiceSelect(choice.name)}
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
