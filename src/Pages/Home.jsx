import Header from "../components/Header/Header";
import Rules from "../components/Rules/Rules"
import style from "./Home.module.scss"
import Game from "../components/Game/Game";
const Home = () => {
  return (
    <div className={style.container}>
        <Header />
        <Game />
        <Rules />
    </div>
  )
}

export default Home