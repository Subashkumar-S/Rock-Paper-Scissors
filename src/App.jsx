import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import style from "./App.module.scss";
import Home from "./Pages/Home";
import Result from "./Pages/Result";

function App() {

  return (
    <div className={style.main} >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
