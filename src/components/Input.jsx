import './Input.css';

const Input = (props) => {
    return (
        <div className="Input">
            <label className="Input-label" htmlFor={props.id}>
                <input
                    className="Input-input"
                    type={props.type}
                    id={props.id}
                    minLength={props.minLength}
                    maxLength={props.maxLength}
                    min={props.min}
                    max={props.max}
                    value={props.value}
                    onInput={props.handleChange}
                    onKeyPress={props.handleKeyPress}
                    required
                />        
                <div className={ props.value === '' 
                    ? 'Input-label-span'
                    : 'Input-label-span Input-label-span-not-empty'
                } >{props.label}</div>
                <svg className="Input-line" viewBox="0 0 40 2" preserveAspectRatio="none">
                    <path d="M0 1 L40 1"/>
                    <path d="M0 1 L40 1" className="focus"/>
                    <path d="M0 1 L40 1" className="invalid"/>
                    <path d="M0 1 L40 1" className="valid"/>
                </svg>
            </label>
        </div>
    );
};

export default Input;
