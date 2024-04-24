import style from "./Choice.module.scss"
import {rock, paper, scissors, lizard, spock} from "../../assets"
function Choice({choice}) {

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
  console.log(choice)
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  )
}

export default Choice