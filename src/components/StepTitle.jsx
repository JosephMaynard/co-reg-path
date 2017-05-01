const StepTitle = (props) => {
    return (<p className="title">{props.text.split('\n').map((item, key) => {
        return (
            <span key={key}>
                {item}
                {key < props.text.split.length -1 ? <br/> : null}
            </span>)
        })}</p>
    );
};

export default StepTitle;
