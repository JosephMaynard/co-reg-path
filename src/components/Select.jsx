import './Select.css';

const Select = (props) => {
    let selected = '';
    return (
        <div className="Select">
            <label className="Select-label" htmlFor={props.id}>
                <select
                    className="Select-input"
                    onChange={e => {
                        selected = e.target.value;
                        props.optionSelected(e.target.value);
                    }}
                    id={props.id}
                    value={props.value}
                    required
                >
                    <option value="" disabled selected hidden>{props.placeholder || 'Please select...'}</option>
                    {props.options.map(option => <option value={option.value.toString()}>{option.text}</option>)}
                </select>      
                <div className={ selected === '' 
                    ? 'Select-label-span'
                    : 'Select-label-span Select-label-span-not-empty'
                } >{props.label}</div>
                <svg className="Select-line" viewBox="0 0 40 2" preserveAspectRatio="none">
                    <path d="M0 1 L40 1"/>
                    <path d="M0 1 L40 1" className="focus"/>
                    <path d="M0 1 L40 1" className="invalid"/>
                    <path d="M0 1 L40 1" className="valid"/>
                </svg>
            </label>
        </div>
    );
};

export default Select;
