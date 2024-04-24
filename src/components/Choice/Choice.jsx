import style from "./Choice.module.scss"
function Choice({ image }) {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={image} alt="lizard" />
      </div>
    </div>
  )
}

export default Choice