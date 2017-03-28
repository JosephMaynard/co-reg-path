import './CTAButton.css';

function CTAButton(props) {
    return (
        <button
            className="CTAButton"
            disabled={props.disabled}
            onClick={props.onClick}
        >{props.text}</button>
    );
}

export default CTAButton;
