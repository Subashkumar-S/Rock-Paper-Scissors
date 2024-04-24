import { logoBonus } from "../../assets"; 
import Score from "../Score/Score";
import style from "./Header.module.scss"
const Header = () => {
    return(
        <div className={style.container}>
            <img src={logoBonus} alt="logo" className={style.logo} />
            <Score />
        </div>
    )
}
export default Header;