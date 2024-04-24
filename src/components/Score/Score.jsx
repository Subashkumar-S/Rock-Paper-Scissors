import style from "./Score.module.scss"
const Score = () => {
  return (
    <div className={style.container}>
        <h4 className={style.heading}>Score</h4>
        <p className={style.score}>30</p>
    </div>
  )
}

export default Score