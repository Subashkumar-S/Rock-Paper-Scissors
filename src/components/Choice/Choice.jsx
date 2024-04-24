import style from "./Choice.module.scss"
import {rock} from "../../assets"
function Choice() {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={rock} alt={name} />
      </div>
    </div>
  )
}

export default Choice