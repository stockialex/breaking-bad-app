import Card from "../Card/Card";
import './CardContainer.css'

const CardContainer = (props) => {
    return (
        <div className="card-container">
            {
            props.character ? 
                <Card 
                    img={props.character.img} 
                    name={props.character.name}
                    portrayed={props.character.portrayed}
                    setId={props.setId}
                />:
                <></>
            }
        </div>

    );
}
 
export default CardContainer;