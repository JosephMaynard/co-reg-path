import './Checkboxes.css';

const selectedCheckboxes = new Set();

const Checkboxes = (props) => {
    return (
        <div className='Checkboxes'>
            <ul className='Checkboxes-ul'>
                {props.options.map((option, index) => {
                    return (
                        <li className='Checkboxes-li'>
                            <label 
                                htmlFor={`${props.id}-${index}`}
                                className='Checkboxes-label'
                            >
                                <input
                                    className='Checkboxes-input'
                                    type='checkbox'
                                    name={props.name}
                                    value={option.value.toString()}
                                    id={`${props.id}-${index}`}
                                    onChange={e => {
                                        const value = e.target.value;
                                        if (selectedCheckboxes.has(value)) {
                                            selectedCheckboxes.delete(value);
                                        } else {
                                            selectedCheckboxes.add(value);
                                        }
                                        props.updateValue([...selectedCheckboxes].join('&'));
                                    }}
                                />
                                <svg viewBox='0 0 30 30' className='Checkboxes-square'>
                                    <rect  x='2' y='2' width='26' height='26' className='outline' />
                                    <rect x='7' y='7' width='16' height='16'  className='checked' />    
                                </svg>
                                <span className='Checkboxes-span'>
                                    {option.text}
                                </span>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Checkboxes;
