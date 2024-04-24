import Header from "../components/Header/Header"
import ResultContainer from "../components/ResultContainer/ResultContainer"
import Rules from "../components/Rules/Rules"
import style from "./Result.module.scss"
const Result = () => {
  return (
    <div className={style.container}>
        <Header />
        <ResultContainer />
        <Rules />
    </div>
  )
}

export default Result