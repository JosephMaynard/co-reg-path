import Inferno from 'inferno';
import './CTAButton.css';

function CTAButton(props) {
    return (
        <button
            className="CTAButton"
            disabled={props.disabled}
        >{props.text}</button>
    );
}

export default CTAButton;
