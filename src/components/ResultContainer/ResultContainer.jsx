import Choice from "../Choice/Choice";
import style from "./ResultContainer.module.scss";

const ResultContainer = () => {
  return (
    <div className={style.container}>
      <div className={style.choiceContainer}>
        <h4>You Picked</h4>
        <Choice />
      </div>
      <div className={style.result}>
        <p>You Won</p>
        <button>play again</button>
      </div>
      <div className={`${style.choiceContainer} ${style.won}`}>
        <h4>The HOuse Picked</h4>
        <Choice />
      </div>
    </div>
  )
}

export default ResultContainer