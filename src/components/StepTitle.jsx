const StepTitle = (props) => {
    return (
        <p className="title">
            {props.text.split('\n').map((item, key) => {
                return (
                    <span key={key}>
                        {item}
                        {key < props.text.split('\n').length  ? <br/> : null}
                    </span>);
            })}
            {props.link && props.linkText
                ? <a
                    href={props.link}
                    target='_blank'
                    rel='nofollow'
                    className='title-link'
                >{props.linkText}</a>
                : null
            }
        </p>
    );
};

export default StepTitle;
