import { useSelector } from "react-redux";
import style from "./Score.module.scss";
import { selectScore } from "../../redux/gameSlice";

const Score = () => {
  const score = useSelector(selectScore);
  return (
    <div className={style.container}>
        <h4 className={style.heading}>Score</h4>
        <p className={style.score}>{score}</p>
    </div>
  )
}

export default Score