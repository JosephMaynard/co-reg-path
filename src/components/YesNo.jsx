import './CTAButton.css';

const YesNo = (props) => {
    return (
        <div className="YesNo">
            <button
                className="NoButton"
                onClick={() => props.nextstep(props.name, false)}
            >no</button>
            <button
                className="YesButton"
                onClick={() => props.nextstep(props.name, true)}
            >YES!</button>
        </div>
    );
};

export default YesNo;
