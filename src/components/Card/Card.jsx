import Button from '../Button/Button';
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <img 
                className='card__img'
                src={props.img} 
                alt={props.name} 
            />
            <h1 className='card__title'>{props.name}</h1>
            <h5 className='card__portrayed'>{props.portrayed}</h5>
            <Button className='card__btn' setId={props.setId} />
        </div>
    );
}
 
export default Card;