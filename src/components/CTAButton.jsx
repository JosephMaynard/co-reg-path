import './CTAButton.css';

function CTAButton(props) {
    return (
        <button
            className={props.cancelButton ? 'cancelButton' : 'CTAButton'}
            disabled={props.disabled}
            onClick={props.nextstep}
        >{props.text}</button>
    );
}

export default CTAButton;
