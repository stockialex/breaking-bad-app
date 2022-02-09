import './Button.css'

const Button = (props) => {

    function handleClick(event) {
        const id = Math.floor(Math.random() * (63 - 1)) + 1
        props.setId(id)
    }

    return (
        <button 
            className='btn'
            onClick={handleClick}
        >
            Select a character
        </button>
      );
}
 
export default Button;