import './CTAButton.css';

function YesNo(props) {
    return (
        <div className="YesNo">
            <button
                className="NoButton"
                onClick={props.nextstep}
            >no</button>
            <button
                className="YesButton"
                onClick={props.nextstep}
            >YES!</button>
        </div>
    );
}

export default YesNo;
