import { lizard, paper, rock, scissors, spock } from "../../assets"
import Choice from "../Choice/Choice"
import style from "./ChoiceContainer.module.scss"
const ChoiceContainer = () => {

    const choices = [
        { name: "rock", image: rock, background: "red" },
        { name: "paper", image: paper, background: "blue" },
        { name: "scissors", image: scissors, background: "yellow" },
        { name: "lizard", image: lizard, background: "purple" },
        { name: "spock", image: spock, background: "cyan" }
    ]

    return (
        <div className={style.container}>
            {
                choices.map((choice, index) => (
                    <Choice key={index} image={choice.image} background={choice.background} />
                ))
            }
        </div>
    )
}

export default ChoiceContainer