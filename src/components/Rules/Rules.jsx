import { useState } from "react"
import { close, rulesBonus } from "../../assets"
import style from "./Rules.module.scss"
const Rules = () => {
    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(prev => !prev);
    }
    console.log(visible);
    return (
        <>
            <button onClick={handleClick} className={style.button}>Rules</button>
            {visible &&
                (
                    <div className={style.container}>
                        <div className={style.headingContainer}>
                            <h4 className={style.heading}>Rules</h4>
                            <button onClick={handleClick} className={style.closeButton}>
                                <img src={close} alt="close" />
                            </button>
                        </div>
                        <img src={rulesBonus} alt="rules" />
                    </div>
                )}
        </>

    )
}

export default Rules