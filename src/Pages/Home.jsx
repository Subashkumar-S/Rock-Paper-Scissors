import Header from "../components/Header/Header";
import Rules from "../components/Rules/Rules"
import style from "./Home.module.scss"
import ChoiceContainer from "../components/ChoiceContainer/ChoiceContainer";
const Home = () => {
  return (
    <div className={style.container}>
        <Header />
        <ChoiceContainer />
        <Rules />
    </div>
  )
}

export default Home