import style from "./Choice.module.scss"
import {rock, paper, scissors, lizard, spock} from "../../assets"
function Choice({choice, winner}) {

  const getImage = () => {
    switch (choice) {
      case 'rock':
        return rock;
      case 'paper':
        return paper;
      case 'scissors':
        return scissors;
      case 'lizard':
        return lizard;
      case 'spock':
        return spock;
      default:
        return null;
    }
  }

  const imageUrl = getImage(choice);
  return (
    <div className={`${style.container} ${style[choice]}`}>
      
      <div className={style.image}>
      <div className={`${winner ? style.winner : ''}`}></div>
      <div className={`${winner ? style.win : ''}`}></div>
      <div className={`${winner ? style.won : ''}`}></div>
        <img src={imageUrl} alt={choice} />
      </div>
    </div>
  )
}

export default Choice